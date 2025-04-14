import { useEffect, useState } from "react";
import LatexRenderer from "./LatexRenderer";

function MarkdownProcessor({ content }) {
	const [processedContent, setProcessedContent] = useState([]);

	useEffect(() => {
		const processMarkdown = (text) => {
			const lines = text.split("\n");
			const result = [];
			let mathBlockContent = "";
			let inMathBlock = false;
			let blockId = 0;

			for (let i = 0; i < lines.length; i++) {
				const line = lines[i];

				// Handle math blocks
				if (line.trim() === "$$") {
					if (!inMathBlock) {
						inMathBlock = true;
						mathBlockContent = "";
					} else {
						result.push({
							type: "math-block",
							content: mathBlockContent,
							id: `math-block-${blockId++}`,
						});
						inMathBlock = false;
					}
					continue;
				}

				if (inMathBlock) {
					mathBlockContent += line + "\n";
					continue;
				}

				// Single line math block
				if (line.trim().startsWith("$$") && line.trim().endsWith("$$")) {
					const math = line.trim().slice(2, -2);
					result.push({
						type: "math-block",
						content: math,
						id: `math-block-${blockId++}`,
					});
					continue;
				}

				// Process headings
				if (line.startsWith("# ")) {
					result.push({
						type: "h1",
						content: line.slice(2),
						id: `heading-${blockId++}`,
					});
				} else if (line.startsWith("## ")) {
					result.push({
						type: "h2",
						content: line.slice(3),
						id: `heading-${blockId++}`,
					});
				} else if (line.startsWith("### ")) {
					result.push({
						type: "h3",
						content: line.slice(4),
						id: `heading-${blockId++}`,
					});
				} else if (line.trim() === "") {
					result.push({
						type: "empty",
						id: `empty-${blockId++}`,
					});
				} else {
					result.push({
						type: "paragraph",
						content: line,
						id: `paragraph-${blockId++}`,
					});
				}
			}

			return result;
		};

		setProcessedContent(processMarkdown(content));
	}, [content]);

	const renderInlineContent = (text) => {
		if (!text.includes("$")) return text;

		const parts = [];
		let lastIndex = 0;
		let inMath = false;
		let mathContent = "";
		let partId = 0;

		for (let i = 0; i < text.length; i++) {
			if (text[i] === "$") {
				if (!inMath) {
					// Text before math
					if (i > lastIndex) {
						parts.push({
							type: "text",
							content: text.substring(lastIndex, i),
							id: `inline-text-${partId++}`,
						});
					}
					inMath = true;
					mathContent = "";
				} else {
					// End of math
					parts.push({
						type: "math-inline",
						content: mathContent,
						id: `inline-math-${partId++}`,
					});
					inMath = false;
					lastIndex = i + 1;
				}
			} else if (inMath) {
				mathContent += text[i];
			}
		}

		// Add remaining text
		if (lastIndex < text.length) {
			parts.push({
				type: "text",
				content: text.substring(lastIndex),
				id: `inline-text-${partId++}`,
			});
		}

		return parts.map((part) => {
			if (part.type === "text") return part.content;
			if (part.type === "math-inline") {
				return (
					<LatexRenderer key={part.id} math={part.content} display={false} />
				);
			}
			return null;
		});
	};

	return (
		<div className="markdown-content">
			{processedContent.map((item) => {
				switch (item.type) {
					case "h1":
						return <h1 key={item.id}>{renderInlineContent(item.content)}</h1>;
					case "h2":
						return <h2 key={item.id}>{renderInlineContent(item.content)}</h2>;
					case "h3":
						return <h3 key={item.id}>{renderInlineContent(item.content)}</h3>;
					case "paragraph":
						return <p key={item.id}>{renderInlineContent(item.content)}</p>;
					case "math-block":
						return (
							<LatexRenderer key={item.id} math={item.content} display={true} />
						);
					case "empty":
						return <br key={item.id} />;
					default:
						return null;
				}
			})}
		</div>
	);
}

export default MarkdownProcessor;

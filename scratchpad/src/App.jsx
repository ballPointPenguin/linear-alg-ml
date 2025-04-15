import { Allotment } from "allotment";
import { useEffect, useRef, useState } from "react";
import Instructions from "./Instructions";
import KeyboardShortcuts from "./KeyboardShortcuts";
import LatexHelper from "./LatexHelper";
import useLocalStorage from "./LocalStorageHandler";
import MarkdownProcessor from "./MarkdownProcessor";
import ThemeToggle from "./ThemeToggle";

import "./App.css";
import "allotment/dist/style.css";
import "katex/dist/katex.min.css";

function App() {
	const [input, setInput] = useLocalStorage(
		"mathScratchpadContent",
		`# Math Scratch Pad

## Vector Operations from Linear Algebra

The dot product of vectors $\\vec{a}$ and $\\vec{b}$ is:
$$
\\vec{a} \\cdot \\vec{b} = \\sum_{i} a_i b_i = |\\vec{a}||\\vec{b}|\\cos\\theta
$$

## Vector Examples

Vector length calculation using the Pythagorean theorem:
$$
|\\vec{v}| = \\sqrt{\\sum_{i=1}^{n} v_i^2}
$$

For a 2D vector $\\vec{v} = (v_1, v_2)$:
$$
|\\vec{v}| = \\sqrt{v_1^2 + v_2^2}
$$

## Projection Calculations

The scalar projection of vector $\\vec{b}$ onto vector $\\vec{a}$ is:
$$
\\text{proj}_{\\vec{a}}\\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|}
$$

The vector projection is:
$$
\\text{proj}_{\\vec{a}}\\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{\\vec{a} \\cdot \\vec{a}} \\vec{a}
$$

## Matrix Operations

For a 2×2 matrix:
$$
A = \\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
$$

The determinant is:
$$
\\det(A) = ad - bc
$$

## Try editing the text on the left!
`,
	);

	const [saved, setSaved] = useState(true);
	const [showInstructions, setShowInstructions] = useState(true);
	const editorRef = useRef(null);

	// Check if instructions should be hidden
	useEffect(() => {
		const hideInstructions =
			localStorage.getItem("hideInstructions") === "true";
		if (hideInstructions) {
			setShowInstructions(false);
		}
	}, []);

	// Track unsaved changes
	useEffect(() => {
		const handleBeforeUnload = (e) => {
			if (!saved) {
				e.preventDefault();
				e.returnValue =
					"You have unsaved changes. Are you sure you want to leave?";
				return e.returnValue;
			}
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [saved]);

	// Save handler for keyboard shortcuts
	const handleSave = () => {
		// LocalStorage saving is automatic with our hook
		setSaved(true);
		// Visual feedback for save
		const saveIndicator = document.createElement("div");
		saveIndicator.textContent = "Saved!";
		saveIndicator.style.position = "fixed";
		saveIndicator.style.bottom = "20px";
		saveIndicator.style.right = "20px";
		saveIndicator.style.padding = "8px 16px";
		saveIndicator.style.backgroundColor = "#2ecc71";
		saveIndicator.style.color = "white";
		saveIndicator.style.borderRadius = "4px";
		saveIndicator.style.zIndex = "1000";
		saveIndicator.style.opacity = "1";
		saveIndicator.style.transition = "opacity 1s ease-in-out";

		document.body.appendChild(saveIndicator);

		setTimeout(() => {
			saveIndicator.style.opacity = "0";
			setTimeout(() => {
				document.body.removeChild(saveIndicator);
			}, 1000);
		}, 2000);
	};

	// Handle LaTeX helper insertion
	const handleInsertLatex = (latex) => {
		if (!editorRef.current) return;

		const textarea = editorRef.current;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const text = input;

		const newText = text.substring(0, start) + latex + text.substring(end);
		setInput(newText);
		setSaved(false);

		// Set cursor position after inserted text
		setTimeout(() => {
			textarea.focus();
			textarea.selectionStart = textarea.selectionEnd = start + latex.length;
		}, 0);
	};

	return (
		<div className="app">
			<header className="header">
				<h1>Math Scratch Pad</h1>
				<ThemeToggle />
			</header>
			<KeyboardShortcuts onSave={handleSave} />
			<LatexHelper onInsert={handleInsertLatex} />
			{showInstructions && (
				<Instructions onClose={() => setShowInstructions(false)} />
			)}
			<div className="container">
				<Allotment defaultSizes={[40, 60]}>
					<Allotment.Pane minSize={300}>
						<div className="editor-pane">
							<textarea
								ref={editorRef}
								value={input}
								onChange={(e) => {
									setInput(e.target.value);
									setSaved(false);
								}}
								className="editor"
								spellCheck="false"
								placeholder="Type your math notes here... Use $ for inline math and $$ for block math"
							/>
						</div>
					</Allotment.Pane>
					<Allotment.Pane snap>
						<div className="preview-pane">
							<div className="preview">
								<MarkdownProcessor content={input} />
							</div>
						</div>
					</Allotment.Pane>
				</Allotment>
			</div>
		</div>
	);
}

export default App;

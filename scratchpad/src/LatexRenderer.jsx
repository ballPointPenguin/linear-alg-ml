import katex from "katex";
import { useEffect, useRef } from "react";
import "katex/dist/katex.min.css";

function LatexRenderer({ math, display = false }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			try {
				katex.render(math, containerRef.current, {
					displayMode: display,
					throwOnError: false,
					output: "html",
				});
			} catch (error) {
				containerRef.current.textContent = `Error rendering: ${math}`;
				containerRef.current.classList.add("error");
			}
		}
	}, [math, display]);

	return (
		<span
			ref={containerRef}
			className={display ? "block-math" : "inline-math"}
		/>
	);
}

export default LatexRenderer;

import { useState } from "react";
import "./Instructions.css";

function Instructions() {
	const [isOpen, setIsOpen] = useState(true);

	if (!isOpen) {
		return (
			<button
				className="instructions-toggle"
				onClick={() => setIsOpen(true)}
				title="Show Instructions"
			>
				?
			</button>
		);
	}

	return (
		<div className="instructions-overlay">
			<div className="instructions-modal">
				<div className="instructions-header">
					<h2>Math Scratch Pad Instructions</h2>
					<button onClick={() => setIsOpen(false)}>×</button>
				</div>
				<div className="instructions-content">
					<h3>Basic Usage</h3>
					<p>
						Type your notes in the left panel and see the rendered output in the
						right panel. The content auto-saves to your browser's local storage.
					</p>

					<h3>Math Syntax</h3>
					<ul>
						<li>
							<strong>Inline Math:</strong> Use <code>$...$</code> for inline
							equations (e.g., <code>$E = mc^2$</code>)
						</li>
						<li>
							<strong>Block Math:</strong> Use <code>$$...$$</code> for
							displayed equations
						</li>
					</ul>

					<h3>Markdown Support</h3>
					<ul>
						<li>
							<strong>Headings:</strong> Use <code># Heading 1</code>,{" "}
							<code>## Heading 2</code>, <code>### Heading 3</code>
						</li>
						<li>
							<strong>Paragraphs:</strong> Just type normal text with blank
							lines between paragraphs
						</li>
					</ul>

					<h3>Keyboard Shortcuts</h3>
					<ul>
						<li>
							<strong>Ctrl+S / Cmd+S:</strong> Save your work
						</li>
					</ul>

					<h3>LaTeX Helper</h3>
					<p>
						Click the Σ button in the bottom right to access common LaTeX
						symbols and templates.
					</p>

					<div className="instructions-footer">
						<button
							onClick={() => {
								localStorage.setItem("hideInstructions", "true");
								setIsOpen(false);
							}}
						>
							Don't show again
						</button>
						<button onClick={() => setIsOpen(false)} className="close-button">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Instructions;

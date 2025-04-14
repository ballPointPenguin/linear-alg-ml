import { useState } from "react";
import "./LatexHelper.css";

function LatexHelper({ onInsert }) {
	const [isOpen, setIsOpen] = useState(false);

	const symbolCategories = [
		{
			name: "Greek Letters",
			symbols: [
				{ display: "α", latex: "\\alpha" },
				{ display: "β", latex: "\\beta" },
				{ display: "γ", latex: "\\gamma" },
				{ display: "Γ", latex: "\\Gamma" },
				{ display: "δ", latex: "\\delta" },
				{ display: "Δ", latex: "\\Delta" },
				{ display: "ε", latex: "\\epsilon" },
				{ display: "θ", latex: "\\theta" },
				{ display: "λ", latex: "\\lambda" },
				{ display: "π", latex: "\\pi" },
				{ display: "ρ", latex: "\\rho" },
				{ display: "σ", latex: "\\sigma" },
				{ display: "τ", latex: "\\tau" },
				{ display: "φ", latex: "\\phi" },
				{ display: "ω", latex: "\\omega" },
			],
		},
		{
			name: "Operators",
			symbols: [
				{ display: "±", latex: "\\pm" },
				{ display: "×", latex: "\\times" },
				{ display: "÷", latex: "\\div" },
				{ display: "·", latex: "\\cdot" },
				{ display: "≠", latex: "\\neq" },
				{ display: "≈", latex: "\\approx" },
				{ display: "≤", latex: "\\leq" },
				{ display: "≥", latex: "\\geq" },
				{ display: "∑", latex: "\\sum" },
				{ display: "∏", latex: "\\prod" },
				{ display: "∫", latex: "\\int" },
				{ display: "∂", latex: "\\partial" },
				{ display: "∞", latex: "\\infty" },
				{ display: "∈", latex: "\\in" },
				{ display: "∉", latex: "\\notin" },
			],
		},
		{
			name: "Arrows",
			symbols: [
				{ display: "←", latex: "\\leftarrow" },
				{ display: "→", latex: "\\rightarrow" },
				{ display: "↔", latex: "\\leftrightarrow" },
				{ display: "⇒", latex: "\\Rightarrow" },
				{ display: "⇐", latex: "\\Leftarrow" },
				{ display: "⇔", latex: "\\Leftrightarrow" },
			],
		},
		{
			name: "Sets",
			symbols: [
				{ display: "∅", latex: "\\emptyset" },
				{ display: "∩", latex: "\\cap" },
				{ display: "∪", latex: "\\cup" },
				{ display: "⊂", latex: "\\subset" },
				{ display: "⊆", latex: "\\subseteq" },
				{ display: "⊄", latex: "\\not\\subset" },
			],
		},
	];

	const templates = [
		{ name: "Fraction", template: "\\frac{numerator}{denominator}" },
		{ name: "Square Root", template: "\\sqrt{expression}" },
		{ name: "Nth Root", template: "\\sqrt[n]{expression}" },
		{ name: "Vector", template: "\\vec{a}" },
		{
			name: "Matrix 2×2",
			template: "\\begin{pmatrix}\na & b \\\\\nc & d\n\\end{pmatrix}",
		},
		{
			name: "Matrix 3×3",
			template:
				"\\begin{pmatrix}\na & b & c \\\\\nd & e & f \\\\\ng & h & i\n\\end{pmatrix}",
		},
		{ name: "Sum", template: "\\sum_{i=1}^{n} x_i" },
		{ name: "Integral", template: "\\int_{a}^{b} f(x) \\, dx" },
		{ name: "Limit", template: "\\lim_{x \\to a} f(x)" },
	];

	const handleInsert = (content) => {
		if (onInsert) {
			onInsert(content);
			setIsOpen(false);
		}
	};

	if (!isOpen) {
		return (
			<button
				className="helper-toggle-button"
				onClick={() => setIsOpen(true)}
				title="Show LaTeX Helper"
			>
				Σ
			</button>
		);
	}

	return (
		<div className="latex-helper">
			<div className="helper-header">
				<h3>LaTeX Helper</h3>
				<button onClick={() => setIsOpen(false)}>×</button>
			</div>

			<div className="helper-content">
				<div className="templates-section">
					<h4>Templates</h4>
					<div className="templates-grid">
						{templates.map((template, index) => (
							<button
								key={index}
								className="template-button"
								onClick={() => handleInsert(template.template)}
							>
								{template.name}
							</button>
						))}
					</div>
				</div>

				<div className="symbols-section">
					{symbolCategories.map((category, categoryIndex) => (
						<div key={categoryIndex} className="symbol-category">
							<h4>{category.name}</h4>
							<div className="symbols-grid">
								{category.symbols.map((symbol, symbolIndex) => (
									<button
										key={symbolIndex}
										className="symbol-button"
										onClick={() => handleInsert(symbol.latex)}
										title={symbol.latex}
									>
										{symbol.display}
									</button>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default LatexHelper;

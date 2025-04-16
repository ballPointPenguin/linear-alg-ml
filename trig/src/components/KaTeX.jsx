import katex from "katex";
import "katex/dist/katex.min.css";
import React from "react";

export function BlockMath({ math, errorColor = "#cc0000" }) {
	let html;
	try {
		html = katex.renderToString(math, { displayMode: true, errorColor });
	} catch (err) {
		html = `<span style="color:${errorColor}">${err.message}</span>`;
	}
	// biome-ignore lint/security/noDangerouslySetInnerHtml: necessary for katex
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function InlineMath({ math, errorColor = "#cc0000" }) {
	let html;
	try {
		html = katex.renderToString(math, { displayMode: false, errorColor });
	} catch (err) {
		html = `<span style="color:${errorColor}">${err.message}</span>`;
	}
	// biome-ignore lint/security/noDangerouslySetInnerHtml: necessary for katex
	return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

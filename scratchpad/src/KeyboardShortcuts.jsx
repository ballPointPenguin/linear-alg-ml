import { useEffect } from "react";

function KeyboardShortcuts({ onSave }) {
	useEffect(() => {
		const handleKeyDown = (event) => {
			// Ctrl+S or Cmd+S to save
			if ((event.ctrlKey || event.metaKey) && event.key === "s") {
				event.preventDefault();
				if (onSave) onSave();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [onSave]);

	return null; // This component doesn't render anything
}

export default KeyboardShortcuts;

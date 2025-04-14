import { useEffect, useState } from "react";

function ThemeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// Check for user preference
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			setIsDarkMode(true);
			document.body.classList.add("dark-theme");
		}
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) {
			document.body.classList.remove("dark-theme");
			localStorage.setItem("theme", "light");
		} else {
			document.body.classList.add("dark-theme");
			localStorage.setItem("theme", "dark");
		}
		setIsDarkMode(!isDarkMode);
	};

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle"
			title="Toggle dark mode"
		>
			{isDarkMode ? "☀️" : "🌙"}
		</button>
	);
}

export default ThemeToggle;

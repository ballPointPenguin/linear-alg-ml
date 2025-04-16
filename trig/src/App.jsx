import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import "katex/dist/katex.min.css";
import { P5Demo } from "./components/P5Demo.jsx";
import { UnitCircle } from "./components/UnitCircle.jsx";

function Home() {
	return (
		<div>
			<h2>Welcome to Trigonometry Review</h2>
			<p>Select a concept to get started.</p>
		</div>
	);
}

function TrigFunctions() {
	return (
		<div>
			<h2>Trigonometric Functions</h2>
			<p>Review sine, cosine, tangent, and their properties.</p>
		</div>
	);
}

function App() {
	return (
		<BrowserRouter>
			<nav style={{ marginBottom: "1rem" }}>
				<NavLink to="/">Home</NavLink> |{" "}
				<NavLink to="/p5-demo">P5 Demo</NavLink> |{" "}
				<NavLink to="/unit-circle">Unit Circle</NavLink> |{" "}
				<NavLink to="/trig-functions">Trig Functions</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="p5-demo" element={<P5Demo />} />
				<Route path="unit-circle" element={<UnitCircle />} />
				<Route path="trig-functions" element={<TrigFunctions />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

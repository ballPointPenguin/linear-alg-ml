import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import "katex/dist/katex.min.css";
import { P5Demo } from "./components/P5Demo.jsx";
import { UnitCircle } from "./components/UnitCircle.jsx";
import { SineCosine } from "./components/SineCosine.jsx";
import { SineCosineInteractive } from "./components/SineCosineInteractive.jsx";
import { TangentExplorer } from "./components/TangentExplorer.jsx";
import { RightTrianglePlayground } from "./components/RightTrianglePlayground.jsx";
import { MafsHello } from "./components/MafsHello.jsx";

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
				<NavLink to="/sine-cosine">Sine/Cosine</NavLink> |{" "}
				<NavLink to="/sine-cosine-interactive">Sine/Cosine Interactive</NavLink> |{" "}
				<NavLink to="/tangent-explorer">Tangent Explorer</NavLink> |{" "}
				<NavLink to="/right-triangle-playground">Right Triangle Playground</NavLink> |{" "}
				<NavLink to="/mafs-hello">Mafs Hello</NavLink> |{" "}
				<NavLink to="/trig-functions">Trig Functions</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="p5-demo" element={<P5Demo />} />
				<Route path="unit-circle" element={<UnitCircle />} />
				<Route path="sine-cosine" element={<SineCosine />} />
				<Route path="sine-cosine-interactive" element={<SineCosineInteractive />} />
				<Route path="tangent-explorer" element={<TangentExplorer />} />
				<Route path="right-triangle-playground" element={<RightTrianglePlayground />} />
				<Route path="mafs-hello" element={<MafsHello />} />
				<Route path="trig-functions" element={<TrigFunctions />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function Home() {
	return (
		<div>
			<h2>Welcome to Trigonometry Review</h2>
			<p>Select a concept to get started.</p>
		</div>
	);
}

function UnitCircle() {
	return (
		<div>
			<h2>Unit Circle</h2>
			<p>Explore the unit circle, angles, and coordinates.</p>
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
		<Router>
			<nav style={{ marginBottom: "1rem" }}>
				<Link to="/">Home</Link> | <Link to="/unit-circle">Unit Circle</Link> |{" "}
				<Link to="/trig-functions">Trig Functions</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/unit-circle" element={<UnitCircle />} />
				<Route path="/trig-functions" element={<TrigFunctions />} />
			</Routes>
		</Router>
	);
}

export default App;

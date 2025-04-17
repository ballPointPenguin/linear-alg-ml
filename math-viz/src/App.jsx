import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "katex/dist/katex.min.css";
import Layout from "./Layout.jsx";
import CosineDotProduct from "./components/CosineDotProduct";
import { MafsHello } from "./components/MafsHello.jsx";
import { MafsTrigFunctions } from "./components/MafsTrigFunctions.jsx";
import { MafsUnitCircleSine } from "./components/MafsUnitCircleSine.jsx";
import { P5Demo } from "./components/P5Demo.jsx";
import { RightTrianglePlayground } from "./components/RightTrianglePlayground.jsx";
import { SineCosine } from "./components/SineCosine.jsx";
import { SineCosineInteractive } from "./components/SineCosineInteractive.jsx";
import { TangentExplorer } from "./components/TangentExplorer.jsx";
import { UnitCircle } from "./components/UnitCircle.jsx";
import { VectorAddition } from "./components/VectorAddition.jsx";
import { VectorOperations } from "./components/VectorOperations.jsx";

function Home() {
	return (
		<div>
			<h2>Welcome to Math Visualizations</h2>
			<p>Select a topic from the sidebar to get started.</p>
		</div>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* Trigonometry */}
					<Route path="unit-circle" element={<UnitCircle />} />
					<Route path="sine-cosine" element={<SineCosine />} />
					<Route
						path="sine-cosine-interactive"
						element={<SineCosineInteractive />}
					/>
					<Route path="tangent-explorer" element={<TangentExplorer />} />
					<Route
						path="right-triangle-playground"
						element={<RightTrianglePlayground />}
					/>
					<Route
						path="mafs-unit-circle-sine"
						element={<MafsUnitCircleSine />}
					/>
					<Route path="mafs-trig-functions" element={<MafsTrigFunctions />} />
					{/* Linear Algebra */}
					<Route path="vector-addition" element={<VectorAddition />} />
					<Route path="vector-operations" element={<VectorOperations />} />
					<Route path="cosine-dot-product" element={<CosineDotProduct />} />
					{/* Demos & Utilities */}
					<Route path="p5-demo" element={<P5Demo />} />
					<Route path="mafs-hello" element={<MafsHello />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

# Vector Audio Visualization

An interactive exploration of vector concepts from linear algebra with sonification using P5.js and Web Audio API.

## Features

- Interactive vector visualization (addition, scalar multiplication, dot product)
- Sound synthesis based on vector properties
- Real-time parameter adjustment with sliders
- Visualization of mathematical vector operations

## Audio Mapping

- **Vector magnitude** → Frequency (pitch)
- **Vector direction (x-component)** → Stereo panning
- **Dot product sign** → Consonant/dissonant intervals
- **Dot product magnitude** → Volume

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory in your terminal
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3001` (or the URL shown in your terminal)

## Usage

- Use the sliders to adjust the components of vectors v₁ and v₂
- Use the scalar slider to adjust the scalar multiplier value
- Click the "Play" buttons to hear sonic representations of different vectors
- Observe how the visual representation changes as you adjust parameters

## Vector Concepts Demonstrated

- Vector components and coordinates
- Vector addition
- Scalar multiplication
- Vector magnitude (length)
- Dot product
- Projection of one vector onto another
- Angle between vectors

## Next Steps

- Implement vector cross product (for 3D vectors)
- Add matrix transformations
- Explore more complex audio mappings
- Add animation of vector transformations

## License

MIT
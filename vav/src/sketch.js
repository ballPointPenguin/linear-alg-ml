import p5 from 'p5';
import Vector from './vector.js';
import VectorAudio from './audio.js';

// Create a new p5 instance
const sketch = (p) => {
  // Canvas dimensions
  const width = 800;
  const height = 600;
  
  // Center of the canvas
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Scale factor to convert from slider values to display values
  const scale = 2;
  
  // Vector data
  let vector1 = new Vector(50, 0);
  let vector2 = new Vector(0, 50);
  let scalarValue = 1.0;
  
  // Audio system
  let vectorAudio;
  
  // DOM elements
  let vector1XSlider, vector1YSlider;
  let vector2XSlider, vector2YSlider;
  let scalarSlider;
  let playVector1Button, playVector2Button, playSumButton, playDotButton;
  
  p.setup = function() {
    // Create canvas
    const canvas = p.createCanvas(width, height);
    canvas.parent('canvas-container');
    
    // Initialize audio system
    vectorAudio = new VectorAudio();
    
    // Get DOM elements
    setupDOM();
    
    // Set up event listeners
    setupEventListeners();
  };
  
  p.draw = function() {
    // Clear the canvas
    p.background(26, 26, 26);
    
    // Draw coordinate axes
    drawAxes();
    
    // Draw grid
    drawGrid();
    
    // Draw vectors
    drawVectors();
    
    // Draw labels and info
    drawLabels();
  };
  
  function setupDOM() {
    // Get vector control sliders
    vector1XSlider = document.getElementById('vector1-x');
    vector1YSlider = document.getElementById('vector1-y');
    vector2XSlider = document.getElementById('vector2-x');
    vector2YSlider = document.getElementById('vector2-y');
    scalarSlider = document.getElementById('scalar');
    
    // Get play buttons
    playVector1Button = document.getElementById('play-vector1');
    playVector2Button = document.getElementById('play-vector2');
    playSumButton = document.getElementById('play-sum');
    playDotButton = document.getElementById('play-dot');
  }
  
  function setupEventListeners() {
    // Update vector values when sliders change
    vector1XSlider.addEventListener('input', function() {
      vector1.x = parseFloat(this.value);
      document.getElementById('vector1-x-value').textContent = vector1.x;
    });
    
    vector1YSlider.addEventListener('input', function() {
      vector1.y = parseFloat(this.value);
      document.getElementById('vector1-y-value').textContent = vector1.y;
    });
    
    vector2XSlider.addEventListener('input', function() {
      vector2.x = parseFloat(this.value);
      document.getElementById('vector2-x-value').textContent = vector2.x;
    });
    
    vector2YSlider.addEventListener('input', function() {
      vector2.y = parseFloat(this.value);
      document.getElementById('vector2-y-value').textContent = vector2.y;
    });
    
    scalarSlider.addEventListener('input', function() {
      scalarValue = parseFloat(this.value);
      document.getElementById('scalar-value').textContent = scalarValue.toFixed(1);
    });
    
    // Play vector audio when buttons are clicked
    playVector1Button.addEventListener('click', function() {
      vectorAudio.playVectorSound(vector1);
    });
    
    playVector2Button.addEventListener('click', function() {
      vectorAudio.playVectorSound(vector2);
    });
    
    playSumButton.addEventListener('click', function() {
      const sum = vector1.add(vector2);
      vectorAudio.playVectorSound(sum);
    });
    
    playDotButton.addEventListener('click', function() {
      const dotProduct = vector1.dot(vector2);
      vectorAudio.playDotProductSound(dotProduct);
    });
  }
  
  function drawAxes() {
    p.stroke(100, 100, 100);
    p.strokeWeight(1);
    
    // X axis
    p.line(0, centerY, width, centerY);
    
    // Y axis
    p.line(centerX, 0, centerX, height);
    
    // Add axis labels
    p.noStroke();
    p.fill(200);
    p.textSize(14);
    p.text('x', width - 20, centerY + 20);
    p.text('y', centerX + 20, 20);
  }
  
  function drawGrid() {
    p.stroke(50, 50, 50);
    p.strokeWeight(0.5);
    
    // Draw vertical grid lines
    for (let x = 0; x <= width; x += 50) {
      p.line(x, 0, x, height);
    }
    
    // Draw horizontal grid lines
    for (let y = 0; y <= height; y += 50) {
      p.line(0, y, width, y);
    }
  }
  
  function drawVectors() {
    // Draw vector 1
    drawVector(centerX, centerY, vector1.x * scale, vector1.y * scale, p.color(255, 100, 100), 'v₁');
    
    // Draw vector 2
    drawVector(centerX, centerY, vector2.x * scale, vector2.y * scale, p.color(100, 100, 255), 'v₂');
    
    // Draw scalar * vector 1
    const scaledVec1 = vector1.multiply(scalarValue);
    drawVector(centerX, centerY, scaledVec1.x * scale, scaledVec1.y * scale, 
              p.color(255, 160, 160), 'sv₁', true);
    
    // Draw sum vector (v1 + v2)
    const sumVec = vector1.add(vector2);
    drawVector(centerX, centerY, sumVec.x * scale, sumVec.y * scale, p.color(100, 255, 100), 'v₁+v₂');
    
    // Visualize dot product
    visualizeDotProduct();
  }
  
  function drawVector(startX, startY, dx, dy, color, label, dashed = false) {
    const endX = startX + dx;
    const endY = startY - dy; // Flip Y axis to match mathematical convention
    
    // Draw vector line
    p.push();
    p.stroke(color);
    p.strokeWeight(2);
    
    if (dashed) {
      drawDashedLine(startX, startY, endX, endY);
    } else {
      p.line(startX, startY, endX, endY);
    }
    
    // Draw arrowhead
    const angle = p.atan2(-dy, dx); // Negative dy because Y is flipped
    const arrowSize = 10;
    p.fill(color);
    p.translate(endX, endY);
    p.rotate(angle);
    p.triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);
    
    // Add label
    p.rotate(-angle);
    p.noStroke();
    p.fill(color);
    p.textSize(16);
    p.text(label, 10, 0);
    p.pop();
  }
  
  function drawDashedLine(x1, y1, x2, y2) {
    // Calculate vector length and direction
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = p.sqrt(dx * dx + dy * dy);
    const nx = dx / len;
    const ny = dy / len;
    
    // Draw dashed line
    const dashLength = 5;
    const gapLength = 3;
    let distance = 0;
    
    while (distance < len) {
      const startDistance = distance;
      const endDistance = Math.min(distance + dashLength, len);
      
      const startX = x1 + nx * startDistance;
      const startY = y1 + ny * startDistance;
      const endX = x1 + nx * endDistance;
      const endY = y1 + ny * endDistance;
      
      p.line(startX, startY, endX, endY);
      
      distance += dashLength + gapLength;
    }
  }
  
  function visualizeDotProduct() {
    // Skip if either vector is zero
    if (vector1.magnitude() === 0 || vector2.magnitude() === 0) return;
    
    // Calculate the projection of v1 onto v2
    const projection = vector1.projectOnto(vector2);
    
    // Draw projection line from v1 to projected point on v2
    const v1EndX = centerX + vector1.x * scale;
    const v1EndY = centerY - vector1.y * scale;
    const projEndX = centerX + projection.x * scale;
    const projEndY = centerY - projection.y * scale;
    
    p.push();
    p.stroke(200, 200, 0, 150);
    p.strokeWeight(1);
    p.drawingContext.setLineDash([3, 3]);
    p.line(v1EndX, v1EndY, projEndX, projEndY);
    p.drawingContext.setLineDash([]);
    p.pop();
    
    // Draw the projection vector along v2
    p.push();
    p.stroke(200, 200, 0);
    p.strokeWeight(3);
    p.line(centerX, centerY, projEndX, projEndY);
    p.pop();
    
    // Display dot product value
    const dotProduct = vector1.dot(vector2);
    p.push();
    p.fill(255);
    p.noStroke();
    p.textSize(16);
    p.textAlign(p.LEFT, p.TOP);
    p.text(`v₁·v₂ = ${dotProduct.toFixed(2)}`, 20, 20);
    p.pop();
  }
  
  function drawLabels() {
    // Display vector information
    p.push();
    p.fill(255);
    p.noStroke();
    p.textSize(16);
    p.textAlign(p.LEFT, p.TOP);
    
    // Vector coordinates
    p.text(`v₁ = ${vector1.toString()}`, 20, 50);
    p.text(`v₂ = ${vector2.toString()}`, 20, 80);
    p.text(`sv₁ = ${vector1.multiply(scalarValue).toString()}`, 20, 110);
    p.text(`v₁+v₂ = ${vector1.add(vector2).toString()}`, 20, 140);
    
    // Vector magnitudes
    p.text(`|v₁| = ${vector1.magnitude().toFixed(2)}`, 250, 50);
    p.text(`|v₂| = ${vector2.magnitude().toFixed(2)}`, 250, 80);
    p.text(`|sv₁| = ${(vector1.magnitude() * scalarValue).toFixed(2)}`, 250, 110);
    p.text(`|v₁+v₂| = ${vector1.add(vector2).magnitude().toFixed(2)}`, 250, 140);
    
    // Draw angle between vectors (if both vectors have non-zero magnitude)
    if (vector1.magnitude() > 0 && vector2.magnitude() > 0) {
      const angle = vector1.angleBetween(vector2);
      p.text(`Angle between v₁ and v₂: ${(angle * 180 / Math.PI).toFixed(2)}°`, 20, 170);
    }
    
    p.pop();
  }
};

// Initialize the P5 sketch
new p5(sketch);
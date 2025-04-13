// Vector operations class

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  
  // Get the magnitude (length) of the vector
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  // Add another vector to this one
  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  
  // Subtract another vector from this one
  subtract(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
  
  // Multiply by a scalar
  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }
  
  // Calculate dot product with another vector
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  
  // Normalize the vector (make it unit length)
  normalize() {
    const mag = this.magnitude();
    if (mag === 0) return new Vector(0, 0);
    return new Vector(this.x / mag, this.y / mag);
  }
  
  // Calculate angle between this vector and another one (in radians)
  angleBetween(vector) {
    const dotProduct = this.dot(vector);
    const magProduct = this.magnitude() * vector.magnitude();
    
    // Handle edge cases to avoid NaN
    if (magProduct === 0) return 0;
    
    // Clamp value to avoid floating point errors
    const cosTheta = Math.max(-1, Math.min(1, dotProduct / magProduct));
    return Math.acos(cosTheta);
  }
  
  // Project this vector onto another vector
  projectOnto(vector) {
    const otherMag = vector.magnitude();
    if (otherMag === 0) return new Vector(0, 0);
    
    const dotProduct = this.dot(vector);
    const scalar = dotProduct / (otherMag * otherMag);
    
    return vector.multiply(scalar);
  }
  
  // Clone the vector
  clone() {
    return new Vector(this.x, this.y);
  }
  
  // Convert to string representation
  toString() {
    return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
  }
}

export default Vector;
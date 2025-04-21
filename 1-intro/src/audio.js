// Audio system for vector sonification

class VectorAudio {
  constructor() {
    // Create audio context
    this.audioContext = null;
    this.gainNode = null;
    this.panNode = null;
    this.oscillator = null;
    
    // Initialize audio (called when needed to respect autoplay policies)
    this._initialize();
  }
  
  _initialize() {
    // Create audio context
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create a gain node for volume control
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 0.3; // Set initial volume
    
    // Create a panner node for stereo positioning
    this.panNode = this.audioContext.createStereoPanner();
    
    // Connect the nodes: panNode -> gainNode -> destination
    this.panNode.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }
  
  // Resume audio context (call this on user interaction)
  resume() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }
  
  // Play a sound based on vector properties
  playVectorSound(vector) {
    // Resume audio context if it's suspended
    this.resume();
    
    // Stop previous sound if playing
    this.stopSound();
    
    // Calculate vector magnitude
    const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    
    // Map magnitude to frequency (larger magnitude = higher pitch)
    // Range: 100Hz to 1000Hz
    const minFreq = 100;
    const maxFreq = 1000;
    const frequency = minFreq + (magnitude / 150) * (maxFreq - minFreq);
    
    // Map x-component to stereo panning (-1 to 1)
    const pan = Math.max(-1, Math.min(1, vector.x / 100));
    
    // Create and configure oscillator
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = 'sine'; // Options: sine, square, sawtooth, triangle
    this.oscillator.frequency.value = frequency;
    
    // Set pan position
    this.panNode.pan.value = pan;
    
    // Connect oscillator to audio graph
    this.oscillator.connect(this.panNode);
    
    // Start the sound
    this.oscillator.start();
    
    // Set note duration (500ms)
    setTimeout(() => this.stopSound(), 500);
  }
  
  // Play a sound representing the dot product
  playDotProductSound(dotProduct) {
    // Resume audio context if it's suspended
    this.resume();
    
    // Stop previous sound if playing
    this.stopSound();
    
    // Normalize dot product to a reasonable range
    const magnitude = Math.abs(dotProduct) / 200;
    
    // Create two oscillators for a chord effect
    const osc1 = this.audioContext.createOscillator();
    const osc2 = this.audioContext.createOscillator();
    
    // Base frequency (C4 = 261.63 Hz)
    const baseFreq = 261.63;
    
    // Configure oscillators
    osc1.type = 'sine';
    osc2.type = 'sine';
    
    // Map dot product to frequencies
    // If positive dot product: consonant interval (fifth)
    // If negative dot product: dissonant interval (tritone)
    if (dotProduct >= 0) {
      // Perfect fifth (frequency ratio: 3/2)
      osc1.frequency.value = baseFreq;
      osc2.frequency.value = baseFreq * 1.5;
    } else {
      // Tritone (frequency ratio: 45/32)
      osc1.frequency.value = baseFreq;
      osc2.frequency.value = baseFreq * (45/32);
    }
    
    // Scale volume based on magnitude
    this.gainNode.gain.value = Math.min(0.3, Math.max(0.05, magnitude));
    
    // Connect oscillators to audio graph
    osc1.connect(this.panNode);
    osc2.connect(this.panNode);
    
    // Store oscillators for later stopping
    this.oscillator = [osc1, osc2];
    
    // Start the sounds
    osc1.start();
    osc2.start();
    
    // Set note duration (800ms)
    setTimeout(() => this.stopSound(), 800);
  }
  
  // Stop any playing sounds
  stopSound() {
    // Stop oscillator(s) if active
    if (this.oscillator) {
      if (Array.isArray(this.oscillator)) {
        // Stop array of oscillators
        this.oscillator.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {
            // Ignore errors when oscillator is already stopped
          }
        });
      } else {
        // Stop single oscillator
        try {
          this.oscillator.stop();
          this.oscillator.disconnect();
        } catch (e) {
          // Ignore errors when oscillator is already stopped
        }
      }
      this.oscillator = null;
    }
  }
}

export default VectorAudio;
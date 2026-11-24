// Futuristic Web Audio synthesizer for sleek UI micro-interactions
let audioCtx = null;
let soundEnabled = false;

export const toggleSound = () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled && !audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (soundEnabled) {
    playBlip(1200, 0.08, 'sine');
  }
  return soundEnabled;
};

export const isSoundEnabled = () => soundEnabled;

export const playBlip = (freq = 800, duration = 0.06, type = 'sine') => {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // AudioContext not allowed or disabled
  }
};

export const playSuccessChime = () => {
  if (!soundEnabled) return;
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
  notes.forEach((f, i) => {
    setTimeout(() => playBlip(f, 0.12, 'triangle'), i * 80);
  });
};

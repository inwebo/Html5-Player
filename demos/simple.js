// import BaseAudioContext from 'core/audio/context';
// import Graph from "../core/audio/nodes/graph-node";
// import Routing from "../core/audio/routing";
// import AudioContext from "../core/audio/context";

let track = './demos/audio/sample.mp3';

// 1 . Create audio context
window.AudioContext = window.AudioContext||window.webkitAudioContext;
let ctx = new AudioContext();
ctx.src = track;

ctx.autoplay = true;
// 2 . In ctx create sources <audio>, oscillator, steam
// ctx.createMediaElementSource();

// 3 . Effects, reverb, biquad filter, panner, compressor

// 4 . Destination

// Sources + effects = Destination

// import BaseAudioContext from 'core/audio/context';
// import Graph from "../core/audio/nodes/graph-node";
// import Routing from "../core/audio/routing";
// import AudioContext from "../core/audio/context";

import AudioSource from "../core/audio/audio-source";

let track = './demos/audio/sample.mp3';

let audioSrc = new AudioSource();
audioSrc.load(track);

// audioSrc.gain(1);
// audioSrc.start();

// 2 . In ctx create sources <audio>, oscillator, steam
// ctx.createMediaElementSource();

// 3 . Effects, reverb, biquad filter, panner, compressor

// 4 . Destination

// Sources + effects = Destination

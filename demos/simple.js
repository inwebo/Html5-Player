import AudioSource from "../core/audio/audio-source";
import Player from "../core/player/player";
import VolumePlugin from "../core/audio/plugins/volume-plugin";
import VuePlugin from "../core/audio/plugins/vue-plugin";
import ReverbPlugin from "../core/audio/plugins/reverb-plugin";

let track = './demos/audio/sample.mp3';

let audioSrc = new AudioSource();
audioSrc.load(track);
let player = new Player(audioSrc);
// player.source.src.loop = true;
player.add('_volume', new VolumePlugin());
player.volume(1);
// player.play(0);

let canvas = document.getElementById('vue');

// player.add('_vue', new VuePlugin());
// player.add('_pitch', new ReverbPlugin());
//
// function step(timestamp) {
//     player.plugins.get('_vue').draw(canvas);
//     requestAnimationFrame(step);
// };
//
// requestAnimationFrame(step);

/**
 * @type {HTMLAudioElement}
 */
let audio = document.getElementById('player');

// console.log(audio);

/**
 *
 * @type {HTMLButtonElement | null}
 */
// let playButton = document.getElementById('play');
// console.log(playButton);

// playButton.addEventListener('click', function () {
//     player.play(0);
// });

// Audio context

    // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource
let audioCtx = new (window.AudioContext || window.webkitAudioContext)();;
var source = audioCtx.createMediaElementSource(audio);

var biquadFilter = audioCtx.createBiquadFilter();
biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;


var gainNode     = audioCtx.createGain();

source.connect(biquadFilter);

biquadFilter.connect(gainNode);

gainNode.connect(audioCtx.destination);

//
// var analyser     = audioCtx.createAnalyser();
// var distortion   = audioCtx.createWaveShaper();
// var gainNode     = audioCtx.createGain();
// var biquadFilter = audioCtx.createBiquadFilter();
// var convolver    = audioCtx.createConvolver();
//
//
//
// source.connect(analyser);
// analyser.connect(distortion);
// distortion.connect(biquadFilter);
// biquadFilter.connect(convolver);
// convolver.connect(gainNode);
// gainNode.connect(audioCtx.destination);
//
// biquadFilter.type = "lowshelf";
// biquadFilter.frequency.value = 1000;
// biquadFilter.gain.value = 25;

audio.play(0);

// Node graph
/*
 */
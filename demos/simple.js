import AudioSource from "../core/audio/audio-source";
import Player from "../core/player/player";
import VolumePlugin from "../core/audio/plugins/volume-plugin";
import VuePlugin from "../core/audio/plugins/vue-plugin";
import ReverbPlugin from "../core/audio/plugins/reverb-plugin";

let track = './demos/audio/sample.mp3';

let audioSrc = new AudioSource();
audioSrc.load(track);
let player = new Player(audioSrc);
player.source.src.loop = true;
player.add('_volume', new VolumePlugin());
player.volume(1);
player.play(0);

let canvas = document.getElementById('vue');

player.add('_vue', new VuePlugin());

function step(timestamp) {
    player.plugins.get('_vue').draw(canvas);
    requestAnimationFrame(step);
};

requestAnimationFrame(step);

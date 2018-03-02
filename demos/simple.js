import BaseContext from 'core/audio/context';
import Graph from "../core/audio/nodes/graph-node";
import Routing from "../core/audio/routing";
/**
 * Sources sonores
 * @type {HTMLElement | null}
 */
// audioCtx = document.getElementById("player");

/** @type {Routing} */
let routing = new Routing();
/**
routing.outputs.set();
 @alias
 */
let audioContext = document.getElementById('player');
routing.outputs.set('channel', audioContext);

// 1 . Create audio context
let audioContext = new BaseContext();
// 2 . In ctx create sources <audio>, oscillator, steam
let context = new Con

// 3 . Effects, reverb, biquad filter, panner, compressor

// 4 . Destination

// Sources + effects = Destination

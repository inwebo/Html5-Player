// Doit garantir que les dans AudioContext les nodes sont des singletons
export default class AudioContext {
    constructor () {
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        /**
         * @type {}
         */
        this.audioContext = new AudioContext();
        /**
         * @type {Array<GraphNode>}
         */
        this.graphs = [];
    }
}
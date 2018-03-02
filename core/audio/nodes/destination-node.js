export class DestinationNode {
    // No outputs, variable par référence du AudioContext
    /**
     *
     * @param {AudioContext} audioContext
     */
    constructor (audioContext) {
        this.audioCtx = audioContext;
    }
}
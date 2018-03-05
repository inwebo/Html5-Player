export default class AbstractAudioSource {
    /**
     * @param {AudioSourceNode|HTMLAudioElement} audioSourceNode
     */
    constructor(audioSourceNode) {
        /**
         * @type {AudioContext}
         */
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();

        this.sourceNode = null;

        this.factory(audioSourceNode);
    }

    factory(audioSourceNode) {
        switch (audioSourceNode) {
            case audioSourceNode instanceof HTMLAudioElement:
                // createMediaElementSource
                this.sourceNode = this.ctx.createMediaElementSource(audioSourceNode);
                break;

            case audioSourceNode instanceof String:
                // createBufferSource
                this.sourceNode = this.ctx.createBufferSource(audioSourceNode);
                break;
        }
    }
}
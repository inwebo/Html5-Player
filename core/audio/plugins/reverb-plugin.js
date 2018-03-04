import AudioPlugin from "./audio-plugin";

export default class ReverbPlugin extends AudioPlugin{
    constructor() {
        super();
    }

    /**
     * @param {AudioSource} audioSource
     */
    connect(audioSource) {
        /**
         * @type {ConvolverNode}
         */
        // this.subject = audioSource.ctx.createConvolver();
        this.subject = audioSource.ctx.createOscillator();

        this.subject.frequency.value = 440;
        // console.log(audioSource.src);
        // this.subject.buffer = audioSource.src.buffer;
        this.subject.connect(audioSource.ctx.destination);
    }
}
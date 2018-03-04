import AudioPlugin from "./audio-plugin";

export default class VolumePlugin extends AudioPlugin {
    constructor()
    {
        super();
    }

    /**
     * @param {AudioSource} audioSource
     */
    connect(audioSource)
    {
        this.subject = audioSource.ctx.createGain();
        audioSource.src.connect(this.subject);
        // this.subject.connect(audioSource.ctx.destination);
    }
}
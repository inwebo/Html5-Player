import AudioPlugin from "./audio-plugin";

export default class VolumePlugin extends AudioPlugin {
    connect(audioContext)
    {
        audioContext.connect(this.ctx.destination);
    }
}
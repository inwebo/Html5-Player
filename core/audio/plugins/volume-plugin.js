import AudioPlugin from "./audio-plugins";

export default class VolumePlugin extends AudioPlugin{
    constructor(audioCtx) {
        super(audioCtx);
    }

    connect()
    {
        this.ctx.createGain().connect(this.ctx.destination);
    }
}
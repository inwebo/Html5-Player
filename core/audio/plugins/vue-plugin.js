import AudioPlugin from "./audio-plugin";

export default class VuePlugin extends AudioPlugin {
    constructor() {
        super();
        this.freqs = null;
    }

    /**
     * @param {AudioSource} audioSource
     */
    connect(audioSource) {
        this.subject = audioSource.ctx.createAnalyser();

        this.subject.fftSize = 256;
        this.subject.smoothingTimeConstant = 0.1;
        this.subject.minDecibels = -140;
        this.subject.maxDecibels = 10;

        audioSource.src.connect(this.subject);
        this.freqs = new Uint8Array(this.subject.frequencyBinCount);
    }

    /**
     * @param {HTMLCanvasElement} canvas
     */
    draw(canvas) {
        this.subject.getByteFrequencyData(this.freqs);
        let pencil = canvas.getContext("2d");

        pencil.fillStyle = "rgba(2,2,2,.1)";

        pencil.clearRect(0, 0, canvas.width, canvas.height);
        pencil.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.subject.frequencyBinCount; i++) {
            let v = this.freqs[i];
            let p = v / 256;
            let h = canvas.height * p;
            let o = canvas.height - h;
            let w = canvas.width / this.subject.frequencyBinCount;
            let hue = i / this.subject.frequencyBinCount * 360;
            pencil.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
            // pencil.fillStyle = 'rgba(255, 255, 255,.5)';
            pencil.fillRect(i * w, o, w, h);
        }
    }
}
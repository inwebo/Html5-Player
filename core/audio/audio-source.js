export default class AudioSource {

    constructor() {
        /**
         * @type {AudioContext}
         */
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        /**
         * @type {AudioBufferSourceNode}
         */
        this.src = this.ctx.createBufferSource();
        /**
         * @type {GainNode}
         */
        this.volume = this.ctx.createGain();
        this.src.connect(this.volume);
        this.volume.connect(this.ctx.destination);
    }

    load(file) {
        var request = new XMLHttpRequest();
        request.open('GET', file, true);
        request.responseType = 'arraybuffer';

        request.onload = function (evt) {
            const plugin = this;
            this.ctx.decodeAudioData(request.response, function (buffer) {
                plugin.src.buffer = buffer;
            }, function (e) {
                console.log('Audio error! ', e);
            });
        }.bind(this);
        request.send();
    }

    start(int) {
        this.src.start(int);
    }

    gain(float) {
        this.volume.gain.setTargetAtTime(float, this.ctx.currentTime, 0);
    }
}
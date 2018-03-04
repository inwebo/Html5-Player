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
    }

    load(file) {
        const request = new XMLHttpRequest();
        request.open('GET', file, true);
        request.responseType = 'arraybuffer';

        request.onload = function () {
            /**
             * @type {AudioSource}
             */
            const plugin = this;
            this.ctx.decodeAudioData(request.response, function (buffer) {
                plugin.src.buffer = buffer;
            }, function (e) {
                console.log('Audio error! ', e);
            }).then(function(){
                return new CustomEvent("bufferready");
            });
        }.bind(this);
        request.send();
    }
}
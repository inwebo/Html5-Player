import AudioPlugin from "../audio/plugins/audio-plugin";

export default class Player {
    /**
     * @param {AudioSource} audioSource
     */
    constructor (audioSource) {
        /**
         * @type {AudioSource}
         */
        this.source = audioSource;
        /**
         *
         * @type {Map<string, AudioPlugin>}
         */
        this.plugins = new Map();
    }

    /**
     *
     * @returns {GainNode}
     */
    getVolume() {
        return this.plugins.get("_volume").subject;
    }

    /**
     * @param {string} pluginName
     * @param {AudioPlugin} pluginInstance
     */
    add(pluginName, pluginInstance) {
        try {
            this.plugins.set(pluginName, pluginInstance);
            pluginInstance.connect(this.source);
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * @param {number} int
     */
    play(int) {
        this.source.src.start(int);
    }

    volume(int) {
        this.getVolume().gain.setTargetAtTime(int, this.source.ctx.currentTime, 0)
    }
}
import AudioPlugin from "../audio/plugins/audio-plugin";
import VolumePlugin from "../audio/plugins/volume-plugin";

export default class Player {
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
     * @param {AudioPlugin} pluginClass
     */
    add(pluginName, pluginClass) {
        try {
            this.plugins.set(pluginName, pluginClass);
            pluginClass.connect(this.source);
            // this.source.src.connect(pluginClass);
        } catch (e) {
            console.log(e);
        }
    }

    play(int) {
        // for(const plugin of this.plugins.values()) {
        //     plugin.connect(this.source.ctx);
        // }
        // this.source.start(int);
        this.source.src.start(int);
    }

    volume(int) {
        // console.log(this.getVolume().gain.value);
        this.getVolume().gain.setTargetAtTime(int, this.source.ctx.currentTime, 0);
        // this.getVolume().gain.value = int;
        // console.log(this.getVolume().gain.value);
        // console.log(int);
        //
        // this.plugins.get("_volume").subject.gain.value = int;
        // console.log(this.plugins.get("_volume").subject.gain.value);
    }
}
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
     * @param {string} pluginName
     * @param {AudioPlugin} pluginClass
     */
    add(pluginName, pluginClass) {
        // new VolumePlugin();
// console.log((new (pluginClass))());
        try {
            this.plugins.set(pluginName, pluginClass);
            pluginClass.connect(this.source.ctx);
        } catch (e) {
            console.log(e);
        }
            // this.plugins.set(pluginName, new (pluginClass.name)());
        // else {
            // error
        // }
    }

    play() {
        for(const plugin of this.plugins) {
            plugin.connect();
        }
    }
}
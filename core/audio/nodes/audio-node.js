import {Destination} from "./destination-node";

export default class AudioNode {
    // Each AudioNode has inputs and outputs, and multiple audio nodes are connected to build a processing graph.
    // This graph is contained in an context, and each audio node can only belong to one audio context.

    /**
     * @param {Destination} destination
     */
    constructor () {
        /**
         *
         * @type {Destination}
         */
        this.outputs = [];
        /**
         *
         * @type {Array<AudioNode>}
         */
        this.inputs = [];
    }
}
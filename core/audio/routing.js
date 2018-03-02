// Un seul et unique audio context donc le source node
export default class Routing {
    constructor() {
        /**
         * @type {Map<id, AudioContext>}
         */
        this.outputs = new Map();
    }
}
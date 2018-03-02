// Doit garantir que les dans AudioContext les nodes sont des singletons
export default class AudioContext {
    constructor () {
        /**
         * @type {Array<GraphNode>}
         */
        this.graphs = [];
    }
}
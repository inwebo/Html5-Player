export default class GraphNode {
    constructor (context, graph) {
        /** @type {AudioContext} */
        this.ctx = context;
        /** @type {Array<AudioNode>} */
        this.graph = graph;
    }
}
import type { Node, Edge } from 'react-flow-renderer';

/**
 * Validates a chatbot flow to ensure it meets the required constraints.
 * 
 * Flow Validation Rules:
 * - If there are 0 or 1 nodes, the flow is always valid
 * - If there are multiple nodes, only one node can have no outgoing edge (end node)
 * - Multiple nodes with no outgoing edges indicate disconnected or invalid flows
 * 
 * @param nodes - Array of all nodes in the flow
 * @param edges - Array of all connections between nodes
 * @returns true if the flow is valid, false otherwise
 * 
 * @example
 * // Valid flow: A -> B -> C (only C has no outgoing edge)
 * validateFlow([nodeA, nodeB, nodeC], [edgeAB, edgeBC]) // returns true
 * 
 * // Invalid flow: A -> B, C (both B and C have no outgoing edges)
 * validateFlow([nodeA, nodeB, nodeC], [edgeAB]) // returns false
 */
export function validateFlow(nodes: Node[], edges: Edge[]): boolean {
  // If there are 0 or 1 nodes, the flow is always valid
  if (nodes.length <= 1) return true;
  
  // Get all nodes that have outgoing edges (are sources)
  const nodesWithOutgoing = new Set(edges.map(e => e.source));
  
  // Find nodes that have no outgoing edges (potential end nodes)
  const nodesWithNoOutgoing = nodes.filter(n => !nodesWithOutgoing.has(n.id));
  
  // If more than one node has no outgoing edge, the flow is invalid
  // This means there are multiple end points or disconnected nodes
  return nodesWithNoOutgoing.length <= 1;
}

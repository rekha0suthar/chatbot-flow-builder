import { BiMessageRoundedDetail } from "react-icons/bi";

/**
 * Configuration for available node types in the flow builder
 * This array defines what types of nodes can be dragged onto the canvas
 * Each node type has a type identifier, display label, description, and icon
 */
const nodeTypes = [
  {
    type: 'textNode', // Unique identifier for the node type
    label: 'Message', // Display name shown to users
    description: 'Send a text message', // Tooltip/description text
    icon: (
      <BiMessageRoundedDetail size={32} color="#1976d2" />
    )
  }
  // Future node types can be added here (e.g., condition nodes, API calls, etc.)
];

/**
 * NodesPanel Component
 * 
 * Displays a panel of draggable node types that users can drag onto the flow canvas.
 * This component serves as the node library for the flow builder.
 * 
 * Features:
 * - Visual representation of available node types
 * - Drag-and-drop functionality for adding nodes to canvas
 * - Hover effects for better user experience
 * - Extensible design for adding new node types
 */
const NodesPanel: React.FC = () => (
  <div className="nodes-panel">
    {/* Render each available node type as a draggable card */}
    {nodeTypes.map((node) => (
      <div
        key={node.type}
        // Enable drag functionality for React Flow
        draggable
        onDragStart={e => e.dataTransfer.setData('application/reactflow', node.type)}
        className="node-card"
      >
        {/* Node type icon */}
        {node.icon}
        {/* Node type label */}
        <div className="node-label">{node.label}</div>
      </div>
    ))}
  </div>
);

export default NodesPanel;

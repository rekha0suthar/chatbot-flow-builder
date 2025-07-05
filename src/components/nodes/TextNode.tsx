import { Handle, Position } from 'react-flow-renderer';
import type { NodeProps } from 'react-flow-renderer';
import { BiMessageRoundedDetail } from "react-icons/bi";

/**
 * TextNode Component
 * 
 * A custom node component for React Flow that represents a text message node.
 * This node displays a message that can be sent in the chatbot flow.
 * 
 * Features:
 * - Visual representation of a message node with header and content
 * - Connection handles for source (right) and target (left)
 * - Selection state styling
 * - Message icon in the header
 * 
 * @param data - Contains the message text and other node data
 * @param selected - Boolean indicating if the node is currently selected
 */
const TextNode: React.FC<NodeProps> = ({ data, selected }: NodeProps) => (
  <div className={`text-node ${selected ? 'selected' : ''}`}>
    {/* Header section with message icon and title */}
    <div className="text-node-header">
      {/* Message icon from react-icons */}
      <BiMessageRoundedDetail size={16} className="text-node-icon" />
      <h3 className="text-node-title">Send Message</h3>
    </div>
    
    {/* Content section displaying the message text */}
    <div className="text-node-content">
      {data.text || <span className="text-node-placeholder">No message</span>}
    </div>
    
    {/* Connection handles for React Flow */}
    {/* Source handle (right) - for outgoing connections */}
    <Handle type="source" position={Position.Right} id="a" />
    {/* Target handle (left) - for incoming connections */}
    <Handle type="target" position={Position.Left} id="b" />
  </div>
);

export default TextNode;

import { useCallback, useRef, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  type Edge,
  MiniMap,
  type Node,
  type ReactFlowInstance,
  useEdgesState,
  useNodesState,
  type Connection
} from 'react-flow-renderer';
import TextNode from './nodes/TextNode';
import NodesPanel from './NodesPanel';
import SettingsPanel from './SettingsPanel';
import SaveButton from './SaveButton';
import { validateFlow } from '../utils/flowValidation';


// Register custom node types for React Flow
const nodeTypes = { textNode: TextNode };

// Initial state for nodes and edges
const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

/**
 * FlowBuilder Component
 * 
 * Main component for the chatbot flow builder application.
 * Provides a visual interface for creating and editing chatbot conversation flows.
 * 
 * Features:
 * - Drag and drop node creation
 * - Visual flow editing with React Flow
 * - Node selection and editing
 * - Flow validation and saving
 * - Responsive layout with sidebar panels
 * 
 * State Management:
 * - nodes: Array of all nodes in the flow
 * - edges: Array of all connections between nodes
 * - selectedNode: Currently selected node for editing
 * - error: Error message for validation failures
 * - reactFlowInstance: Reference to React Flow instance
 */
const FlowBuilder: React.FC = () => {
  // State management using React Flow hooks
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // UI state
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Refs and instances
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  /**
   * Handle drag and drop of nodes from the nodes panel
   * Creates a new node at the drop position
   */
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow');
      if (!type || !reactFlowInstance) return;

      // Calculate position relative to the flow container
      const position = reactFlowInstance.project({
        x: event.clientX - (reactFlowWrapper.current?.getBoundingClientRect().left || 0),
        y: event.clientY - (reactFlowWrapper.current?.getBoundingClientRect().top || 0),
      });

      // Create new node with unique ID and initial data
      const newNode: Node = {
        id: `${type}_${+new Date()}`,
        type,
        position,
        data: { text: '' },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  /**
   * Handle connection creation between nodes
   * Enforces the rule that each source handle can only have one outgoing edge
   */
  const onConnect = useCallback(
    (params: Edge | Connection) => {
      // Check if source already has an outgoing edge (only one allowed)
      const outgoing = edges.filter(e => e.source === params.source);
      if (outgoing.length > 0) return; // Prevent multiple outgoing edges
      setEdges((eds) => addEdge(params, eds));
    },
    [edges, setEdges]
  );

  /**
   * Handle node selection for editing
   */
  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => setSelectedNode(node),
    []
  );

  /**
   * Handle text changes in the selected node
   * Updates both the node data and the selected node state
   */
  const onTextChange = (value: string) => {
    if (!selectedNode) return;
    setNodes((nds) =>
      nds.map((n) =>
        n.id === selectedNode.id ? { ...n, data: { ...n.data, text: value } } : n
      )
    );
    setSelectedNode((n) => n && { ...n, data: { ...n.data, text: value } });
  };

  /**
   * Add a new node connected to the currently selected node
   * Creates a new node to the right and connects it automatically
   */
  

  /**
   * Navigate back to the nodes panel
   * Deselects the current node
   */
  const onBack = () => setSelectedNode(null);

  /**
   * Validate and save the current flow
   * Shows error if validation fails, success message if passes
   */
  const onSave = () => {
    if (!validateFlow(nodes, edges)) {
      setError('Cannot save Flow: More than one node has no outgoing edge.');
      setTimeout(() => setError(null), 3000);
      return;
    }
    setError(null);
    alert('Flow saved successfully!');
    // TODO: Send flow data to backend
  };

  return (
    <>
      {/* Fixed navbar with title and save button */}
      <div className="navbar">
        <SaveButton onClick={onSave} />
      </div>
      
      {/* Main content area */}
      <div className="main-container">
        {/* React Flow canvas */}
        <div
          className="flow-canvas-container"
          ref={reactFlowWrapper}
          onDrop={onDrop}
          onDragOver={e => e.preventDefault()}
        >
          {/* Error message display */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          {/* React Flow instance */}
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
            onInit={setReactFlowInstance}
            fitView
            style={{ width: '100%', height: '100%' }}
          >
            {/* Flow controls and minimap positioned at bottom right */}
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
        
        {/* Sidebar panel for nodes or settings */}
        <div className="sidebar-panel">
          {/* Show settings panel when node is selected, otherwise show nodes panel */}
          {selectedNode ? (
            <SettingsPanel
              text={(selectedNode as any).data.text}
              onChange={onTextChange}
              onBack={onBack}
            />
          ) : (
            <NodesPanel />
          )}
        </div>
      </div>
    </>
  );
};

export default FlowBuilder;

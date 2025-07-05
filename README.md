# Chatbot Flow Builder

A modern, visual chatbot flow builder built with React, TypeScript, and React Flow. Create interactive conversation flows by dragging and dropping message nodes and connecting them together.

**Live Demo**- [Click here](https://chatbot-flow-builder-sage.vercel.app/)

## 🚀 Features

### Core Functionality
- **Visual Flow Builder**: Drag and drop interface for creating chatbot conversations
- **Message Nodes**: Create and edit text messages with a clean, intuitive interface
- **Node Connections**: Connect nodes with edges to define conversation flow
- **Real-time Validation**: Automatic validation to ensure proper flow structure
- **Save Functionality**: Save flows with validation checks

### User Interface
- **Modern Design**: Clean, professional UI with smooth interactions
- **Responsive Layout**: Fixed navbar with title and save button
- **Sidebar Panels**: Dynamic panels for node selection and message editing
- **Visual Feedback**: Hover effects, selection states, and error messages
- **Navigation**: Back button to return from editing to node selection

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **React Flow**: Powerful flow diagram library for node-based interfaces
- **Extensible Architecture**: Easy to add new node types and features
- **State Management**: Efficient state handling with React hooks
- **Validation Logic**: Robust flow validation with clear error messages

## 📋 Requirements

- Node.js v18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rekha0suthar/chatbot-flow-builder
   cd chatbot-flow-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 🎯 Usage

### Creating a Flow

1. **Add Message Nodes**
   - Drag the "Message" node from the right sidebar onto the canvas
   - Click on a node to edit its content

2. **Edit Messages**
   - Select a node to open the settings panel
   - Type your message in the textarea
   - Use the back arrow to return to the nodes panel

3. **Connect Nodes**
   - Drag from the right handle (source) of one node to the left handle (target) of another
   - Each node can only have one outgoing connection

4. **Save Your Flow**
   - Click the "Save Changes" button in the top right
   - The system validates that your flow has proper structure
   - Success or error messages will be displayed

### Flow Validation Rules

- **Single End Point**: Only one node can have no outgoing connection
- **Connected Flow**: All nodes should be part of a connected conversation
- **Valid Structure**: The flow must have a clear start and end point

## 🏗️ Project Structure

```
src/
├── components/
│   ├── FlowBuilder.tsx      # Main flow builder component
│   ├── NodesPanel.tsx       # Panel for available node types
│   ├── SettingsPanel.tsx    # Panel for editing node properties
│   ├── SaveButton.tsx       # Save button component
│   └── nodes/
│       └── TextNode.tsx     # Custom message node component
├── utils/
│   └── flowValidation.ts    # Flow validation logic
├── App.tsx                  # Root application component
└── main.tsx                # Application entry point
```

## 🔧 Key Components

### FlowBuilder
The main component that orchestrates the entire flow builder experience:
- Manages node and edge state
- Handles drag and drop functionality
- Controls node selection and editing
- Implements flow validation and saving

### TextNode
Custom node component for message nodes:
- Visual representation with header and content
- Connection handles for source and target
- Selection state styling
- Message icon integration

### NodesPanel
Displays available node types:
- Draggable node cards
- Hover effects and visual feedback
- Extensible design for new node types

### SettingsPanel
Interface for editing node properties:
- Text editing with textarea
- Back navigation
- Clean, centered layout

## 🎨 Customization

### Adding New Node Types

1. **Create a new node component** in `src/components/nodes/`
2. **Add the node type** to the `nodeTypes` array in `NodesPanel.tsx`
3. **Register the node** in `FlowBuilder.tsx` nodeTypes object

### Styling

The application uses inline styles for simplicity. To customize:
- Modify style objects in component files
- Update colors, spacing, and layout as needed
- Add CSS classes for more complex styling

## 🚀 Future Enhancements

- **Additional Node Types**: Condition nodes, API calls, user input nodes
- **Flow Templates**: Pre-built conversation templates
- **Export/Import**: Save and load flows as JSON
- **Collaboration**: Real-time collaboration features
- **Analytics**: Flow usage and performance metrics
- **Backend Integration**: Save flows to database

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version**: Ensure you're using Node.js v18.x or higher
2. **Dependencies**: Run `npm install` if you encounter module errors
3. **Port Conflicts**: Change the port in `vite.config.ts` if 5173 is in use

### Development

- **TypeScript Errors**: Check import statements and type definitions
- **React Flow Issues**: Ensure proper node type registration
- **State Management**: Verify state updates and prop passing

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues:
- Create an issue in the repository
- Check the troubleshooting section
- Review the code comments for implementation details

---

**Built with ❤️ using React, TypeScript, and React Flow**

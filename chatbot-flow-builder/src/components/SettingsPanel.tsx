import { IoArrowBack } from "react-icons/io5";

/**
 * Props interface for SettingsPanel component
 */
interface SettingsPanelProps {
  text: string; // Current message text content
  onChange: (value: string) => void; // Callback function to update message text
  onBack?: () => void; // Optional callback to return to nodes panel
}

/**
 * SettingsPanel Component
 * 
 * Displays the settings interface for editing a selected node's properties.
 * This panel appears when a node is selected and allows users to modify node data.
 * 
 * Features:
 * - Message text editing with textarea
 * - Back navigation to nodes panel
 * - Clean, centered layout with proper spacing
 * - Visual separation with horizontal rules
 * 
 * @param text - Current message text to display in the textarea
 * @param onChange - Function called when text is modified
 * @param onBack - Optional function to navigate back to nodes panel
 */
const SettingsPanel: React.FC<SettingsPanelProps> = ({ text, onChange, onBack }) => (
  <div className="settings-panel">
    {/* Header section with back button and title */}
    <div className="settings-header">
      {/* Back arrow button - positioned absolutely on the left */}
      {onBack && (
        <button
          onClick={onBack}
          className="back-button"
          aria-label="Back"
        >
          <IoArrowBack size={20} />
        </button>
      )}
      
      {/* Centered title */}
      <div className="settings-title">
        <p className="settings-title-text">Message</p>
      </div>
    </div>
    
    {/* Visual separator */}
    <hr className="settings-separator" />
    
    {/* Content section with text editing */}
    <div className="settings-content">
      <label>
        Text
      </label>
      {/* Textarea for editing message content */}
      <textarea
        value={text}
        onChange={e => onChange(e.target.value)}
        rows={5}
        className="settings-textarea"
        placeholder="Enter your message here..."
      />
    </div>
    
    {/* Bottom separator */}
    <hr className="settings-separator" />
  </div>
);

export default SettingsPanel;

import React from 'react';

interface SaveButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="save-button"
  >
    Save Changes
  </button>
);

export default SaveButton;

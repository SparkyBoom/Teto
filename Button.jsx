
import React from 'react';

/**
 * A reusable button component for the map application.
 * It is a "presentational" component that receives its state and callbacks via props.
 * * @param {object} props - The component props.
 * @param {string} props.name - The text to display on the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {function} props.onMouseEnter - The function for the mouse enter event.
 * @param {function} props.onMouseLeave - The function for the mouse leave event.
 * @param {boolean} props.isActive - Determines if the button should have the 'active' style.
 */
function ButtonComponent({ name, onClick, onMouseEnter, onMouseLeave, isActive }) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`map-button ${isActive ? 'active' : ''}`}
    >
      {name}
    </button>
  );
}

export default ButtonComponent;


import React from 'react';

function ButtonList({ markerData, onButtonClick }) {
  return (
    <div className="buttons-container">
      {markerData.map((marker, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(index)}
          className="map-button"
        >
          {marker.name}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;

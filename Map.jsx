import React, { useState, useRef, createRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

// Import local components and data
import ButtonComponent from './ButtonComponent';
import MarkerComponent from './MarkerComponent';
import { markerData } from './data';

// Import required CSS
import './styles.css';
import 'leaflet/dist/leaflet.css';


/**
 * The main application component.
 * It orchestrates the state and interactions between the buttons and the map markers.
 */
function App() {
  // A ref to hold an array of refs, one for each marker, allowing direct access to marker instances.
  const markerRefs = useRef(markerData.map(() => createRef()));
  
  // State to track the index of the currently hovered button/marker.
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handles the click event on a button.
  const handleButtonClick = (index) => {
    const markerRef = markerRefs.current[index];
    if (markerRef && markerRef.current) {
      const marker = markerRef.current;
      const map = marker._map; // Access the map instance from the marker
      
      // Pan the map to the marker and open its popup.
      if (map) {
        map.setView(marker.getLatLng(), 15);
        marker.openPopup();
      }
    }
  };

  return (
    <div className="app-container">
      <h1>React-Leaflet Map (Modular)</h1>
      
      {/* --- Buttons Container --- */}
      {/* Renders a button for each item in markerData. */}
      <div className="buttons-container">
        {markerData.map((marker, index) => (
          <ButtonComponent
            key={index}
            name={marker.name}
            onClick={() => handleButtonClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            isActive={hoveredIndex === index}
          />
        ))}
      </div>

      {/* --- Map Container --- */}
      {/* The main map view. */}
      <MapContainer center={[51.505, -0.09]} zoom={13} className="leaflet-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Renders a marker for each item in markerData. */}
        {markerData.map((marker, index) => (
          <MarkerComponent
            key={index}
            coords={marker.coords}
            name={marker.name}
            isHovered={hoveredIndex === index}
            markerRef={markerRefs.current[index]}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default App;


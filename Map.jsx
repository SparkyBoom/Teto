import React, { useState, useRef, createRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import ButtonComponent from './ButtonComponent';
import MarkerComponent from './MarkerComponent';
import './styles.css'; // Import the stylesheet
import 'leaflet/dist/leaflet.css';


// --- Main App Component ---

function App() {
  // Data for the markers
  const markerData = [
    { name: 'Marker 1', coords: [51.5, -0.09] },
    { name: 'Marker 2', coords: [51.51, -0.1] },
    { name: 'Marker 3', coords: [51.49, -0.08] }
  ];

  // A ref to hold an array of refs, one for each marker
  const markerRefs = useRef(markerData.map(() => createRef()));
  // State to track which button/marker is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle button clicks
  const handleButtonClick = (index) => {
    const markerRef = markerRefs.current[index];
    if (markerRef && markerRef.current) {
      const marker = markerRef.current;
      const map = marker._map; // Access the map instance from the marker
      if (map) {
        map.setView(marker.getLatLng(), 15);
        marker.openPopup();
      }
    }
  };

  return (
    <div className="app-container">
      <h1>React-Leaflet Map (3 Components)</h1>
      
      {/* Buttons Container */}
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

      {/* Map Container */}
      <MapContainer center={[51.505, -0.09]} zoom={13} className="leaflet-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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


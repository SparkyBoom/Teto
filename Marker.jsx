import React, { useRef, createRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { markerData, defaultIcon } from './data';

function MapComponent({ children }) {
  const markerRefs = useRef(markerData.map(() => createRef()));

  const handleButtonClick = (index) => {
    const markerRef = markerRefs.current[index];
    if (markerRef && markerRef.current) {
      const marker = markerRef.current;
      const map = marker._map;
      if (map) {
        map.setView(marker.getLatLng(), 15);
        marker.openPopup();
      }
    }
  };

  return (
    <div>
      {children(handleButtonClick)}

      <MapContainer center={[51.505, -0.09]} zoom={13} className="leaflet-container">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerData.map((marker, index) => (
          <Marker
            key={index}
            position={marker.coords}
            icon={defaultIcon}
            ref={markerRefs.current[index]}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;

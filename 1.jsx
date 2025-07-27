import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon in Leaflet + React
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new L.Icon({
  iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: iconShadow,
  shadowSize: [41, 41]
});

const markerData = [
  { name: 'Marker 1', coords: [51.5, -0.09] },
  { name: 'Marker 2', coords: [51.51, -0.1] },
  { name: 'Marker 3', coords: [51.49, -0.08] }
];

function MapWithButtons() {
  const markerRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (index) => {
    const marker = markerRefs.current[index];
    if (marker && marker._map) {
      marker._map.setView(marker.getLatLng(), 15);
      marker.openPopup();
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        {markerData.map((marker, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              marginRight: '10px',
              padding: '6px 12px',
              backgroundColor: hoveredIndex === index ? '#007bff' : '#eee',
              color: hoveredIndex === index ? '#fff' : '#000',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {marker.name}
          </button>
        ))}
      </div>

      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerData.map((marker, index) => (
          <Marker
            key={index}
            position={marker.coords}
            icon={defaultIcon}
            ref={(el) => (markerRefs.current[index] = el)}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapWithButtons;

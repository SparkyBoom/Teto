import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// --- Icon Definitions ---
// It's good practice to define icons that will be used by this component here.
const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});

const highlightIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});


/**
 * Renders a single marker on the map.
 * @param {object} props - The component props.
 * @param {Array<number>} props.coords - The latitude and longitude for the marker.
 * @param {string} props.name - The text for the marker's popup.
 * @param {boolean} props.isHovered - Determines if the marker should be highlighted.
 * @param {React.Ref} props.markerRef - The ref to attach to the Leaflet marker instance.
 */
function MarkerComponent({ coords, name, isHovered, markerRef }) {
  return (
    <Marker
      position={coords}
      icon={isHovered ? highlightIcon : defaultIcon}
      ref={markerRef}
    >
      <Popup>{name}</Popup>
    </Marker>
  );
}

export default MarkerComponent;


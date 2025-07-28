import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { defaultIcon, highlightIcon } from './data'; // Import icons from the data file

/**
 * Renders a single, interactive marker on the map.
 * Its appearance (default or highlighted) is controlled by the `isHovered` prop.
 * * @param {object} props - The component props.
 * @param {Array<number>} props.coords - The latitude and longitude for the marker.
 * @param {string} props.name - The text for the marker's popup.
 * @param {boolean} props.isHovered - Determines if the marker should be highlighted.
 * @param {React.Ref} props.markerRef - The ref to attach to the Leaflet marker instance for parent access.
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


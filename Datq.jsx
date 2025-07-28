import L from 'leaflet';

/**
 * @file This file contains the static data and icon configurations for the map application.
 */

// --- Icon Definitions ---

// Default icon for markers
export const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Icon used when a marker is highlighted (e.g., on hover)
export const highlightIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// --- Marker Data ---

// An array of objects, each representing a location on the map.
export const markerData = [
    { name: 'Marker 1', coords: [51.5, -0.09] },
    { name: 'Marker 2', coords: [51.51, -0.1] },
    { name: 'Marker 3', coords: [51.49, -0.08] }
];


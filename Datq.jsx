import L from 'leaflet';

export const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const markerData = [
  { name: 'Marker 1', coords: [51.5, -0.09] },
  { name: 'Marker 2', coords: [51.51, -0.1] },
  { name: 'Marker 3', coords: [51.49, -0.08] }
];

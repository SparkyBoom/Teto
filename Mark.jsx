const markersFromDB = [
  { id: 1, name: 'Marker One', coordinates: [51.505, -0.09] },
  { id: 2, name: 'Marker Two', coordinates: [51.51, -0.1] },
  { id: 3, name: 'Marker Three', coordinates: [51.49, -0.08] }
];

markersFromDB.map(marker =>
  L.marker(marker.coordinates)
    .addTo(map)
    .bindPopup(`<b>${marker.name}</b><br>ID: ${marker.id}`)
);

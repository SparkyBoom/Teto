const markersFromDB = [
  { id: 1, name: 'Marker One', coordinates: [51.505, -0.09] },
  { id: 2, name: 'Marker Two', coordinates: [51.51, -0.1] },
  { id: 3, name: 'Marker Three', coordinates: [51.49, -0.08] }
];

// Create markers and handle button hover styling
markersFromDB.map(marker => {
  const leafletMarker = L.marker(marker.coordinates)
    .addTo(map)
    .bindPopup(`<b>${marker.name}</b><br>ID: ${marker.id}`);

  leafletMarker.on('mouseover', () => {
    document.getElementById(`btn-${marker.id}`).classList.add('hovered');
  });

  leafletMarker.on('mouseout', () => {
    document.getElementById(`btn-${marker.id}`).classList.remove('hovered');
  });

  return leafletMarker;
});

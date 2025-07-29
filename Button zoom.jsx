<button
  id={`btn-${marker.id}`}
  onClick={() => {
    const m = window.markerMap?.[marker.id];
    if (m) map.setView(m.getLatLng(), 15);
  }}
>
  {marker.name}
</button>

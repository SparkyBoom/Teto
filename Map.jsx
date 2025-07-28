import React from 'react';
import MapComponent from './MapComponent';
import ButtonList from './ButtonList';
import { markerData } from './data';
import './styles.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="app-container">
      <h1>React Leaflet Map</h1>
      <MapComponent>
        {(handleButtonClick) => (
          <ButtonList markerData={markerData} onButtonClick={handleButtonClick} />
        )}
      </MapComponent>
    </div>
  );
}

export default App;

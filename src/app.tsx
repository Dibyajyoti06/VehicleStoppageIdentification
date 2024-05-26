import dotenv from 'dotenv';
// dotenv.config();
import React from 'react';
import { createRoot } from 'react-dom/client';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import './styles.css';
import MapComponent from './MapComponent';
const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const baseUrl = process.env.mapId;
const App = () => (
  <APIProvider
    apiKey={'AIzaSyABxeYxcj3PAnRea2CPvAXXvr2h0iBpyS4'}
    onLoad={() => console.log('Maps API has loaded.')}
  >
    <div className="app-container">
      <h1 className="heading">
        Vehicle Stoppage Identification and Visualization
      </h1>
      <div id="map-container">
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: 12.9294916, lng: 74.9173533 }}
          mapId={'1a3c1948924e8100'}
        >
          <MapComponent />
        </Map>
      </div>
    </div>
  </APIProvider>
);

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);

export default App;

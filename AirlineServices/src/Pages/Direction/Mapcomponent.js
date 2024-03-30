import React, { useState , useRef, useEffect} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import routesData from '../../data/direction.json';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import "leaflet/dist/leaflet.css";
import 'leaflet-geosearch/dist/geosearch.css';
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch"


const Map = () => {
  const mapRef = useRef(null);
  const latitude = 51.505;
    const longitude = -0.09;
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
  };
  
  useEffect(() => {
    if (!mapRef.current) return;

    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: true,
        showPopup: false,
        autoClose: true,
    });
    
    searchControl.setPosition('topright');
    mapRef.current.addControl(searchControl);

}, []);

  const renderRoutesDropdown = () => {
    return (
      <select onChange={(e) => handleSelectRoute(e.target.value)} style={{ width: '100%', padding:'5px' }}>
        <option value="">Select Route</option>
        {routesData.routes.map((route, index) => (
          <option key={index} value={index}>
            {route.origin} to {route.destination}
          </option>
        ))}
      </select>
    );
  };
  
  const renderRouteDetails = () => {
    if (!selectedRoute) return null;
  
    const route = routesData.routes[selectedRoute];
    if (!route || !route.image) return null;
  
    return (
      <div style={{background:'white', padding:'10px', margin:'10px'}}>
        <h3>{route.origin} to {route.destination}</h3>
        <p>Route: {route.details.route}</p>
        <p>Distance: {route.details.distance}</p>
        <p>Estimated Time: {route.details.estimated_time}</p>
        
      </div>
    );
  };

  return (
  
    <MapContainer center={[latitude, longitude]} zoom={13}  style={{ height: "100vh", width: "100vw" }}>
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div>{renderRoutesDropdown()}</div>
      <div>{renderRouteDetails()}</div>
      </div>
      <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
        <div
          className="leaflet-control-streetview leaflet-bar leaflet-control"
          aria-haspopup="true"
          style={{ marginLeft: '10px' }}
        >
          
          <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div>{renderRoutesDropdown()}</div>
      <div>{renderRouteDetails()}</div>

      </div>
      
        </div>
      </MapContainer>
  
  );
};

export default Map;


import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([0, 0], 11);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Leaflet &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, contribution',
      maxZoom: 18,
    }).addTo(map);

    // Define the taxi icon
    const taxiIcon = L.icon({
      iconUrl: 'scooty.png', // Ensure correct path to your image
      iconSize: [70, 70],
    });

    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Set map view to current location
        map.setView([latitude, longitude], 11);

        // Add the initial marker at the current location
        const marker = L.marker([latitude, longitude], { icon: taxiIcon }).addTo(map);

        // Calculate the end point 50km away
        const distance = 50; // in km
        const earthRadius = 6371; // Radius of the Earth in kilometers

        // Calculate the destination point at a fixed distance in a particular direction (bearing)
        const bearing = 45; // 45 degrees (northeast) for simplicity
        const destinationLatitude = latitude + (distance / earthRadius) * (180 / Math.PI) * Math.cos(bearing);
        const destinationLongitude = longitude + (distance / earthRadius) * (180 / Math.PI) * Math.sin(bearing);

        // Add route control from current location to the calculated destination
        L.Routing.control({
          waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(destinationLatitude, destinationLongitude),
          ],
        }).on('routesfound', function (e) {
          const routes = e.routes;
          routes[0].coordinates.forEach((coord, index) => {
            setTimeout(() => {
              marker.setLatLng([coord.lat, coord.lng]);
            }, 100 * index);
          });
        }).addTo(map);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }

    // Cleanup the map on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default MapComponent;

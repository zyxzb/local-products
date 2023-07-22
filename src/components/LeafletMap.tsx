'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { useCreateAdContext } from '@/context/createAddContext';

const LeafletMap = ({
  coord,
  title,
}: {
  coord: [number, number];
  title?: string;
}) => {
  const { setCoord, location } = useCreateAdContext();

  useEffect(() => {
    const leafletLoaded = typeof window !== 'undefined';
    if (leafletLoaded) {
      // Initialize the map
      const map = L.map('leaflet-map').setView(coord, 12);

      // Add OpenStreetMap tiles to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker with a popup to the map
      const marker = L.marker(coord, {
        icon: new L.Icon({
          iconUrl: MarkerIcon.src,
          iconRetinaUrl: MarkerIcon.src,
          iconSize: [25, 41],
          iconAnchor: [12.5, 41],
          popupAnchor: [0, -41],
          shadowUrl: MarkerShadow.src,
          shadowSize: [41, 41],
        }),
      }).addTo(map);

      marker
        .bindPopup(
          title
            ? title
            : `${
                location
                  ? 'Wybrana lokalizacja:'
                  : 'Wybierz Lokalizacje z listy'
              } <br /> ${location}`,
        )
        .openPopup();
      // Clean up the map when the component is unmounted
      return () => {
        map.remove();
      };
    }
  }, [coord, location]);

  return (
    <div className='bg-white rounded-md p-4'>
      <div
        id='leaflet-map'
        style={{ height: '500px', width: '100%', zIndex: 0 }}
      />
    </div>
  );
};

export default LeafletMap;

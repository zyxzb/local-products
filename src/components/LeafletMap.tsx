'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useCreateAdContext } from '@/context/createAddContext';

// https://www.npmjs.com/package/leaflet-defaulticon-compatibility
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const LeafletMap = ({
  coord,
  title,
}: {
  coord: [number, number];
  title?: string;
}) => {
  const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false },
  );
  const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    {
      ssr: false,
    },
  );
  const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    {
      ssr: false,
    },
  );
  const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    {
      ssr: false,
    },
  );
  const { location } = useCreateAdContext();

  return (
    <MapContainer
      center={coord}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{
        height: '100%',
        width: '100%',
        zIndex: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={coord}>
        <Popup>
          {title ? title : location ? location : 'Wybierz Lokalizacje z listy'}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;

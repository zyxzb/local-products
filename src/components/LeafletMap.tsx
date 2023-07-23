'use client';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useCreateAdContext } from '@/context/createAddContext';
import L from 'leaflet';

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

  const customIcon = new L.Icon({
    iconUrl: 'map-marker.svg',
    iconSize: [45, 45],
  });

  return (
    <div className='bg-white rounded-md p-4'>
      <MapContainer
        center={coord}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={true}
        style={{
          height: '500px',
          width: '100%',
          zIndex: 0,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={coord} icon={customIcon}>
          <Popup>
            {title
              ? title
              : location
              ? location
              : 'Wybierz Lokalizacje z listy'}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;

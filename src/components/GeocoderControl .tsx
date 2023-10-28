'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import { useCreateAdContext } from '@/context/createAddContext';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface GeocoderControlProps {
  onLocationSelect: (
    location: { lat: number; lng: number },
    name: string,
  ) => void;
}

const GeocoderControl = ({ onLocationSelect }: GeocoderControlProps) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = (L.Control as any).Geocoder.nominatim({
      geocodingQueryParams: {
        'accept-language': 'pl',
      },
    });
    const control = (L.Control as any)
      .geocoder({
        geocoder: geocoder,
        showResultIcons: true,
        collapsed: true,
        position: 'topright',
        placeholder: 'Wyszukaj lokalizacje...',
      })
      .addTo(map);

    control.on('markgeocode', (e: any) => {
      const { center, name } = e.geocode;
      onLocationSelect(center, name);
    });

    return () => {
      control.remove();
    };
  }, [map]);

  return null;
};

const MyMap = () => {
  const { setLocation, setCoord, location, coord } = useCreateAdContext();

  const handleLocationSelect = (
    location: { lat: number; lng: number },
    name: string,
  ) => {
    setCoord([location.lat, location.lng]);
    setLocation(name);
  };

  return (
    <div className='h-[40vh] w-full rounded-lg mb-10 flex flex-col gap-4'>
      <MapContainer
        center={[52.2319581, 21.0067249]}
        zoom={13}
        className='h-full w-full rounded-lg'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <GeocoderControl onLocationSelect={handleLocationSelect} />
      </MapContainer>
      <div>
        {location && coord ? (
          <span className='text-darkColor'>Wybrano: {location}</span>
        ) : (
          <span className='text-red-600'>
            Wybierz lokalizacje aby wyświetlić mapę w ogłoszeniu
          </span>
        )}
      </div>
    </div>
  );
};

export default MyMap;

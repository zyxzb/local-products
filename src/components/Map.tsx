'use client';

import { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useOnClickOutside } from 'usehooks-ts';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import MapListCategories from './MapListCategories';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  coord?: number[];
  locations?: number[][];
  onClick?: () => void;
  handleSelectCategory?: (category: string) => void;
}

const Map = ({ coord, locations, onClick, handleSelectCategory }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  if (onClick) {
    useOnClickOutside(mapRef, onClick);
  }

  if (coord) {
    return (
      <MapContainer
        center={[coord[0], coord[1]]}
        zoom={12}
        className='h-full w-full'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[coord[0], coord[1]]} />
      </MapContainer>
    );
  }

  if (locations) {
    const markers = locations.map((coord) => (
      <Marker position={[coord[0], coord[1]]} />
    ));

    return (
      <div className='fixed inset-0 bg-black/50 z-[99999] backdrop-blur-sm'>
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[90%] max-w-[1200px]'
          ref={mapRef}
        >
          <MapListCategories handleSelectCategory={handleSelectCategory} />
          <MapContainer
            center={[51.9194, 19.1451]}
            zoom={6}
            className='w-full h-[85%]'
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <MarkerClusterGroup
              polygonOptions={{
                fillColor: '#edede9',
                color: '#503047',
                weight: 3,
                opacity: 1,
                fillOpacity: 0.8,
              }}
            >
              {...markers}
            </MarkerClusterGroup>
          </MapContainer>
        </div>
      </div>
    );
  }
};

export default Map;

import {cityType} from '../../types/types';
import { Map, TileLayer } from 'leaflet';

export const getMapInstance = (container: HTMLElement, city: cityType): Map => {
  const instance = new Map(container, {
    center: {
      lat: city.location.latitude,
      lng: city.location.longitude
    },
    zoom: 10
  });

  const layer = new TileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }
  );

  instance.addLayer(layer);

  return instance;
};

import { useEffect, useState, MutableRefObject } from 'react';
import { mainCity } from '../../types/types';
import { Map } from 'leaflet';
import {getMapInstance} from './get-map-instance';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: mainCity
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    const instance = getMapInstance(mapRef.current, city);

    setMap(instance);
    return () => {
      instance.off();
      instance.remove();
      setMap(null);
    };
  }, [mapRef, city]);
  return map;
}

export default useMap;

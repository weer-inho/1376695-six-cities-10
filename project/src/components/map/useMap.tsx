import { useEffect, useState, MutableRefObject } from 'react';
import { cityType } from '../../types/types';
import { Map } from 'leaflet';
import {getMapInstance} from './get-map-instance';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: cityType | undefined
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null || city !== null) {
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

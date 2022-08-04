import {useRef} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../../const';
import {useAppSelector} from '../../hooks';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map():JSX.Element {
  const {points, mainCity} = useAppSelector((state) => state);

  const mapRef = useRef(null);
  const map = useMap(mapRef, mainCity);

  if (map) {
    points.forEach((point) => {
      const marker = new Marker({
        lat: point.lat,
        lng: point.lng
      });

      marker.setIcon(defaultCustomIcon).addTo(map);
    }
    );
  }

  return <section className={'cities__map map'} style={{height: '600px'}} ref={mapRef}></section>;
}

export default Map;

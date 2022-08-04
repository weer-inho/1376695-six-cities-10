import {useRef} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../../const';
import {useAppSelector} from '../../hooks';
import {LocationType} from '../../types/types';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map():JSX.Element {
  const {offers, mainCity} = useAppSelector((state) => state);
  const placesToStay:LocationType[] = [];
  offers.forEach((offer) => offer.city.name === mainCity.name ? placesToStay.push(offer.location) : undefined);

  const mapRef = useRef(null);
  const map = useMap(mapRef, mainCity);

  if (map) {
    placesToStay.forEach((point) => {
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

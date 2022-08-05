import {useRef} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {useAppSelector} from '../../hooks';
import {offerType} from '../../types/types';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map():JSX.Element {
  const {offers, mainCity, hoveredCard} = useAppSelector((state) => state);
  const placesToStay:offerType[] = [];
  offers.forEach((offer) => offer.city.name === mainCity.name ? placesToStay.push(offer) : undefined);

  const mapRef = useRef(null);
  const map = useMap(mapRef, mainCity);

  if (map) {
    placesToStay.forEach((point) => {
      const marker = new Marker({
        lat: point.location.lat,
        lng: point.location.lng
      });

      marker
        .setIcon(
          point.id !== hoveredCard
            ? defaultCustomIcon
            : currentCustomIcon,
        )
        .addTo(map);
    }
    );
  }

  return <section className={'cities__map map'} style={{height: '600px'}} ref={mapRef}></section>;
}

export default Map;

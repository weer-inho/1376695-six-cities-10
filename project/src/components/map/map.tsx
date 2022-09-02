import {useRef} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {useAppSelector} from '../../hooks';

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
  const placesToStay = offers.filter((offer) => offer.city.name === mainCity.name);

  const mapRef = useRef(null);
  const map = useMap(mapRef, mainCity);

  if (map) {
    placesToStay.forEach((point) => {
      const marker = new Marker({
        lat: point.location.latitude,
        lng: point.location.longitude
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

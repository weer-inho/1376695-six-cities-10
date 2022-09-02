import {useRef} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {useAppSelector} from '../../hooks';
import {cityType, offerType} from '../../types/types';
import {cities} from '../../mocks/mock-data';

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


type OfferMapType = {
  currentCity: offerType;
}

function OfferMap({currentCity}: OfferMapType):JSX.Element {
  const {lastOffersNearBy} = useAppSelector((state) => state);
  const mainCity = cities.find((city: cityType) => city?.name === currentCity.city.name);

  const mapRef = useRef(null);
  const map = useMap(mapRef, mainCity || cities[0]);

  if (map) {
    lastOffersNearBy?.forEach((point) => {
      const marker = new Marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      });
      marker.setIcon(defaultCustomIcon).addTo(map);
    });

    const currentCityMarker = new Marker({
      lat: currentCity.location.latitude,
      lng: currentCity.location.longitude
    });
    currentCityMarker.setIcon(currentCustomIcon).addTo(map);
  }

  return <section className={'cities__map map'} style={{height: '600px'}} ref={mapRef}></section>;
}

export default OfferMap;

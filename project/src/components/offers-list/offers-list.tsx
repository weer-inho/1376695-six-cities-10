import CityCard from '../../components/city-card/city-card';
import SortingForm from '../sorting-form/sorting-form';
import {useState} from 'react';
import {offerType} from '../../types/types';
import {sortPlacesToStay} from '../../mocks/mock-data';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeHoveredId} from '../../store/action';

function OffersList():JSX.Element {
  const dispatch = useAppDispatch();
  const [cityHoveredId, setCityHoveredId] = useState(undefined as string | undefined);
  const {offers, sorting, mainCity} = useAppSelector((state) => state);
  const placesToStay:offerType[] = [];

  offers.forEach((offer) => offer.city.name === mainCity.name ? placesToStay.push(offer) : undefined);

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>{placesToStay.length ? placesToStay.length : 0} places to stay in {mainCity.name}</b>
      <SortingForm />
      <div className='cities__places-list places__list tabs__content'>
        {
          sortPlacesToStay(sorting, placesToStay)?.map((offer) => {
            const keyValue = offer.id;
            return (
              <CityCard
                onHovered={() => dispatch(changeHoveredId(offer.id))}
                onDeactivated={() => setCityHoveredId(undefined)}
                key={keyValue}
                offer={offer}
                isActive={offer.id === cityHoveredId}
              />
            );
          })
        }
      </div>
    </section>
  );
}

export default OffersList;

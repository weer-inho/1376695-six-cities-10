import CityCard from '../../components/city-card/city-card';
import {useState} from 'react';
import {offerType} from '../../types/types';
import {useAppSelector} from '../../hooks';

function OffersList():JSX.Element {
  const [cityHoveredId, setCityHoveredId] = useState(undefined as string | undefined);
  const {city, offers} = useAppSelector((state) => state);
  const placesToStay:offerType[] = [];

  offers.forEach((offer) => offer.city.name === city ? placesToStay.push(offer) : undefined);

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>{placesToStay.length ? placesToStay.length : 0} places to stay in {city}</b>
      <form className='places__sorting' action='#' method='get'>
        <span className='places__sorting-caption'>Sort by</span>
        <span className='places__sorting-type' tabIndex={0}>
    Popular
          <svg className='places__sorting-arrow' width={7} height={4}>
            <use xlinkHref='#icon-arrow-select' />
          </svg>
        </span>
        <ul className='places__options places__options--custom places__options--opened'>
          <li className='places__option places__option--active' tabIndex={0}>
            Popular
          </li>
          <li className='places__option' tabIndex={0}>
            Price: low to high
          </li>
          <li className='places__option' tabIndex={0}>
            Price: high to low
          </li>
          <li className='places__option' tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>
      <div className='cities__places-list places__list tabs__content'>
        {
          placesToStay.map((offer) => {
            const keyValue = offer.id;
            return (
              <CityCard
                onHovered={() => setCityHoveredId(offer.id)}
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

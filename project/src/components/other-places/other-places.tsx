import CityCard from '../city-card/city-card';
import {useAppSelector} from '../../hooks';

function OtherPlaces():JSX.Element {
  const {lastOffersNearBy} = useAppSelector((state) => state);

  return (
    <section className='near-places places'>
      <h2 className='near-places__title'>
        Other places in the neighbourhood
      </h2>
      <div className='near-places__list places__list'>
        {
          lastOffersNearBy?.map((article) => {
            const keyValue = article.id;
            return (
              <CityCard
                onHovered={() => undefined}
                key={keyValue}
                offer={article}
                isActive={false}
              />
            );
          })
        }
      </div>
    </section>
  );
}

export default OtherPlaces;

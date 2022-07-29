import {offerType} from '../../types/types';
import CityCard from '../city-card/city-card';

type OtherPlacesProps = {
  offers: offerType[];
}

function OtherPlaces({articles}:OtherPlacesProps):JSX.Element {
  // eslint-disable-next-line no-console
  console.log(articles);

  return (
    <section className='near-places places'>
      <h2 className='near-places__title'>
        Other places in the neighbourhood
      </h2>
      <div className='near-places__list places__list'>
        {
          articles.map((article) => {
            const keyValue = article.id;
            return (
              <CityCard
                onHovered={() => {}}
                onDeactivated={() => {}}
                key={keyValue}
                offer={article}
                isActive={article.id}
              />
            );
          })
        }
      </div>
    </section>
  );
}

export default OtherPlaces;

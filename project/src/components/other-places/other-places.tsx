import {offerType} from '../../types/types';
import CityCard from '../city-card/city-card';

type OtherPlacesProps = {
  articles: offerType[];
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

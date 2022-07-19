import {offerType} from '../../types/types';

type CityCardType = {
  onHovered: () => void;
  onDeactivated: () => void;
  offer: offerType;
  isActive: boolean;
}

function returnPremium(isPremium: boolean):JSX.Element | undefined{
  if (isPremium) {
    return (
      <div className='place-card__mark'><span>Premium</span></div>
    );
  }

  return undefined;
}

function CityCard({offer, onHovered, onDeactivated, isActive}: CityCardType):JSX.Element {
  return (
    <article
      onMouseEnter={onHovered}
      onMouseLeave={onDeactivated}
      className='cities__card place-card'
    >
      {returnPremium(offer.isPremium)};
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#xxx'>
          <img
            className='place-card__image'
            src={offer.photos[0]}
            width={260}
            height={200}
            alt='Place'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>{offer.price}</b>
            <span className='place-card__price-text'>
              /&nbsp;night
            </span>
          </div>
          <button
            className='place-card__bookmark-button button'
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width={18}
              height={19}
            >
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${offer.stars * 20}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#xxx'>{offer.title}</a>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}

export default CityCard;

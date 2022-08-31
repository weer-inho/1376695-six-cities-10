import {offerType} from '../../types/types';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoriteAction} from '../../store/api-actions';
import {AppRoot, AuthorizationStatus} from "../../const";

type CityCardType = {
  onHovered: () => void;
  offer: offerType;
  isActive: boolean;
}

export function returnPremium(isPremium: boolean | undefined):JSX.Element | undefined{
  if (isPremium) {
    return (
      <div className='place-card__mark'><span>Premium</span></div>
    );
  }

  return undefined;
}

function CityCard({offer, onHovered, isActive}: CityCardType):JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(changeFavoriteAction({hotelId: offer.id, status: Number(!offer.isFavorite)}));
  };

  return (
    <article
      onMouseEnter={onHovered}
      className='cities__card place-card'
    >
      {returnPremium(offer.isPremium)}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#xxx'>
          <img
            className='place-card__image'
            src={offer.images[0]}
            width={260}
            height={200}
            alt='Place'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>€{offer.price}</b>
            <span className='place-card__price-text'>
              {'/ night'}
            </span>
          </div>
          {
            authorizationStatus === AuthorizationStatus.Auth ?
              <button
                onClick={handleFavorite}
                className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
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
              </button> :
              <Link
                to={AppRoot.Login}
                className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
              >
                <svg
                  className='place-card__bookmark-icon'
                  width={18}
                  height={19}
                >
                  <use xlinkHref='#icon-bookmark' />
                </svg>
                <span className='visually-hidden'>To bookmarks</span>
              </Link>
          }
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}

export default CityCard;

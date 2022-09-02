import { useParams } from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import CommentList from '../../components/comment-list/comment-list';
import {useAppSelector} from '../../hooks';
import {
  changeFavoriteAction,
  fetchOfferAction,
  fetchOfferCommentsAction,
  fetchOffersNearByAction
} from '../../store/api-actions';
import { AppDispatch, State } from '../../types/state';
import Error from '../../components/error/error';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OtherPlaces from '../../components/other-places/other-places';
import AuthStatus from '../../components/auth-status/auth-status';
import OfferMap from '../../components/offerMap/map';
import {AppRoot, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';

const noOp = () => undefined;
const getCurrentCitySelector = (id:string | undefined) => {
  if (typeof id !== 'string') {
    return noOp;
  }
  const offerId = Number.parseInt(id, 10);
  if (!Number.isInteger(offerId)) {
    return noOp;
  }
  return(state:State) => state.offers.find((offer) => offerId === offer.id);
};

function Room(): JSX.Element {
  const {id} = useParams();
  const currentCity = useAppSelector(getCurrentCitySelector(id));
  const {authorizationStatus} = useAppSelector((state) => state);
  const dispatch:AppDispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(changeFavoriteAction({hotelId: currentCity?.id, status: Number(!currentCity?.isFavorite)}));
  };
  useEffect(() => {
    if (typeof currentCity === 'undefined') {
      dispatch(fetchOfferAction(id));
    }
    dispatch(fetchOfferCommentsAction(id));
    dispatch(fetchOffersNearByAction(id));
  },
  [id, currentCity, dispatch]);
  if (typeof currentCity === 'undefined') {
    return (<Error />);
  }

  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='main.html'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className='header__nav'>
              <AuthStatus />
            </nav>
          </div>
        </div>
      </header>
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {
                currentCity.images.map((photo, index) =>
                  (
                    <div key={photo} className='property__image-wrapper'>
                      <img
                        className='property__image'
                        src={photo}
                        alt=' studio'
                      />
                    </div>
                  )
                )
              }
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {currentCity.isPremium ? <div className='property__mark'><span>Premium</span></div> : null}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {/*Beautiful &amp; luxurious studio at great location*/}
                  {currentCity.title}
                </h1>
                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    <button
                      onClick={handleFavorite}
                      className={`property__bookmark-button button ${currentCity.isFavorite ? 'property__bookmark-button--active' : ''}`}
                      type='button'
                    >
                      <svg className='place-card__bookmark-icon' width={31} height={33}>
                        <use xlinkHref='#icon-bookmark' />
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                    :
                    <Link
                      to={AppRoot.Login}
                      className={`property__bookmark-button button ${currentCity.isFavorite ? 'property__bookmark-button--active' : ''}`}
                      type='button'
                    >
                      <svg className='property__bookmark-icon' width={31} height={33}>
                        <use xlinkHref='#icon-bookmark' />
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </Link>
                }
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: '80%' }} />
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>{currentCity?.rating}</span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {currentCity?.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {currentCity?.bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {currentCity?.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>€{currentCity?.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>Whats inside</h2>
                <ul className='property__inside-list'>
                  {
                    currentCity?.goods.map((item) => (
                      <li key={item} className='property__inside-item'>{item}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src={currentCity?.host.avatarUrl}
                      width={74}
                      height={74}
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>{currentCity?.host.name}</span>
                  <span className='property__user-status'>Pro</span>
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {currentCity?.description}
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <CommentList />
                {<CommentForm/>}
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <OfferMap currentCity={currentCity} />
          </section>
        </section>
        <div className='container'>
          <OtherPlaces />
        </div>
      </main>
    </div>
  );
}

export default Room;

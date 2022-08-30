import { useParams } from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import CommentList from '../../components/comment-list/comment-list';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearByAction} from '../../store/api-actions';
import { AppDispatch, State } from '../../types/state';
import Error from '../../components/error/error';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OtherPlaces from '../../components/other-places/other-places';
import AuthStatus from '../../components/auth-status/auth-status';

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
  const dispatch:AppDispatch = useDispatch();
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
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <symbol id='icon-arrow-select' viewBox='0 0 7 4'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'
            />
          </symbol>
          <symbol id='icon-bookmark' viewBox='0 0 17 18'>
            <path d='M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z' />
          </symbol>
          <symbol id='icon-star' viewBox='0 0 13 12'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'
            />
          </symbol>
        </svg>
      </div>
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
                  currentCity?.images.map((photo, index) =>
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
                {currentCity?.isPremium ? <div className='property__mark'><span>Premium</span></div> : null}
                <div className='property__name-wrapper'>
                  <h1 className='property__name'>
                    {/*Beautiful &amp; luxurious studio at great location*/}
                    {currentCity?.title}
                  </h1>
                  <button
                    className='property__bookmark-button button'
                    type='button'
                  >
                    <svg className='property__bookmark-icon' width={31} height={33}>
                      <use xlinkHref='#icon-bookmark' />
                    </svg>
                    <span className='visually-hidden'>To bookmarks</span>
                  </button>
                </div>
                <div className='property__rating rating'>
                  <div className='property__stars rating__stars'>
                    <span style={{ width: '80%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='property__rating-value rating__value'>{currentCity?.stars}</span>
                </div>
                <ul className='property__features'>
                  <li className='property__feature property__feature--entire'>
                    {currentCity?.type}
                  </li>
                  <li className='property__feature property__feature--bedrooms'>
                    {currentCity?.bedrooms} Bedrooms
                  </li>
                  <li className='property__feature property__feature--adults'>
                    Max {currentCity?.guestsMax} adults
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
              <Map />
            </section>
          </section>
          <div className='container'>
            <OtherPlaces />
          </div>
        </main>
      </div>
    </>
  );
}

export default Room;

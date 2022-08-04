import { useParams } from 'react-router-dom';
import {offerType} from '../../types/types';
import CommentForm from '../../components/comment-form/comment-form';
import CommentList from '../../components/comment-list/comment-list';
import Map from '../../components/map/map';
import OtherPlaces from '../../components/other-places/other-places';
import {useAppSelector} from '../../hooks';

function Room(): JSX.Element {
  const {offers, points} = useAppSelector((state) => state);
  const params = useParams();
  const articles:offerType[] = [];
  offers.forEach((offer) => {
    if (points.find((point) => point.title === offer.title)) {
      articles.push(offer);
    }
  });

  const offerData = offers.find((offer) => (offer.id === params.id));

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
                <ul className='header__nav-list'>
                  <li className='header__nav-item user'>
                    <a
                      className='header__nav-link header__nav-link--profile'
                      href='#xxx'
                    >
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__user-name user__name'>
                        Oliver.conner@gmail.com
                      </span>
                      <span className='header__favorite-count'>3</span>
                    </a>
                  </li>
                  <li className='header__nav-item'>
                    <a className='header__nav-link' href='#xxx'>
                      <span className='header__signout'>Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className='page__main page__main--property'>
          <section className='property'>
            <div className='property__gallery-container container'>
              <div className='property__gallery'>
                {
                  offerData?.photos.map((photo, index) =>
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
                {offerData?.isPremium ? <div className='property__mark'><span>Premium</span></div> : null}
                <div className='property__name-wrapper'>
                  <h1 className='property__name'>
                    {/*Beautiful &amp; luxurious studio at great location*/}
                    {offerData?.title}
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
                  <span className='property__rating-value rating__value'>{offerData?.stars}</span>
                </div>
                <ul className='property__features'>
                  <li className='property__feature property__feature--entire'>
                    {offerData?.type}
                  </li>
                  <li className='property__feature property__feature--bedrooms'>
                    {offerData?.bedrooms} Bedrooms
                  </li>
                  <li className='property__feature property__feature--adults'>
                    Max {offerData?.guestsMax} adults
                  </li>
                </ul>
                <div className='property__price'>
                  <b className='property__price-value'>€{offerData?.price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
                <div className='property__inside'>
                  <h2 className='property__inside-title'>Whats inside</h2>
                  <ul className='property__inside-list'>
                    {
                      offerData?.householdItems.map((item) => (
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
                        src={offerData?.ownerInfo.avatar}
                        width={74}
                        height={74}
                        alt='Host avatar'
                      />
                    </div>
                    <span className='property__user-name'>{offerData?.ownerInfo.name}</span>
                    <span className='property__user-status'>Pro</span>
                  </div>
                  <div className='property__description'>
                    <p className='property__text'>
                      {offerData?.description}
                    </p>
                  </div>
                </div>
                <section className='property__reviews reviews'>
                  <CommentList reviews={offerData?.reviews}/>
                  <CommentForm />
                </section>
              </div>
            </div>
            <section className='property__map map'>
              <Map />
            </section>
          </section>
          <div className='container'>
            <OtherPlaces articles={articles}/>
          </div>
        </main>
      </div>
    </>
  );
}

export default Room;

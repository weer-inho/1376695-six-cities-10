import {useAppDispatch, useAppSelector} from '../../hooks';
import { cities } from '../../mocks/mock-data';
import AuthStatus from '../../components/auth-status/auth-status';
import {cityType, offerType} from '../../types/types';
import {changeFavoriteAction} from '../../store/api-actions';

function Favorites(): JSX.Element {
  const {favoriteOffers} = useAppSelector((state) => state);
  let actualCities:cityType[] = [];
  cities.forEach((city) => {
    favoriteOffers.forEach((offer) => {
      if (offer.city.name === city.name) {
        actualCities.push(city);
      }
    });
  });
  actualCities = Array.from(new Set(actualCities));
  const dispatch = useAppDispatch();

  const handleFavorite = (offer: offerType) => {
    dispatch(changeFavoriteAction({hotelId: offer.id, status: Number(!offer.isFavorite)}));
  };

  if (favoriteOffers.length === 0) {
    return (
      <div className='page page--favorites-empty'>
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
        <main className='page__main page__main--favorites page__main--favorites-empty'>
          <div className='page__favorites-container container'>
            <section className='favorites favorites--empty'>
              <h1 className='visually-hidden'>Favorites (empty)</h1>
              <div className='favorites__status-wrapper'>
                <b className='favorites__status'>Nothing yet saved.</b>
                <p className='favorites__status-description'>
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          </div>
        </main>
        <footer className='footer'>
          <a className='footer__logo-link' href='main.html'>
            <img
              className='footer__logo'
              src='img/logo.svg'
              alt='6 cities logo'
              width={64}
              height={33}
            />
          </a>
        </footer>
      </div>
    );
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
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {
                actualCities.map((city) => (
                  <li key={city.cityId} className='favorites__locations-items'>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <a className='locations__item-link' href='#xxx'>
                          <span>{city.name}</span>
                        </a>
                      </div>
                    </div>
                    <div className='favorites__places'>
                      {
                        favoriteOffers.map((offer) =>
                          offer.city.name === city.name ?
                            (
                              <article key={`article${offer.id}`} className='favorites__card place-card'>
                                {
                                  offer.isPremium
                                  &&
                                  <div className='place-card__mark'>
                                    <span>Premium</span>
                                  </div>
                                }
                                <div className='favorites__image-wrapper place-card__image-wrapper'>
                                  <a href='#xxx'>
                                    <img
                                      className='place-card__image'
                                      src={offer.previewImage}
                                      width={150}
                                      height={110}
                                      alt='Place'
                                    />
                                  </a>
                                </div>
                                <div className='favorites__card-info place-card__info'>
                                  <div className='place-card__price-wrapper'>
                                    <div className='place-card__price'>
                                      <b className='place-card__price-value'>{offer.price}€</b>
                                      <span className='place-card__price-text'>/&nbsp;night</span>
                                    </div>
                                    <button
                                      onClick={() => handleFavorite(offer)}
                                      className='place-card__bookmark-button place-card__bookmark-button--active button'
                                      type='button'
                                    >
                                      <svg className='place-card__bookmark-icon' width={18} height={19}>
                                        <use xlinkHref='#icon-bookmark' />
                                      </svg>
                                      <span className='visually-hidden'>In bookmarks</span>
                                    </button>
                                  </div>
                                  <div className='place-card__rating rating'>
                                    <div className='place-card__stars rating__stars'>
                                      <span style={{ width: `${offer.rating * 20}%` }} />
                                      <span className='visually-hidden'>Rating</span>
                                    </div>
                                  </div>
                                  <h2 className='place-card__name'>
                                    <a href='#xxx'>{offer.title}</a>
                                  </h2>
                                  <p className='place-card__type'>{offer.type}</p>
                                </div>
                              </article>
                            ) :
                            null
                        )
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;

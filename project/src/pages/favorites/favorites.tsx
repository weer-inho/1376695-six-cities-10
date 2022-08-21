import {cityType} from '../../types/types';
import CityCard from '../../components/city-card/city-card';
import {useAppSelector} from '../../hooks';

function Favorites(): JSX.Element {
  const {offers} = useAppSelector((state) => state);
  let cities:cityType[] = [];
  offers.forEach((offer) => cities.push(offer.city));
  cities = [...new Set(cities)];

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
        <main className='page__main page__main--favorites'>
          <div className='page__favorites-container container'>
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>
                {
                  cities.map((city) => (
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
                          offers.map((offer) =>
                            offer.city === city ?
                              (
                                <CityCard
                                  onHovered={() => undefined}
                                  key={offer.id}
                                  offer={offer}
                                  isActive={false}
                                />
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
    </>
  );
}

export default Favorites;

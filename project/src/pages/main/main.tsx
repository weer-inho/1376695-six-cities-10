import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import Tabs from '../../components/tabs/tabs';
import AuthStatus from '../../components/auth-status/auth-status';

function Main(): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a href='#xxx' className='header__logo-link header__logo-link--active'>
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
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <div className='cities'>
          <div className='cities__places-container container'>

            <OffersList />

            <div className='cities__right-section'>
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

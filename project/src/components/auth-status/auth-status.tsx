import {useAppSelector} from '../../hooks';
import {AppRoot, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';

function AuthStatus(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <a
            className='header__nav-link header__nav-link--profile'
            href='#xxx'
          >
            <div className='header__avatar-wrapper user__avatar-wrapper'></div>
            <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
            <span className='header__favorite-count'>3</span>
          </a>
        </li>
        <li className='header__nav-item'>
          <a className='header__nav-link' href='#xxx'>
            <span className='header__signout'>Sign out</span>
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <a
            className='header__nav-link header__nav-link--profile'
            href='#xxx'
          >
            <div className='header__avatar-wrapper user__avatar-wrapper'></div>
          </a>
        </li>
        <li className='header__nav-item'>
          <Link to={AppRoot.Login}>
            <span className='header__signout'>Sign in</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default AuthStatus;

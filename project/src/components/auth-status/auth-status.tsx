import {useAppSelector, useAppDispatch} from '../../hooks';
import {AppRoot, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';

function AuthStatus(): JSX.Element {
  const {authorizationStatus, favoriteOffers} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <span className='header__nav-list'>
        <span className='header__nav-item user'>
          <Link
            className='header__nav-link header__nav-link--profile'
            to={AppRoot.Favorites}
          >
            <div className='header__avatar-wrapper user__avatar-wrapper'></div>
            <span
              className='header__user-name user__name'
            >
              Oliver.conner@gmail.com
            </span>
            <span className='header__favorite-count'>{favoriteOffers.length}</span>
          </Link>
        </span>
        <span className='header__nav-item'>
          <Link
            className='header__nav-link'
            to={AppRoot.Main}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            Sign out
          </Link>
        </span>
      </span>
    );
  } else {
    return (
      <span className='header__nav-list'>
        <span className='header__nav-item user'>
          <a
            className='header__nav-link header__nav-link--profile'
            href='#xxx'
          >
            <div className='header__avatar-wrapper user__avatar-wrapper'></div>
          </a>
        </span>
        <span className='header__nav-item'>
          <Link to={AppRoot.Login}>
            <span className='header__signout'>Sign in</span>
          </Link>
        </span>
      </span>
    );
  }
}

export default AuthStatus;

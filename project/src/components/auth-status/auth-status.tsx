import {useAppSelector, useAppDispatch} from '../../hooks';
import {AppRoot, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';

function AuthStatus(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <a
            className='header__nav-link header__nav-link--profile'
            href='#xxx'
          >
            <div className='header__avatar-wrapper user__avatar-wrapper'></div>
            <Link
              to={AppRoot.Favorites}
              className='header__user-name user__name'
            >
              Oliver.conner@gmail.com
            </Link>
            <span className='header__favorite-count'>3</span>
          </a>
        </li>
        <li className='header__nav-item'>
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

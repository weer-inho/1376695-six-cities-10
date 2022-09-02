import {useRef, FormEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/types';
import {AppRoot, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';

function Login(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoot.Main}/>
      :
      <div className='page page--gray page--login'>
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
            </div>
          </div>
        </header>
        <main className='page__main page__main--login'>
          <div className='page__login-container container'>
            <section className='login'>
              <h1 className='login__title'>Sign in</h1>
              <form
                onSubmit={handleSubmit}
                className='login__form form'
                action='#'
                method='post'
              >
                <div className='login__input-wrapper form__input-wrapper'>
                  <label className='visually-hidden'>E-mail</label>
                  <input
                    ref={loginRef}
                    className='login__input form__input'
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                  />
                </div>
                <div className='login__input-wrapper form__input-wrapper'>
                  <label className='visually-hidden'>Password</label>
                  <input
                    ref={passwordRef}
                    className='login__input form__input'
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                  />
                </div>
                <button className='login__submit form__submit button' type='submit'>
                  Sign in
                </button>
              </form>
            </section>
            <section className='locations locations--login locations--current'>
              <div className='locations__item'>
                <a className='locations__item-link' href='#xxx'>
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}

export default Login;

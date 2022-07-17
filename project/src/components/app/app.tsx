import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoot, AuthorizationStatus } from '../../const';
import Error from '../error/error';
import PrivateRoute from '../../components/private-route/private-route';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Main from '../../pages/main/main';

type AppProps = {
  rentalOffers: number;
}

function App({rentalOffers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoot.Main}
          element={<Main rentalOffers={rentalOffers} />}
        />
        <Route
          path={AppRoot.Login}
          element={<Login />}
        />
        <Route
          path={AppRoot.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoot.Room}
          element={<Room />}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

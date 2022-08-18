import { Routes, Route } from 'react-router-dom';
import { AppRoot } from '../../const';
import Error from '../error/error';
import PrivateRoute from '../../components/private-route/private-route';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Main from '../../pages/main/main';
import HistoryRouter from '../history-route/history-route';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const {isDataLoaded, authorizationStatus} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (<LoadingScreen/>);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoot.Main}
          element={
            <Main />
          }
        />
        <Route
          path={AppRoot.Login}
          element={<Login />}
        />
        <Route
          path={AppRoot.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoot.Room}
          element={
            <Room />
          }
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

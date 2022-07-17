import { Navigate } from 'react-router-dom';
import { AppRoot, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoot.Login} />
  );
}

export default PrivateRoute;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers, POINTS, mainCity} from './mocks/mock-data';
import {Provider} from 'react-redux';
import {store} from './store/index';

const Setting = {
  RENTAL_OFFERS: 5,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffers={Setting.RENTAL_OFFERS}
        offers={offers}
        points={POINTS}
        city={mainCity}
      />
    </Provider>
  </React.StrictMode>,
);

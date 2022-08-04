import {createReducer} from '@reduxjs/toolkit';
import {offers, POINTS, mainCity} from '../mocks/mock-data';
import {changeCity} from './action';

const initialState = {
  city: 'Paris',
  offers: offers,
  points: POINTS,
  mainCity: mainCity,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(changeCity, (state, action) => {
      const city = action.payload;

      state.city = city;
    });
});

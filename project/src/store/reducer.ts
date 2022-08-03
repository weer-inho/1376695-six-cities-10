import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/mock-data';
import {changeCity} from './action';

const initialState = {
  city: 'Paris',
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    });
});

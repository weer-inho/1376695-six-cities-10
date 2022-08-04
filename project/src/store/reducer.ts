import {createReducer} from '@reduxjs/toolkit';
import {offers, POINTS, cities} from '../mocks/mock-data';
import {changeCity, changeSort} from './action';

const initialState = {
  city: cities[1].name,
  offers: offers,
  points: POINTS,
  mainCity: cities[1],
  sorting: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(changeCity, (state, action) => {
      const city = action.payload;

      state.city = city;
    })
    .addCase(changeSort, (state, action) => {
      const sorting = action.payload;

      state.sorting = sorting;
    });
});

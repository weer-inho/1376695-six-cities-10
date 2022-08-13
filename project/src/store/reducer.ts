import {createReducer} from '@reduxjs/toolkit';
import {offers, POINTS, cities} from '../mocks/mock-data';
import {changeCity, changeHoveredId, changeSort} from './action';

const initialState = {
  hoveredCard:  '',
  offers: offers,
  points: POINTS,
  mainCity: cities[1],
  sorting: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(changeCity, (state, action) => {
      const city = action.payload;

      state.mainCity = city;
    })
    .addCase(changeSort, (state, action) => {
      const sorting = action.payload;

      state.sorting = sorting;
    })
    .addCase(changeHoveredId, (state, action) => {
      state.hoveredCard = action.payload;
    });
});

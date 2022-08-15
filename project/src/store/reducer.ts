import {createReducer} from '@reduxjs/toolkit';
import { POINTS, cities} from '../mocks/mock-data';
import {changeCity, changeHoveredId, changeSort, loadCities, setDataLoadedStatus} from './action';
import { offerType } from '../types/types';

const initialState = {
  hoveredCard:  '',
  offers: [] as offerType[],
  points: POINTS,
  mainCity: cities[1],
  isDataLoaded: false,
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
    .addCase(loadCities, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeHoveredId, (state, action) => {
      state.hoveredCard = action.payload;
    });
});

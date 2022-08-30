import {createReducer} from '@reduxjs/toolkit';
import { POINTS, cities} from '../mocks/mock-data';
import {
  changeCity,
  changeHoveredId,
  changeSort,
  loadCities,
  setDataLoadedStatus,
  requireAuthorization,
  loadOffer,
  loadComments,
  loadOffersNearBy
} from './action';
import {commentType, offerType} from '../types/types';
import {AuthorizationStatus} from '../const';

const initialState = {
  hoveredCard:  undefined as offerType['id'] | undefined,
  offers: [] as offerType[],
  points: POINTS,
  mainCity: cities[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  lastComments: undefined as commentType[] | undefined,
  lastOffersNearBy: undefined as offerType[] | undefined,
  currentCity: undefined as offerType | undefined,
  sorting: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
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
    .addCase(loadOffer, (state, action) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
    })
    .addCase(loadComments, (state, action) => {
      state.lastComments = action.payload;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.lastOffersNearBy = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeHoveredId, (state, action) => {
      state.hoveredCard = action.payload;
    });
});

import {createAction} from '@reduxjs/toolkit';
import {cityType, offerType} from '../types/types';

export const changeCity = createAction<cityType>('changeCity');
export const changeSort = createAction<string>('changeSort');
export const changeHoveredId = createAction<string>('changeHoveredCard');
export const fillOffersList = createAction('fillOffersList');
export const loadCities = createAction<offerType[]>('data/fetchCities');

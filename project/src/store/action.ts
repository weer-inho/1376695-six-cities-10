import {createAction} from '@reduxjs/toolkit';
import {cityType, offerType, commentType} from '../types/types';
import {AppRoot, AuthorizationStatus} from '../const';

export const changeCity = createAction<cityType>('changeCity');
export const changeSort = createAction<string>('changeSort');
export const changeHoveredId = createAction<offerType['id'] | undefined>('changeHoveredCard');
export const fillOffersList = createAction('fillOffersList');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const loadCities = createAction<offerType[]>('data/fetchCities');
export const loadOffer = createAction<offerType>('data/fetchOffer');
export const loadComments = createAction<commentType[]>('data/fetchComments');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoot>('redirectToRoute');

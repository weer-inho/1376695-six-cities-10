import {createAction} from '@reduxjs/toolkit';
import {cityType} from '../types/types';

export const changeCity = createAction<cityType>('changeCity');
export const changeSort = createAction<string>('changeSort');
export const changeHoveredId = createAction<string>('changeHoveredCard')
export const fillOffersList = createAction('fillOffersList');

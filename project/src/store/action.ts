import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('changeCity');
export const changeSort = createAction<string>('changeSort');
export const fillOffersList = createAction('fillOffersList');

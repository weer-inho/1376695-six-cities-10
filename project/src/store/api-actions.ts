import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import {APIRoute, AppRoot} from '../const';
import {saveToken} from '../services/token';
import { loadCities, setDataLoadedStatus, requireAuthorization, redirectToRoute, loadOffer } from './action';
import { offerType, AuthData, UserData } from '../types/types';
import {AuthorizationStatus} from '../const';

export const fetchCitiesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    try{
      const {data} = await api.get<offerType[]>(APIRoute.Hotels);
      dispatch(loadCities(data));
    }
    finally{
      dispatch(setDataLoadedStatus(false));
    }
  },
);

export const fetchOfferAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<offerType>(`/hotels/${_arg}`);
    dispatch(loadOffer(data));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoot.Main));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import {APIRoute, AppRoot} from '../const';
import {saveToken, dropToken} from '../services/token';
import {
  loadCities,
  setDataLoadedStatus,
  requireAuthorization,
  redirectToRoute,
  loadOffer,
  loadComments,
  loadOffersNearBy,
  loadFavorites,
  addNewFavorite
} from './action';
import {offerType, AuthData, UserData, commentType, CommentData} from '../types/types';
import {AuthorizationStatus} from '../const';

export const fetchCitiesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCities',
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

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    try{
      const {data} = await api.get<offerType[]>(APIRoute.Favorites);
      dispatch(loadFavorites(data));
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
    const {data} = await api.get<offerType>(`/favorite/${_arg}`);
    dispatch(loadOffer(data));
  },
);

export const changeFavoriteAction = createAsyncThunk<void, {hotelId: number | undefined, status: number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFavorite',
  async ({hotelId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<offerType>(`/favorite/${hotelId}/${status}`);
    dispatch(addNewFavorite(data));
  },
);


export const fetchOfferCommentsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOfferComments',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<commentType[]>(`/comments/${_arg}`);
    dispatch(loadComments(data));
  },
);

export const fetchOffersNearByAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffersNearBy',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<offerType[]>(`/hotels/${_arg}/nearBy`);
    dispatch(loadOffersNearBy(data));
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

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


export const createCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({offerNumber, comment: string, rating: number}, {dispatch, extra: api}) => {
    const {data} = await api.post<commentType[]>(`/comments/${offerNumber}`, {comment: string, rating: number});
    dispatch(loadComments(data));
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

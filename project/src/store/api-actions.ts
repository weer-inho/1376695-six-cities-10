import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { loadCities, setDataLoadedStatus } from './action';
import { offerType } from '../types/types';

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

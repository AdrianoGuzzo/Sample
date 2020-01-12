import { DataActionTypes } from './data.types';

export const setData = data => ({
  type: DataActionTypes.SET_DATA,
  payload: data
});
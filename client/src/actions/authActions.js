import {SET_CURRENT_USER} from './types';

export const registerUser = (userData) => {
  return{
    type: SET_CURRENT_USER,
    payload: userData
  }
}
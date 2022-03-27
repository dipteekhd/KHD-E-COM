import {
  INITIALIZE_AUTH,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
} from '../actions/types';
import { authState } from '../context';

export const authReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_AUTH: {
      return { ...state, ...action.payload };
    }

    case LOG_IN_SUCCESS: {
      return { ...state, ...action.payload, isUserLoggedIn: true };
    }

    case LOG_OUT_SUCCESS: {
      return { ...state, ...authState };
    }

    default:
      throw new Error(`Unknown type ${action.type}`);
  }
};

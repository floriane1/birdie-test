import { combineReducers } from 'redux';
import { Event } from '../types';
import {
  FetchEventsAction,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
} from '../types/index';

export interface EventState {
  items: Event[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export const initialState: EventState = {
  items: [],
  loading: false,
  error: false,
  errorMessage: '',
};

export const events = (
  state: EventState = initialState,
  action: FetchEventsAction
): EventState => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return { ...state, loading: true, error: false };
    case FETCH_EVENTS_SUCCESS:
      return { ...state, items: action.payload, loading: false, error: false };
    case FETCH_EVENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ events });
export type RootState = ReturnType<typeof rootReducer>;

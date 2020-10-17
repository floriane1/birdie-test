import { combineReducers } from 'redux';
import { Event } from '../types';
import {
  FetchEventsAction,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
} from '../types/index';

export type RootState = Readonly<{
  events: Event[];
  loading: boolean;
  error: boolean;
}>;

export const initialState: RootState = {
  events: [],
  loading: false,
  error: false,
};

export const eventsReducer = (
  state: RootState = initialState,
  action: FetchEventsAction
): RootState => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return { ...state, loading: true, error: false };
    case FETCH_EVENTS_SUCCESS:
      return { ...state, events: action.payload, loading: false, error: false };
    case FETCH_EVENTS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export const rootReducer = combineReducers<RootState>({ eventsReducer });

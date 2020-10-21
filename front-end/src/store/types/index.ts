import { Event } from '../types';

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';

export interface FetchEventsRequestAction {
  type: typeof FETCH_EVENTS_REQUEST;
  payload: string;
}

export interface FetchEventsSuccessAction {
  type: typeof FETCH_EVENTS_SUCCESS;
  payload: Event[];
}

export interface FetchEventsErrorAction {
  type: typeof FETCH_EVENTS_ERROR;
  payload: string;
}

export type FetchEventsAction =
  | FetchEventsRequestAction
  | FetchEventsSuccessAction
  | FetchEventsErrorAction;

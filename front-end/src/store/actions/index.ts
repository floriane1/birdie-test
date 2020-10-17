import { Event } from '../types';
import {
  FetchEventsRequestAction,
  FetchEventsSuccessAction,
  FetchEventsErrorAction,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
} from '../types/index';

export function fetchEventsRequest(
  careRecipientId: string
): FetchEventsRequestAction {
  return {
    type: FETCH_EVENTS_REQUEST,
    payload: careRecipientId,
  };
}

export function fetchEventsSuccess(payload: Event[]): FetchEventsSuccessAction {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload,
  };
}

export function fetchEventsError(): FetchEventsErrorAction {
  return {
    type: FETCH_EVENTS_ERROR,
  };
}

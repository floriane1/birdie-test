import * as actions from './index';
import { Event } from '../types';
import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
} from '../types/index';

describe('Actions', () => {
  it('should dispatch a request to fetch events', () => {
    const careRecipientId = 'care-recipient-id-123';
    const expectedAction = {
      type: FETCH_EVENTS_REQUEST,
      payload: careRecipientId,
    };
    expect(actions.fetchEventsRequest(careRecipientId)).toEqual(expectedAction);
  });

  it('should dispatch a success in fetching events', () => {
    const payload: Event[] = [];
    const expectedAction = {
      type: FETCH_EVENTS_SUCCESS,
      payload,
    };
    expect(actions.fetchEventsSuccess(payload)).toEqual(expectedAction);
  });

  it('should dispatch an error in fetching events', () => {
    const payload: string = 'Error message';
    const expectedAction = {
      type: FETCH_EVENTS_ERROR,
      payload,
    };
    expect(actions.fetchEventsError(payload)).toEqual(expectedAction);
  });
});

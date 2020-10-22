import { Event, EventType } from '../types';
import { initialState, events } from './index';
import { FetchEventsAction } from '../types/index';
import {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsError,
} from '../actions/index';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(events(undefined, {} as FetchEventsAction)).toEqual(initialState);
  });

  it('should handle request to fetch events', () => {
    const careRecipientId = 'care-recipient-id-123';
    expect(events(initialState, fetchEventsRequest(careRecipientId))).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle success in fetching events', () => {
    const eventTest: Event = {
      id: 'event-id-123',
      event_type: EventType.ALERT_RAISED,
      care_recipient_id: 'care-recipient-id-123',
      timestamp: new Date('2019-04-24T02:00:11.187Z'),
    };
    expect(events(initialState, fetchEventsSuccess([eventTest]))).toEqual({
      ...initialState,
      items: [eventTest],
    });
  });

  it('should handle error in fetching events', () => {
    const errorMessage: string = 'Error message';
    expect(events(initialState, fetchEventsError(errorMessage))).toEqual({
      ...initialState,
      error: true,
      errorMessage,
    });
  });
});

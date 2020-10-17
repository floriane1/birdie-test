import { Event, EventType } from '../types';
import { initialState, eventsReducer } from './index';
import { FetchEventsAction } from '../types/index';
import {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsError,
} from '../actions/index';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(eventsReducer(undefined, {} as FetchEventsAction)).toEqual(
      initialState
    );
  });

  it('should handle request to fetch events', () => {
    const careRecipientId = 'care-recipient-id-123';
    expect(
      eventsReducer(initialState, fetchEventsRequest(careRecipientId))
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle success in fetching events', () => {
    const eventTest: Event = {
      id: 'event-id-123',
      event_type: EventType.ALERT_RAISED,
      care_recipient_id: 'care-recipient-id-123',
      timestamp: '2019-04-24T02:00:11.187Z',
    };
    expect(
      eventsReducer(initialState, fetchEventsSuccess([eventTest]))
    ).toEqual({
      ...initialState,
      events: [eventTest],
    });
  });

  it('should handle error in fetching events', () => {
    expect(eventsReducer(initialState, fetchEventsError())).toEqual({
      ...initialState,
      error: true,
    });
  });
});

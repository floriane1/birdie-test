import {
  getEvents,
  filterEventsByType,
  getAlertsRaised,
  getConcernsRaisedBySeverity,
} from './index';

import { RootState } from '../reducers';
import { Event, EventType } from '../types';

const eventTestA: Event = {
  id: 'event-id-A',
  event_type: EventType.ALERT_RAISED,
  care_recipient_id: 'care-recipient-id-123',
  timestamp: new Date('2019-04-24T02:00:11.187Z'),
};

const eventTestB: Event = {
  id: 'event-id-B',
  event_type: EventType.ALERT_RAISED,
  care_recipient_id: 'care-recipient-id-123',
  timestamp: new Date('2019-05-24T02:00:11.187Z'),
};

const eventTestC: Event = {
  id: 'event-id-C',
  event_type: EventType.CONCERN_RAISED,
  care_recipient_id: 'care-recipient-id-123',
  timestamp: new Date('2019-06-24T02:00:11.187Z'),
  severity: 'high',
};

const stateTest: RootState = {
  events: {
    items: [eventTestA, eventTestB, eventTestC],
    loading: false,
    error: false,
    errorMessage: '',
  },
};

describe('Selectors', () => {
  describe('getEvents', () => {
    it('returns events items in state', () => {
      expect(getEvents(stateTest)).toMatchObject(stateTest.events.items);
    });
  });

  describe('filterEventsByType', () => {
    it('filters events by type', () => {
      expect(
        filterEventsByType(EventType.CONCERN_RAISED)(stateTest)
      ).toMatchObject([eventTestC]);
    });
  });

  describe('getAlertsRaised', () => {
    it('filters events that are alerts', () => {
      expect(getAlertsRaised()(stateTest)).toMatchObject([
        eventTestA,
        eventTestB,
      ]);
    });
  });

  describe('getConcernsRaisedBySeverity', () => {
    it('get stats of concern raised', () => {
      expect(getConcernsRaisedBySeverity()(stateTest)).toMatchObject({
        high: 1,
      });
    });
  });
});

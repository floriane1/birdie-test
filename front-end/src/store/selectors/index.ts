import { createSelector } from 'reselect';
import { RootState } from '../reducers';
import { EventType } from '../types';

export const getEvents = (state: RootState) => state.events.items;

export const filterEventsByType = (type: EventType) =>
  createSelector([getEvents], (events) =>
    events.filter((event) => event.event_type === type)
  );

export const getAlertsRaised = () =>
  createSelector(
    [filterEventsByType(EventType.ALERT_RAISED)],
    (events) => events
  );

export const getConcernsRaisedBySeverity = () =>
  createSelector([filterEventsByType(EventType.CONCERN_RAISED)], (events) =>
    events.reduce(
      (stat, event) => ({
        ...stat,
        [event.severity]: (stat[event.severity] || 0) + 1,
      }),
      {} as { [key: string]: number }
    )
  );

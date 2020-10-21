import { fetchEvents, watchFetchEvents } from './index';
import { call, takeLatest } from 'redux-saga/effects';
import { FETCH_EVENTS_REQUEST } from '../types/index';
import axios from 'axios';

describe('Fetch events', () => {
  const gen = fetchEvents({
    type: FETCH_EVENTS_REQUEST,
    payload: 'e3e2bff8-d318-4760-beea-841a75f00227',
  });
  it('takes correct endpoint', () => {
    expect(gen.next().value).toEqual(
      call(
        axios.get, '/care-recipients/e3e2bff8-d318-4760-beea-841a75f00227/events'
      )
    );
  });
  it('dispatchs an action', () => {
    // @ts-ignore: unreachable code error
    expect(gen.next().value.type).toEqual('PUT');
  });
  it('and stops', () => {
    expect(gen.next().done).toEqual(true);
  });
});

describe('Watch fetch events', () => {
  const gen = watchFetchEvents();
  it('takes the latest fetch events action', () => {
    expect(gen.next().value).toEqual(
      takeLatest(FETCH_EVENTS_REQUEST, fetchEvents)
    );
  });
  it('and stops', () => {
    expect(gen.next().done).toEqual(true);
  });
});

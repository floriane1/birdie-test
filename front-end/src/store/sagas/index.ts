import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FetchEventsRequestAction, FETCH_EVENTS_REQUEST } from '../types/index';
import { fetchEventsSuccess, fetchEventsError } from '../actions';
import { Event } from '../types';

export function* fetchEvents(action: FetchEventsRequestAction) {
  try {
    const query = `/care-recipients/${action.payload}/events`;
    const results = yield call(axios.get, query);
    const events: Event[] = results.data.map((event: Event) => ({
      ...event,
      timestamp: new Date(
        new Date(event.timestamp).setMonth(
          // TO-DO: change when events data more recent
          new Date(event.timestamp).getMonth() + 17
        )
      ),
    }));
    yield put(fetchEventsSuccess(events));
  } catch (error) {
    yield put(fetchEventsError(error.message));
  }
}

export function* watchFetchEvents() {
  yield takeLatest(FETCH_EVENTS_REQUEST, fetchEvents);
}

function* initSaga() {
  yield all([watchFetchEvents()]);
}

export default initSaga;

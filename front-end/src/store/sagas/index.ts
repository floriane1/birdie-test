import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FetchEventsRequestAction, FETCH_EVENTS_REQUEST } from '../types/index';
import { fetchEventsSuccess, fetchEventsError } from '../actions';

export function* fetchEvents(action: FetchEventsRequestAction) {
  try {
    const query = `/care-recipients/${action.payload}/events`;
    const eventsResults = yield call(axios.get, query);
    yield put(fetchEventsSuccess(eventsResults.data));
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

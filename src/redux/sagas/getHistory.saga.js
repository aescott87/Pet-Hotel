import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getHistory() {
  try {
    const response = yield axios.get('/api/pets');

    yield put({ type: 'GET_HISTORY_RESPONSE', payload: response.data });
  } catch (error) {
    console.error('Get History failed', error);
  }
}

function* getHistorySaga() {
    yield takeLatest('GET_HISTORY_SAGA', getHistory);
  }
  
export default getHistorySaga;

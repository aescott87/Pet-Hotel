import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getOwner() {
  try {
    const response = yield axios.get('/api/owners');

    yield put({ type: 'GET_OWNERs_RESPONSE', payload: response.data });
  } catch (error) {
    console.error('Get owner failed', error);
  }
}
function* getOwnerSaga() {
    yield takeLatest('GET_OWNER_SAGA', getOwner);
}


export default getOwnerSaga;

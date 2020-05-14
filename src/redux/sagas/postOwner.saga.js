import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postOwner(action) {
  try {
    yield axios.post('/api/owners', action.payload);

    yield put({ type: 'GET_OWNER_SAGA' });
  } catch (error) {
    console.error('Get owner failed', error);
  }
}
function* getOwnerSaga() {
    yield takeLatest('POST_OWNER', postOwner);
}


export default getOwnerSaga;

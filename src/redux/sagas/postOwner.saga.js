import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postOwner(action) {
  console.log('in post owner')
  try {
    yield axios.post('/api/owners', action.payload);

    yield put({ type: 'GET_OWNER_SAGA' });
  } catch (error) {
    console.error('Get owner failed', error);
  }
}
function* postOwnerSaga() {
    yield takeLatest('POST_OWNER', postOwner);
}


export default postOwnerSaga;

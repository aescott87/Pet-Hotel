import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* checkIn(event) {
    console.log('in checkout', event.payload)
    try{
      //Sends put request and pet ID to server
      const response = yield axios.put(`/api/checkIn/${event.payload}`);
      yield put({type: 'GET_HISTORY_SAGA'})
    }
    catch(error) {
      console.log('Error Checking in pet', error);
    }
}

function* checkOutSaga() {
    yield takeLatest('CHECK_IN_SAGA', checkIn);
}

export default checkOutSaga;
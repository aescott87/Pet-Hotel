import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* checkIn(event) {
    console.log('in checkout', event.payload)
    try{
      //Sends delete request and pet ID to server
      yield axios.put(`/api/checkin/${event.payload.id}`);
      yield put({type: 'GET_HISTORY_RESPONSE'})
    }
    catch(error) {
      console.log('Error Checking in pet', error);
    }
}

function* checkOutSaga() {
    yield takeLatest('CHECK_IN_SAGA', checkIn);
}

export default checkOutSaga;
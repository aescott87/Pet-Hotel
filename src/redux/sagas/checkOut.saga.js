import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* checkOut(event) {
    console.log('in checkout', event.payload)
    try{
      //Sends delete request and pet ID to server
      yield axios.put(`/api/pet/${event.payload.id}`);
      yield put({type: 'GET_HISTORY_RESPONSE'})
    }
    catch(error) {
      console.log('Error checkingout pet', error);
    }
}

function* checkOutSaga() {
    yield takeLatest('CHECK_OUT_SAGA', checkOut);
}

export default checkOutSaga;
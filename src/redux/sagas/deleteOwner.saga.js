import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteOwner(event) {
    console.log('in deleteOwner', event.payload)
    try{
      //Sends delete request and owner ID to server
      yield axios.delete(`/api/owner/${event.payload.id}`);
      yield put({type: 'GET_HISTORY_RESPONSE'})
    }
    catch(error) {
      console.log('Error deleting owner', error);
    }
}

function* deleteOwnerSaga() {
    yield takeLatest('DELETE_OWNER', deleteOwner);
}

export default deleteOwnerSaga;
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteOwner(action) {
    console.log('in deleteOwner', action.payload)
    try{
      //Sends delete request and owner ID to server
      yield axios.delete(`/api/owners/${action.payload.id}`);
      yield put({type: 'GET_OWNERS_SAGA'})
    }
    catch(error) {
      console.log('Error deleting owner', error);
    }
}

function* deleteOwnerSaga() {
    yield takeLatest('DELETE_OWNER', deleteOwner);
}

export default deleteOwnerSaga;
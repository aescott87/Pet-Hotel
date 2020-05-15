import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deletePet(event) {
    console.log('in deletePet', event.payload)
    try{
      //Sends delete request and pet ID to server
      yield axios.delete(`/api/pets/${event.payload}`);
      yield put({type: 'GET_HISTORY_SAGA'})
    }
    catch(error) {
      console.log('Error deleting pet', error);
    }
}

function* deletePetSaga() {
    yield takeLatest('DELETE_PET', deletePet);
}

export default deletePetSaga;
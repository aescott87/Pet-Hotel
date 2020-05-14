import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postPet(action) {
  try {
    yield axios.post("/api/pets", action.payload);

    yield put({ type: "GET_HISTORY_SAGA" });
  } catch (error) {
    console.error("Get owner failed", error);
  }
}

function* getOwnerSaga() {
  yield takeLatest("POST_PET", postPet);
}
  
export default getOwnerSaga;

import { all } from 'redux-saga/effects';
import checkinSaga from './checkIn.saga';
import checkOutSaga from './checkOut.saga';
import deleteOwnerSaga from './deleteOwner.saga';
import deletePetsSaga from './deletePets.saga';
import getHistorySaga from './getHistory.saga';
import getOwnerSaga from './getOwner.saga';
import postOwnerSaga from './postOwner.saga';
import postPetSaga from './postPet.saga';

export default function* rootSaga() {
  yield all([checkinSaga(), checkOutSaga(), deleteOwnerSaga(), deletePetsSaga(), 
    getHistorySaga(), getOwnerSaga(), postOwnerSaga(), postPetSaga()]);
}

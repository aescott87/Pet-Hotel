import { all } from 'redux-saga/effects';
import getHistory from './getHistory.saga';
import deletePetSaga from './deletePets.saga';
import deleteOwnerSaga from './deleteOwner.saga';
import getOwner from './getOwner.saga';
import postOwnerSaga from './postOwner.saga';

export default function* rootSaga() {
  yield all([getHistory(), getOwner(),deletePetSaga(),
    deleteOwnerSaga(),postOwnerSaga()]);
}

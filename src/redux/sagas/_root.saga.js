import { all } from 'redux-saga/effects';
import historysaga from './history.saga';
import deletePetSaga from './deletePets.saga';
import deleteOwnerSaga from './deleteOwner.saga';

export default function* rootSaga() {
  yield all([history.saga(), deletePetSaga(),
    deleteOwnerSaga(),]);
}

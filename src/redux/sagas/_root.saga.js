import { all } from 'redux-saga/effects';
import sampleSaga from './sample.saga';
import deletePetSaga from './deletePets.saga';
import deleteOwnerSaga from './deleteOwner.saga';

export default function* rootSaga() {
  yield all([
    deletePetSaga(),
    deleteOwnerSaga(),
  ]);
}

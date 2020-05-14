import { all } from 'redux-saga/effects';
import historysaga from './history.saga';

export default function* rootSaga() {
  yield all([history.saga()]);
}

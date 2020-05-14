import { combineReducers } from 'redux';
import sampleReducer from './sample.reducer';
import historyReducer from './history.reducer'
import ownerReducer from './owner.reducer'

const rootReducer = combineReducers({ sampleReducer,historyReducer, ownerReducer });

export default rootReducer;

import { combineReducers } from 'redux';
import sampleReducer from './sample.reducer';
import historyReducer from './history.reducer'
import OwnerReducer from './owner.reducer'

const rootReducer = combineReducers({ sampleReducer,historyReducer, OwnerReducer });

export default rootReducer;

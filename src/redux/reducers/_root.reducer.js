import { combineReducers } from 'redux';
import historyReducer from './history.reducer'
import ownerReducer from './owner.reducer'

const rootReducer = combineReducers({ historyReducer, ownerReducer });

export default rootReducer;

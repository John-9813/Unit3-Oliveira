
import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';
import jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  favourite: favouritesReducer,
  jobs: jobsReducer
});

export default rootReducer;

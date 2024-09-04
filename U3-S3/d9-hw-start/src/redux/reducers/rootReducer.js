
import { combineReducers } from 'redux';
import favouritesReducer from './favoritesReducer';
import jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  favourite: favouritesReducer,
  jobs: jobsReducer
});

export default rootReducer;

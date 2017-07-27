import { combineReducers } from 'redux';
import SearchReducer from './reducer_searchbar';

const rootReducer = combineReducers({  
  weatherData : SearchReducer
});

export default rootReducer;

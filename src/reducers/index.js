import { combineReducers } from 'redux';
import SearchReducer from './reducer_searchbar';

const rootReducer = combineReducers({  
  SearchReducer : SearchReducer
});

export default rootReducer;

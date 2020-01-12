  
import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';

//configura os reducers especificos
export default combineReducers({
   data: dataReducer
});

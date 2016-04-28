import { combineReducers } from 'redux';
import api_reducer from './reducer_api_data';
import imgur_reducer from './reducer_imgur_data';
import selected_api_reducer from './reducer_selected_api';


const rootReducer = combineReducers({
	api_data: api_reducer,
	imgur_data: imgur_reducer,
	selected_api: selected_api_reducer
});

export default rootReducer;

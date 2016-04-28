import { SELECTED_API } from '../actions/select_api';


export default function(state = '', action){
	console.log('action.type = ', action.type)
	switch(action.type){
		case SELECTED_API:
			console.log('action.payload = ', action.payload)
			return action.payload;
	}
	return state;
}


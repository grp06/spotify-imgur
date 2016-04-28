import { IMGUR_LOOKUP } from '../actions/imgur_lookup';

export default function(state = [] , action){
	switch(action.type){
		case IMGUR_LOOKUP:
			console.log('imgur data: ', action.payload.data.data[0].title);
			const filter = action.payload.data.data.filter(item => item.animated == true).slice(0,6);
			console.log('flter', filter)
			return filter
	}

	return state;
}
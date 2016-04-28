import { DO_THE_THING } from '../actions/do_the_thing';

export default function(state = [] , action){

	console.log(action.type)
	switch(action.type){
		case DO_THE_THING:
			if(action.payload.data.artists.items.length === 0){
				return "Sorry, search again"
			} else {
				console.log(action.payload.data	)
				return { 
					name: action.payload.data.artists.items[0].name,
					uri: action.payload.data.artists.items[0].uri
				}
			}
	}

	return state;
}
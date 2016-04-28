import axios from 'axios';

export const DO_THE_THING = 'DO_THE_THING';

export function DoTheThing(term){
	
	const artist = encodeURI(term);
	const spotifyUrl = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist';

	const spotifyData = axios.get(spotifyUrl);

	console.log('action is passing the term: ' + term);
	return {
		type: DO_THE_THING,
		payload: spotifyData
	}
}
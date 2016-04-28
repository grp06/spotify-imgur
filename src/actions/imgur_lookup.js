import axios from 'axios';

const imgurRootUrl = 'https://api.imgur.com/3/gallery/search/top?q=';
const apiKey = 'b4fd2263541a595';
const params = {'Authorization' : 'Client-ID ' + apiKey}

export const IMGUR_LOOKUP = 'IMGUR_LOOKUP';

export function ImgurLookup(term){
	
	const artist = encodeURI(term);
	const imgurUrl = imgurRootUrl + artist;

	const imgurData = axios.get(imgurUrl, { headers: params});

	return {
		type: IMGUR_LOOKUP,
		payload: imgurData
	}
}
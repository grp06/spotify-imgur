export const SELECTED_API = 'SELECTED_API';

export function SelectAPI(selectedAPI){
	console.log('hello from the action! '  + selectedAPI);
	return {
		type: SELECTED_API,
		payload: selectedAPI
	}
}
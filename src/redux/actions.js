import {SET_ALL_DATA} from './types';

export function setAllData(allData) {
	return {
		type: SET_ALL_DATA,
		allData
	}
};

export function fecthAllData() {
	return function(dispatch) {
		fetch("https://restcountries.eu/rest/v2/")
		.then(response => response.json())
		.then(data => {
			dispatch(setAllData(data));
		})
		.catch(err => {
			console.log(err);
		});
	}
}
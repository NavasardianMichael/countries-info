import {SET_ALL_DATA, ADD_CHOSEN_COUNTRY, SHOW_ALL_COUNTRIES, SET_ALL_COUNTRIES_NAMES, REMOVE_COUNTRY} from './types';

export function setAllData(allData) {
	return {
		type: SET_ALL_DATA,
		allData
	}
};

export function addChosenCountry(newCountry) {
	return {
		type: ADD_CHOSEN_COUNTRY,
		newCountry
	}
}

export function showAllCountries() {
	return {
		type: SHOW_ALL_COUNTRIES
	}
}

export function setAllCountriesNames(allCountriesNames) {
	return {
		type: SET_ALL_COUNTRIES_NAMES,
		allCountriesNames
	}
}

export function removeCountry(country) {
	return {
		type: REMOVE_COUNTRY,
		country
	}
}

export function fecthAllData() {
	return function(dispatch) {
		fetch("https://restcountries.eu/rest/v2/")
		.then(response => response.json())
		.then(data => {
			dispatch(setAllData(data));
			const allCountriesNamesArr = data.map(coutry => coutry.name);
			dispatch(setAllCountriesNames(allCountriesNamesArr));
		})
		.catch(err => {
			console.log(err);
		});
	}
}
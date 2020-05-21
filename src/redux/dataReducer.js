import {SET_ALL_DATA, ADD_CHOSEN_COUNTRY, SHOW_ALL_COUNTRIES, SET_ALL_COUNTRIES_NAMES, REMOVE_COUNTRY} from './types';

const initialState = {
	allData: [],
	allCountriesNames: [],
	shownCountries: []
};

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ALL_DATA:
			return {...state, allData: action.allData}
		case ADD_CHOSEN_COUNTRY:
			if(!state.shownCountries.includes(action.newCountry)) {
				return {...state, shownCountries: [action.newCountry, ...state.shownCountries]}
			} else {
				return state
			}
		case SHOW_ALL_COUNTRIES:
			return {...state, shownCountries: state.allData}
		case REMOVE_COUNTRY:
			return {...state, shownCountries: state.shownCountries.filter(country => country !== action.country)}			
		case SET_ALL_COUNTRIES_NAMES:
			return {...state, allCountriesNames: action.allCountriesNames}								
		default: 
			return state
	}
}

export default dataReducer
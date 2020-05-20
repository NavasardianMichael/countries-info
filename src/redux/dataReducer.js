import {SET_ALL_DATA} from './types';

const initialState = {
	allData: []
};

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ALL_DATA:
			return {...state, allData: action.allData}
		default: 
			return state
	}
}

export default dataReducer
import React from 'react';
import {useDispatch} from 'react-redux';
import {addChosenCountry} from '../redux/actions';

function FoundCountryNameItem(props) {
	const dispatch = useDispatch();
	function onFoundCountryNameClickHandler() {
		dispatch(addChosenCountry(props.country));
	}

	return (
		<div className="col-12 btn btn-outline-secondary found-country-name" onClick={onFoundCountryNameClickHandler}
		>
			{props.country.name}
		</div>
	)
}

export default FoundCountryNameItem
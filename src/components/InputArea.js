import React, {useState, useEffect} from 'react';
import {useStore} from 'react-redux';
import {fecthAllData} from '../redux/actions';
import FoundCountryNameItem from './FoundCountryNameItem';
import './inputArea.css';

function InputArea() {
	const store = useStore();
	const [inputText, setInputText] = useState("");
	const [foundCountries, setFoundCountries] = useState([]);

	 useEffect(() => {
    	store.dispatch(fecthAllData());
  	},[]);

	function onInputChangeHandler(event) {
		setInputText(event.target.value);
		var foundCountriesLocal = [];
		store.getState().data.allData.map(country => {
			if(event.target.value !== '' && country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0) {
				foundCountriesLocal.push(country);
			}
		});
		setFoundCountries(foundCountriesLocal);
	}
	
	const redneredFoundCountries = foundCountries.map(country => <FoundCountryNameItem country={country} key={`foundCountry${country.name}`}/>)

	return (
		<div id="inputArea" className="mb-3">
			<input className="form-control" type="text" placeholder="Enter country name" onChange={onInputChangeHandler} value={inputText}/>
			<div className="found-countries">
				<div className="row m-0">
					{redneredFoundCountries}
				</div>
			</div>
		</div>
	)
}

export default InputArea
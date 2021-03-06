import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeCountry} from '../redux/actions';
import './countryItem.css';

function CountryItem(props) {
	const dipstatch = useDispatch();
	const [itemExpendedStatus, setItemExpendedStatus] = useState(false);

	function onItemClickHandler(event) {
		setItemExpendedStatus(prevState => !prevState);
	}

	function inputCheckHandler() {
		setItemExpendedStatus(prevState => !prevState);
	}

	function onClickRemoveItemHandler(country) {
		dipstatch(removeCountry(props.country))
	}

	return (
	<div className="col-12 py-3 border country-item">
		<div className="row">
			<button type="button" className="btn btn-outline-danger btn-close" onClick={onClickRemoveItemHandler}>&times;</button>
			<div className="col-sm-4">
				<h4 className="mb-3">{props.country.name} ({props.country.nativeName})</h4>
				<img src={props.country.flag} alt={props.country.name} />
			</div>
			<div className="col">
				<p><i className="far fa-building"></i> Capital: {props.country.capital}</p>
				<p><i className="fas fa-globe-africa"></i> Area: {props.country.area} Km²</p>				
				<p><i className="fas fa-users"></i> Population: {props.country.population}</p>
				<input type="checkbox" className="show-more-btn" onChange={inputCheckHandler} checked={itemExpendedStatus} />
				<div className="more-info">
					<p><i className="fas fa-square-root-alt"></i> Gini coefficient: {props.country.gini || "not available"}</p>
					<p><i className="fab fa-internet-explorer"></i> Top Level Domain: {props.country.topLevelDomain}</p>
					<p><i className="fas fa-phone-alt"></i> Calling code(s): 
						{props.country.callingCodes.map((item, index, arr) => {
							return <span key={item}> {item}{(arr.length !== index+1) && ", "} </span>})
						|| "not available"}
					</p>
					<p><i className="fas fa-clock"></i> Time zone(s): 
						{props.country.timezones.map((item, index, arr) => {
							return <span key={item}> {item}{(arr.length !== index+1) && ", "} </span>})
						|| "not available"}
					</p>
					<p><i className="fas fa-map-marked-alt"></i> Borders(s): 
						{props.country.borders.map((item, index, arr) => {
							return <span key={item}> {item}{(arr.length !== index+1) && ", "} </span>})
						|| "not available"}
					</p>
					<p><i className="fas fa-map-marked-alt"></i> Currency(ies):  
						{props.country.currencies.map((item, index, arr) => {
							return <span key={`${item.name}${item.code}`}> {item.name}({item.code}){(arr.length !== index+1) && ", "} </span>})
						|| "not available"}
					</p>
					<p><i className="fas fa-language"></i> Language(s):  
						{props.country.languages.map((item, index, arr) => {
							return <span key={`${item.name}${item.nativeName}`}> {item.name}({item.nativeName}){(arr.length !== index+1) && ", "} </span>})
						|| "not available"}
					</p>
					<p><i className="fas fa-passport"></i> Regional Block(s): 
						{props.country.regionalBlocs.map((item, index, arr) => {
							return <span key={`${item.name}${item.acronym}`}> {item.name}({item.acronym}){(arr.length !== index+1) && ", "} </span>})
						|| "not available"}
					</p>						
				</div>
				<button type="button" id={`${props.country.name}MoreInfoBtn`} className="btn btn-outline-secondary" onClick={onItemClickHandler} >{!itemExpendedStatus ? "Show more" : "Show less"}</button>
			</div>
		</div>
	</div>
	)
}

export default CountryItem
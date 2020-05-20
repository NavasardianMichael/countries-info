import React, {useState} from 'react';
import './CountryItem.css';

function CountryItem(props) {

	const [itemExpendedStatus, setItemExpendedStatus] = useState(false);

	function onItemClickHandler(event) {
		setItemExpendedStatus(prevState => !prevState);
	}

	return (
	<div className="col-6 py-3 border country-item">
		<div className="row">
			<div className="col-4">
				<img src={props.country.flag} alt={props.country.name} />
			</div>
			<div className="col">
				<h4 className="mb-3">{props.country.name} ({props.country.nativeName})</h4>
				<p><i className="far fa-building"></i> Capital: {props.country.capital}</p>
				<p><i className="fas fa-globe-africa"></i> Area: {props.country.area} Km²</p>				
				<p><i className="fas fa-users"></i> Population: {props.country.population}</p>
				<p><i className="fab fa-internet-explorer"></i> Top Level Domain: {props.country.topLevelDomain}</p>
				<input type="checkbox" className="show-more-btn" checked={itemExpendedStatus} />
				<div className="more-info">
					<p><i className="fas fa-square-root-alt"></i> Gini coefficient: {props.country.gini || "not available"}</p>
				</div>
				<button type="button" id={`${props.country.name}MoreInfoBtn`} className="btn btn-outline-secondary" onClick={onItemClickHandler} >{!itemExpendedStatus ? "Show more" : "Show less"}</button>
			</div>
		</div>
	</div>
	)
}

export default CountryItem
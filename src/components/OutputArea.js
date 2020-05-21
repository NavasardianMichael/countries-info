import React from 'react';
import {useStore} from 'react-redux';
import {connect} from 'react-redux';
import CountryItem from './CountryItem';
import {showAllCountries} from '../redux/actions';

function OutputArea(props) {
	const store = useStore();

	function renderAllData() {
		store.dispatch(showAllCountries());
	};

	const allCountriesData = props.shownCountries.map(item => <CountryItem country={item} key={item.latlng} />)

	return (
		<div id="outputArea">
			<button type="button" className="btn btn-success px-4" onClick={renderAllData}>Load All Data</button>
			<hr />
			<div className="row">
				{allCountriesData}
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		shownCountries: state.data.shownCountries
	}
}

export default connect(mapStateToProps, null)(OutputArea)
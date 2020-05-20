import React from 'react';
import {useStore, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import CountryItem from './CountryItem';
import {fecthAllData} from '../redux/actions';

function OutputArea(props) {
	const store = useStore();

	function renderAllData() {
		store.dispatch(fecthAllData());
	};

	const allCountriesData = props.allData.map(item => <CountryItem country={item} key={item.latlng} />)

	return (
		<div id="output">
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
		allData: state.data.allData
	}
}

export default connect(mapStateToProps, null)(OutputArea)
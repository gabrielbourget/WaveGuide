import React from 'react';
import { connect } from 'react-redux';

import MapBox from './MapBox';

// - Import action creators here.... 
//   Will need, at least, setMapStyle(style)

const mapStateToProps = (state) => ({
	style: state.style,
	artists: state.artists // - Grab these from local file for now, database eventually.
});

cosnt mapDispatchToProps = (dispatch) -> (
	{
		setStyle: (style) => dispatch( actionCreators.setMapStyle(style) ),
		setInitialArtists: () => dispatch( actionCreators.fetchArtistMapInfo() )
	}
);

const MapBoxContainer = connect( mapStateToProps, mapDispatchToProps )(MapBox);

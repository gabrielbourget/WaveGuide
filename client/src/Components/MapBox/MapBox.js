import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dis/mapbox-gl.css';
import Immutable from 'immutable'; // - props comparison done with this from tutorial
																	 //   might refactor away from Immutable.js in the future.

class MabBox extends React.Component {

	static propTypes = {
		accessToken: PropTypes.string.isRequired,
		styleName: PropTypes.string.isRequired,
		lon: PropTypes.number.isRequired,
		lat: PropTypes.number.isRequired,
		zoomScale: PropTypes.number.isRequired
	}

	componentDidMount = () => {
		const { accessToken, styleName, lon, lat, zoomScale } = this.props; // - From direct props.
		const { setStyle, setInitialArtists } = this.props // - From mapped props for redux.

		mapboxgl.accessToken = accessToken

		// - Override with token for now, bring it in programmatically through props eventually.
		mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbGJvdXJnZXQiLCJhIjoiY2p0YXlqZDV4MGc1dTQ5bDh0dnpnaGdzeSJ9.5-wJl47Cf5wyNivPIsX6IA';

		this.map = new mapboxgl.Map({
			container: 'mapbox', // ID of DOM element to target in the render() function.
			style: `mapbox://styles/${styleName}`,
			center: [lon, lat], // - GeoJSON wants longitude before latitude.
			zoome: [zoomScale]
		});

		// - Send out async action over thunk middleware to grab artists.
		setInitialArtists();

		// - Add artists as source for map component.
		this.map.addSource('artists', {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: artists.map(artist => (
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [artist.longitude, artists.latitude]
					}
				))
			}
		});

		// - Create map layer for artists.
		this.map.addLayer({
			id: 'allArtists',
			type: 'circle'
			source: 'artists',
			layout: {
				visibility: 'visible' // - can toggle to 'none' if I want to create a toggle on/off for the layer.
			},
			paint: {
				'circle-radius': 4,
				'circle-color': '#8a559e', // - HARDCODED COLOR ALERT
			}
		});
		setStyle(this.map.getStyle()); // - Again, this is a mapped dispatch prop from redux container.
	};

	componentDidUpdate = (prevProps) => {
		const currentStyle = this.props.style;
		const prevStyle = prevProps.style;

		if (this.props.style === null) return;
		if (!Immutable.is(prevStyle, currentStyle)) this.map.setStyle(currentStyle); // - mapped dispatch prop.
	};

	render () {
		return (
			<div id='mapbox'/>
		);
	}
}

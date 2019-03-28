import React from 'react';
import ReactDOM from 'react-dom';
import ArtistGallery from './ArtistGallery';

import artists from '../../../Datasets/artists';

describe('ArtistGallery', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ArtistGallery artists={ artists }/>,div);
	});
});

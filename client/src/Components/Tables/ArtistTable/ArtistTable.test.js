import React from 'react';
import ReactDOM from 'react-dom';
import ArtistTable from './ArtistTable';

import artists from '../../../Datasets/artists';

describe('ArtistTable', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ArtistTable artists={ artists }/>,div);
	});
});


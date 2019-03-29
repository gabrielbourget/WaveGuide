import React from 'react';
import ReactDOM from 'react-dom';
import TwoSizeCardGallery from './TwoSizeCardGallery';

describe('TwoSizeCardGallery', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<TwoSizeCardGallery/>,div);
	});
});

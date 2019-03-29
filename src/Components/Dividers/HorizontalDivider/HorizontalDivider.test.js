import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalDivider from './HorizontalDivider';

describe('HorizontalDivider', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HorizontalDivider height='3px'/>,div);
	});
});

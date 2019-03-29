import React from 'react';
import ReactDOM from 'react-dom';
import VerticalDivider from './VerticalDivider';

describe('VerticalDivider', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<VerticalDivider width='10px'/>,div);
	});
});

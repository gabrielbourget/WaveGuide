import React from 'react';
import ReactDOM from 'react-dom';
import SelectionIndicator from './SelectionIndicator';

describe('SelectionIndicator', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SelectionIndicator shape='square'/>,div);
	});
});

import React from 'react';
import ReactDOM from 'react-dom';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Paragraph>test test test</Paragraph>,div);
	});
});

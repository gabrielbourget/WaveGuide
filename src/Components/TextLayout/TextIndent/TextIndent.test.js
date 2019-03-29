import React from 'react';
import ReactDOM from 'react-dom';
import TextIndent from './TextIndent';

describe('TextIndent', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<TextIndent>test</TextIndent>,div);
	});
});

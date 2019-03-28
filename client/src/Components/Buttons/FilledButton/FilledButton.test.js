import React from 'react';
import ReactDOM from 'react-dom';
import FilledButton from './FilledButton';

describe('FilledButton', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FilledButton
											text='Test Text'
											onClick={ () => {} }
										/>,div);
	});
});

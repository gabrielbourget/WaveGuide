import React from 'react';
import ReactDOM from 'react-dom';
import OutlineButton from './OutlineButton';

describe('OutlineButton', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<OutlineButton
											text='Test Text'
											onClick={ () => {} }
										/>,div);
	});
});

import React from 'react';
import ReactDOM from 'react-dom';
import SingleIcon from './SingleIcon';

import { ReactComponent as ChevronDownLightTheme } from '../../../Icons/ChevronDownSkinny/ChevronDownSkinnyLightTheme.svg';

describe('SingleIcon', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SingleIcon icon={ <ChevronDownLightTheme/> }/>,div);
	});
});

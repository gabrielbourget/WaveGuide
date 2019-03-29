import React from 'react';
import ReactDOM from 'react-dom';
import IconDisplay from './IconDisplay';

import { ReactComponent as ChevronDownDarkTheme } from '../../../Icons/ChevronDownSkinny/ChevronDownSkinnyDarkTheme.svg';
import { ReactComponent as ChevronDownLightTheme } from '../../../Icons/ChevronDownSkinny/ChevronDownSkinnyLightTheme.svg';

describe('IconDisplay', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<IconDisplay
											darkTheme={ <ChevronDownDarkTheme/> }
											lightTheme={ <ChevronDownLightTheme/> }
										/>,div);
	});
});

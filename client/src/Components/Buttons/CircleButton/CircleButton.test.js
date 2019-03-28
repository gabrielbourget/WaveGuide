import React from 'react';
import ReactDOM from 'react-dom';
import CircleButton from './CircleButton';

import { ReactComponent as ChevronDownDarkTheme } from '../../../Icons/ChevronDownSkinny/ChevronDownSkinnyDarkTheme.svg';
import { ReactComponent as ChevronDownLightTheme } from '../../../Icons/ChevronDownSkinny/ChevronDownSkinnyLightTheme.svg';
import { ReactComponent as ChevronDownHighlighted } from '../../../Icons/ChevronDownSKinny/ChevronDownSkinnyHighlighted.svg';

describe('CircleButton', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CircleButton
											darkTheme={ <ChevronDownDarkTheme/> }
											lightTheme={ <ChevronDownLightTheme/> }
											highlighted={ <ChevronDownHighlighted/> }
											size='30px'
											onClick={ () => {} }
										/>,div);
	});
});

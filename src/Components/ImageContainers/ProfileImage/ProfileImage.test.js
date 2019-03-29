import React from 'react';
import ReactDOM from 'react-dom';
import ProfileImage from './ProfileImage';

const imagePath = process.env.PUBLIC_URL + '/Images/Arael.png';

describe('ProfileImage', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ProfileImage
											title='Image Title'
											imagePath={ imagePath }
										/>,div);
	});
});

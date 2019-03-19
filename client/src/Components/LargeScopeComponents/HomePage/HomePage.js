import React from 'react';
//import PropTypes from 'prop-types';
//import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import Jumbotron from './Jumbotron/Jumbotron';

//import styles from './HomePage.module.scss';

class HomePage extends React.Component {
	render() {
		return (
			<FromTheTopCradle>
				<Jumbotron/>
			</FromTheTopCradle>
		);
	}
}

HomePage.contextType = ThemeContext;

export default HomePage;

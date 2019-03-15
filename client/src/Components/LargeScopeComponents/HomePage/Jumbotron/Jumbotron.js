import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './Jumbotron.module.scss';

class Jumbotron extends React.Component {
	render() {
		return (
			<div className={ styles.jumbotron }>
				
			</div>
		);
	}
}

Jumbotron.contextType = ThemeContext;

export default Jumbotron;


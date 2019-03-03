import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './VerticalDivider.module.scss';

class VerticalDivider extends React.Component {

	static propTypes = {
		width: PropTypes.string
	};

	static defaultProps = {
		width: '3px'
	};



	render() {
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const dividerClasses = (styles.verticalDivider, themeClass);

		const style = {
			width: this.props.string,
			height: '100%'
		};

		return(
			<div className={ dividerClasses } style={ style }></div>
		);
	}
}

VerticalDivider.contextType = ThemeContext;

export default VerticalDivider;

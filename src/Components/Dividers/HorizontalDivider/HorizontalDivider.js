import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './HorizontalDivider.module.scss';

class HorizontalDivider extends React.Component {

	static propTypes = {
		height: PropTypes.string
	};
	
	static defaultProps = {
		height: '3px'
	};

	render() {
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const dividerClasses = ClassNames(styles.horizontalDivider, themeClass);

		const style = {
			width: '100%',
			height: this.props.height,
			
		};

		return (
			<div className={ dividerClasses } style={ style }></div>
		);
	}
}

HorizontalDivider.contextType = ThemeContext;

export default HorizontalDivider;

import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './TwoSizeCard.module.scss';

class TwoSizeCard extends React.Component {

	parseExpansionDirection = (expansionDir) => {
		switch(expansionDir) {
			case 'horizontal': return styles.horizontal;
			case 'vertical': return styles.vertical;
			default: return styles.horizontal;
		}
	};

	assignClasses = () => {
		const themeClass = (this.context === 'dark' ? styles.darkTheme : styles.lightTheme);
		const expansionDirClass = parseExpansionDirection(this.props.expansionDir);
		const twoSizeCardClasses = ClassNames(styles.twoSizeCard, themeClass);

		return {
			twoSizeCardClasses
		};
	};

	render() {
	
		const classAssignments = this.assignClasses();

		return (
			<div className={ classAssignments.twoSizeCardClasses }>
			
			</div>
		);
	}
}

TwoSizeCard.contextType = ThemeContext;

export default TwoSizeCard;

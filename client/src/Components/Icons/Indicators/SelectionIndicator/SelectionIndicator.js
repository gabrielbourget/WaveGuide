import React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './SelectionIndicator.module.scss';

class SelectionIndicator extends React.Component {

	state = {
		selected: false
	};

	handleClick = () => {
		this.setState({
			selected: !(this.state.selected)
		});
	};

	// - Helper function to assign a geometry to the selection indicator.
	determineShapeClass = () => {
		switch (this.props.shape) {
			case 'square': return styles.square;
			case 'roundedSquare': return styles.roundedSquare;
			case 'round': return styles.round;
			default: return styles.roundedSquare;
		}
	};

	render() {
		
		// - Probe for important render-time information.
		const selectedClass = this.state.selected ? styles.selected : null;
		const shapeClass = this.determineShapeClass();
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		
		// - Put together class lists for pieces of the component.
		const borderClassNames = classNames(selectedClass, styles.border, shapeClass, themeClass);
		const insideClassNames = classNames(selectedClass, styles.inside , shapeClass, themeClass);

		return (
			<div className={ borderClassNames } onClick={ this.handleClick }>
				<div className={ insideClassNames }/>
			</div>
		);
	}
}

SelectionIndicator.contextType = ThemeContext;

export default SelectionIndicator;

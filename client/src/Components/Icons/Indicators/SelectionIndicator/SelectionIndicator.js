import React from 'react';
import classNames from 'classnames';
import ThemeContext from '../../../../ThemeContext';

import styles from './SelectionIndicator.module.scss';

class SelectionIndicator extends React.Component {

	// - Helper function to assign a geometry to the selection indicator.
	//   Assigns a shape class from the style module in accordance with 
	//   the shape provided in the component's props structure. If no 
	//   shape prop is provided, the indicator defaults to rounded square. 
	determineShapeClass = () => {
		switch (this.props.shape) {
			case 'square': return styles.square;
			case 'roundedSquare': return styles.roundedSquare;
			case 'round': return styles.round;
			default: return styles.roundedSquare;
		}
	};

	render() {

		const shapeClass = this.determineShapeClass();
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		const withOutside = (
			<div className="outside">
				<div className="border">
					<div className="inside">

					</div>
				</div>
			</div>
		);

		const noOutside = (
			<div className="border">
				<div className="inside">

				</div>
			</div>
		);

		return (
			<div className="outside">
				<div className="border">
					<div className="inside">
						
					</div>
				</div>
			</div>
		);
	}
}

SelectionIndicator.contextType = ThemeContext;

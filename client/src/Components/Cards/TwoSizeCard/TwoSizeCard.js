import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import ProfileImage from '../../ImageContainers/ProfileImage/ProfileImage';

import styles from './TwoSizeCard.module.scss';

/* Wrap SVG Icons as functional components to be placed into the markup. */
import { ReactComponent as CircleExpandIconDarkTheme } from './SVG/CircleExpandIcon/CircleExpandIcon_DarkTheme.svg';
import { ReactComponent as CircleExpandIconLighTheme } from './SVG/CircleExpandIcon/CircleExpandIcon_LightTheme.svg';
import { ReactComponent as CircleExpandIconHighlighted } from './SVG/CircleExpandIcon/CircleExpandIcon_Highlighted.svg';
import { ReactComponent as CircleDownIconDarkTheme } from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme.svg';
import { ReactComponent as CircleDownIconLightTheme } from './SVG/CircleDownIcon/CircleDownIcon_LightTheme.svg';
import { ReactComponent as CircleDownIconHighlighted } from './SVG/CircleDownIcon/CircleDownIcon_Highlighted.svg';
import { ReactComponent as CircleUpIconDarkTheme } from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme.svg';
import { ReactComponent as CircleUpIconLightTheme } from './SVG/CircleUpIcon/CircleUpIcon_LightTheme.svg';
import { ReactComponent as CircleUpIconHighlighted } from './SVG/CircleUpIcon/CircleUpIcon_Highlighted.svg';

/**
 * Built right now to fit into gallery that intends to have the cards expand vertically
 * as the scope of the use case. Planning to have the component be configurable between 
 * vertical and horizontal expansion.
 *
 * Might also make a separate version of this kind of card component which has more agency 
 * over its dimensions, rather than having a parent grid define them. 
 */
class TwoSizeCard extends React.Component {

	state = {
		expanded: false
	};

	parseExpansionDirection = (expansionDir) => {
		switch(expansionDir) {
			case 'horizontal': return styles.horizontal;
			case 'vertical': return styles.vertical;
			default: return styles.horizontal;
		}
	};

	assignClasses = () => {
		const themeClass = (this.context === 'dark' ? styles.darkTheme : styles.lightTheme);
		const expandedClass = (this.state.expanded) ? styles.takeTwoSpots : null;
		const expansionDirClass = this.parseExpansionDirection(this.props.expansionDir);
		const shapeClass = (this.props.shape) ? styles.rounded : null;
		
		const twoSizeCardClasses = ClassNames(styles.twoSizeCard, themeClass, shapeClass, expandedClass);
		const headerClasses = ClassNames(styles.header, themeClass, expansionDirClass, shapeClass);
		const bodyClasses = ClassNames(styles.body, themeClass, expansionDirClass);
		const cardTitleClasses = ClassNames(styles.cardTitle, themeClass);
		const linkListContainerClasses = ClassNames(styles.linkListContainer, themeClass);

		return {
			twoSizeCardClasses,
			headerClasses,
			bodyClasses,
			cardTitleClasses,
			linkListContainerClasses
		};
	};

	render() {
	
		const classAssignments = this.assignClasses();

		return (
			<div className={ classAssignments.twoSizeCardClasses }>
				<div className={ classAssignments.headerClasses }>
					<div className={ classAssignments.cardTitleClasses }>
						<h3>{ this.props.title }</h3>
					</div>
				</div>
				<div className={ classAssignments.bodyClasses }>
					<ProfileImage
						imagePath={ this.props.imagePath }
						title={ this.props.title }
					/>
					{
						this.state.expanded ?
						<div className="linkListContainer">
							{
								// this.props.socialURLs.map((URL) => {

								// })
							}
						</div> :
						null
					}
				</div>
			</div>
		);
	}
}

TwoSizeCard.contextType = ThemeContext;

export default TwoSizeCard;

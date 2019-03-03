import React from 'react';
import ClassNames from 'classnames';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import ProfileImage from '../../ImageContainers/ProfileImage/ProfileImage';
import CircleButton from '../../Buttons/CircleButton/CircleButton';

import styles from './TwoSizeCard.module.scss';

/* Wrap SVG Icons as functional components to be placed into the markup. */
import { ReactComponent as CircleExpandIconDarkTheme } from './SVG/CircleExpandIcon/CircleExpandIcon_DarkTheme.svg';
import { ReactComponent as CircleExpandIconLightTheme } from './SVG/CircleExpandIcon/CircleExpandIcon_LightTheme.svg';
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
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const expandedClass = (this.state.expanded) ? styles.takeTwoSpots : null;
		const expandedBodyClass = (this.state.expanded) ? styles.expanded : null;
		const expansionDirClass = this.parseExpansionDirection(this.props.expansionDir);
		const shapeClass = (this.props.shape) ? styles.rounded : null;
		
		const twoSizeCardClasses = ClassNames(styles.twoSizeCard, themeClass, shapeClass, expandedClass);
		const headerClasses = ClassNames(styles.header, themeClass, expansionDirClass, shapeClass);
		const bodyClasses = ClassNames(styles.body, themeClass, expansionDirClass, expandedBodyClass);
		const cardTitleClasses = ClassNames(styles.cardTitle, themeClass);
		const linkListContainerClasses = ClassNames(styles.linkListContainer, themeClass);
		const topCardButtonClasses = ClassNames(styles.topCardButtons, themeClass);
		const cardBottomClasses = ClassNames(styles.cardBottom, shapeClass, themeClass);

		return {
			twoSizeCardClasses,
			headerClasses,
			bodyClasses,
			cardTitleClasses,
			linkListContainerClasses,
			topCardButtonClasses,
			cardBottomClasses
		};
	};

	// - Trigger a card expansion.
	handleDownIconClick = () => {
		this.setState({ expanded: true });
	};

	// - Trigger a card retraction.
	handleUpIconClick = () => {
		this.setState({ expanded: false });
	};

	// - Trigger a modal toggle.
	handleExpandIconClick = () => {
		// - TODO -> Hook this up to a modal component eventually.
	};

	render() {
	
		const classAssignments = this.assignClasses();

		return (
			<div className={ classAssignments.twoSizeCardClasses }>
				<div className={ classAssignments.headerClasses }>
					<div className={ classAssignments.cardTitleClasses }>
						<h3>{ this.props.title }</h3>
					</div>
					<div className={ classAssignments.topCardButtonClasses }>
						{
							this.state.expanded ?
							<CircleButton 
								size='small'
								highlighted={ <CircleUpIconHighlighted/> }
								darkTheme={ <CircleUpIconDarkTheme/> }
								lightTheme={ <CircleUpIconLightTheme/> }
								onClick={ this.handleUpIconClick }
							/> :
							<CircleButton 
								size='small'
								highlighted={ <CircleDownIconHighlighted/> }
								darkTheme={ <CircleDownIconDarkTheme/> }
								lightTheme={ <CircleDownIconLightTheme/> }
								onClick={ this.handleDownIconClick }
							/>
						}
						<CircleButton
							size='small'
							highlighted={ <CircleExpandIconHighlighted/> }
							darkTheme={ <CircleExpandIconDarkTheme/> }
							lightTheme={ <CircleExpandIconLightTheme/> }
							onClick={ this.handleExpandIconClick }
						/>
					</div>
				</div>
				<div className={ classAssignments.bodyClasses }>
					<ProfileImage
						imagePath={ this.props.imagePath }
						title={ this.props.title }
					/>
					{
						this.state.expanded ?
						<div className={ classAssignments.cardBottomClasses }>
							<div className={ styles.title }>
								<h4>LINKS</h4>
							</div>
							<div className={ styles.linkListContainer }>

							</div>
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

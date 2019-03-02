import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import ProfileImage from '../../ImageContainers/ProfileImage/ProfileImage';

import styles from './TwoSizeCard.module.scss';


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
		const expansionDirClass = this.parseExpansionDirection(this.props.expansionDir);
		
		const twoSizeCardClasses = ClassNames(styles.twoSizeCard, themeClass);
		const headerClasses = ClassNames(styles.header, themeClass, expansionDirClass);
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
					<div className="imageContainer">
						<ProfileImage
							imagePath={ this.props.imagePath }
							shape='square'
						/>
					</div>
					{
						this.state.expanded ?
						<div className="linkListContainer">
							{
								this.props.socialURLs.map((URL) => {

								})
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

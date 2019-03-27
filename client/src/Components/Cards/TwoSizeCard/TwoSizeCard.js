import React from 'react';
import { ThemeContext } from '../../../ThemeContext';
import SocialMediaIconComponents from '../../../Helpers/socialMediaIconComponents';

import ProfileImage from '../../ImageContainers/ProfileImage/ProfileImage';
import CircleButton from '../../Buttons/CircleButton/CircleButton';
import HorizontalDivider from '../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from './TwoSizeCard.module.scss';
import { assignClasses, prepareLinkGallery } from './helpers';

/* Wrap SVG Icons as functional components to be placed into the markup. */
// import CircleExpandIconDarkTheme from './SVG/CircleExpandIcon/CircleExpandIcon_DarkTheme';
// import CircleExpandIconLightTheme from './SVG/CircleExpandIcon/CircleExpandIcon_LightTheme';
// import CircleExpandIconHighlighted from './SVG/CircleExpandIcon/CircleExpandIcon_Highlighted';
// - Circle Down Icon
import CircleDownIconDarkTheme from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme';
import CircleDownIconLightTheme from './SVG/CircleDownIcon/CircleDownIcon_LightTheme';
import CircleDownIconHighlighted from './SVG/CircleDownIcon/CircleDownIcon_Highlighted';
// - Circle Up Icon
import CircleUpIconDarkTheme from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme';
import CircleUpIconLightTheme from './SVG/CircleUpIcon/CircleUpIcon_LightTheme';
import CircleUpIconHighlighted from './SVG/CircleUpIcon/CircleUpIcon_Highlighted';

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

	// - TODO -> Write and then call a helper here to figure out which social media
	//   icons the card will need to render based on the links in the 
	//   artist profile.

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
	
		const classAssignments = assignClasses(this.context, this.state, this.props, styles);
		const artistSocialLinks = prepareLinkGallery(this.props, SocialMediaIconComponents);

		return (
			<div className={ classAssignments.twoSizeCardClasses }>
				<div className={ classAssignments.headerClasses }>
					<div className={ classAssignments.cardTitleClasses }>
						<h3>{ this.props.name }</h3>
					</div>
					<div className={ classAssignments.topCardButtonClasses }>
						{
							this.state.expanded ?
							<CircleButton 
								size='25px'
								highlighted={ <CircleUpIconHighlighted/> }
								darkTheme={ <CircleUpIconDarkTheme/> }
								lightTheme={ <CircleUpIconLightTheme/> }
								onClick={ this.handleUpIconClick }
							/> :
							<CircleButton 
								size='25px'
								highlighted={ <CircleDownIconHighlighted/> }
								darkTheme={ <CircleDownIconDarkTheme/> }
								lightTheme={ <CircleDownIconLightTheme/> }
								onClick={ this.handleDownIconClick }
							/>
						}
{/*						<CircleButton
							size='25px'
							highlighted={ <CircleExpandIconHighlighted/> }
							darkTheme={ <CircleExpandIconDarkTheme/> }
							lightTheme={ <CircleExpandIconLightTheme/> }
							onClick={ this.handleExpandIconClick }
						/>*/}
					</div>
				</div>
				<div className={ classAssignments.bodyClasses }>
					<ProfileImage
						imagePath={ this.props.imagePath }
						title={ this.props.name }
					/>
					{
						this.state.expanded ?
						<div className={ classAssignments.cardBottomClasses }>
							<div className={ styles.title }>
								<h3>LINKS</h3>
							</div>
							<div className={ styles.hDividerCradle }>
								<HorizontalDivider height='3px'/>
							</div>
							<div className={ styles.linkListContainer }>
  						{
								artistSocialLinks.map((LinkInfo,index) => (
									<a 
										key={ index }
										href={ LinkInfo.link } 
										target='_blank'
										rel='noopener noreferrer' 
									>											
										<CircleButton
											key={ index }
											size='50px'
											darkTheme={ LinkInfo.icons['darkTheme']() }
											highlighted={ LinkInfo.icons['highlighted']() }
											lightTheme={ LinkInfo.icons['lightTheme']() }
											onClick={ () => {} }
										/>
									</a>													
								))
							}
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

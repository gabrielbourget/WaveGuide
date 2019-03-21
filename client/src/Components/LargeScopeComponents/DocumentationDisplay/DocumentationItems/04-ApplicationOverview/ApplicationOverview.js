import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';

class ApplicationOverview extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.documentationItemClasses }>
					<h1>Application Overview</h1>

					<p>
						<TextIndent>Waveguide</TextIndent> was built in its current form to act as a directory for artists and other members of the 
						wave scene to easily access community information such as links to its various hubs, along with links to other artists' profiles
						on social networks and streaming platforms. 
					</p>

					<p>
						<TextIndent>In</TextIndent> the side menu, accessed with the menu button in the top left, you can toggle the application between a 
						dark and light theme depending on personal preference. If you open up the community links list as well, there are a bunch of links that 
						act as jump-off points to the major subreddits, discord servers, youtube channels, events pages, and label/collective websites that exist 
						in the community.
					</p>

					<p>
						<TextIndent>You</TextIndent> can access the artist search by selecting the search icon (magnifying glass) and then entering your search query in 
						the input that pops up. As a quick keyword to access everyone in the directory, you can simply search for 'everyone'. Once the results have
						returned, you can toggle between viewing them in a card gallery or table representation in the top right by clicking on the grid or list view buttons.
						You can also sort the artists that return from the search alphabetically or reverse alphabetically by opening up the sort menu options and selecting the 
						the corresponding button.
					</p>
				</div>
			</FromTheTopCradle>
		);
	}
}

ApplicationOverview.contextType = ThemeContext;

export default ApplicationOverview;

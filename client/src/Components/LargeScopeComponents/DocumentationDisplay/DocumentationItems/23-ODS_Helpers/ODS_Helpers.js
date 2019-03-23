import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class ODS_Helpers extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>The <code>Helpers</code> Directory</h1>

					<p>
						<TextIndent>This </TextIndent> section of the application is where I am storing logic and data structure utilities 
						that are accessed and used by other logic in the application. The first data structure stored in there right now is an enum 
						that helps logic in my reducers know the critieria by which to sort through the list of artists that returns from search results. 
						While I have so far only implemented sorting alphabetically and reverse alphabetically through artist names, I can envision 
						different sorting criteria that could be applied to datasets in the application. Having one place in the codebase where these 
						sort criteria are set should help to make my code more maintainable in the long run, and make implementing these other types of sorting 
						a lot easier. 
					</p>

					<p>
						<TextIndent>The</TextIndent> other major file in there, <code>socialMediaComponents.js</code>, is a helper file that grabs the social 
						media icons for the networks that the application supports, refactors them into functional components, organizes them into an object 
						by network and color variation, and then exports that object for use in the application. The two parts of the application that make use 
						of this utility structure at the moment are the TWoSizeCards and TableItems. Their helper files contain logic that looks through the 
						different social media links associated with that artist, and then prepare a list of corresponding icons to be rendered out as visual 
						icons that users can click to access their other online presences.
					</p>

					<p>
						<TextIndent>In</TextIndent> the future, if I choose to create support for other social networks and streaming services such as Google Play,
						Deezer, and Tidal, it will just be a matter of creating the icons for them, and adding them into that exported data structure. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/00bf3d83-f8eb-4dab-ba2d-1e6ffc40dc2c'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/bf059259-f7fa-4f97-8bb8-459eb3e2a805'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Helpers.contextType = ThemeContext;

export default ODS_Helpers;

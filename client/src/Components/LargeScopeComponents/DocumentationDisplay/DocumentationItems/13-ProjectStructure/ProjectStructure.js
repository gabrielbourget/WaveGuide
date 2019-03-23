import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class ProjectStructure extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Project Structure</h1>

					<p>
						<TextIndent>Having</TextIndent> decided to scope my portfolio project towards a focus on front end development 
						technologies and techniques, I have not yet completely implemented the API server and connected it to the Neo4J 
						database being developed in parallel to the front end. However, I have nested the entire client of the application 
						within the top level of the project's directory, creating the space for me to embed a server directory structure 
						when I turn towards implementing that side of the application. 
					</p>

					<p>
						<TextIndent>This</TextIndent> section of the documentation goes through some of the key parts of the application, explaining 
						how many of them work in some detail, and in the context of where they sit in the overall directory structure. Also, as I built 
						my component library during the development of the application, I noticed that I tended towards the same overall cohesive strategy 
						to organizing and co-locating the resources that it needed to function as independently as possible. As such, I have broken off a 
						sub-section where I talk about this set of strategies and how it was applied to building the components that make up the application. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/73627e59-49df-47a8-a0d7-22edd04a7c0c'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/18d1dc66-e33b-4823-bed3-ea4c8b60c553'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>
					
				</article>
			</FromTheTopCradle>
		);
	}
}

ProjectStructure.contextType = ThemeContext;

export default ProjectStructure;

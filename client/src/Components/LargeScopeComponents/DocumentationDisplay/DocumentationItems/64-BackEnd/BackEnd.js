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

class BackEnd extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Back End</h1>

					<p>
						<TextIndent>Scoped</TextIndent> as a portfolio project that is meant to provide a focus on front end technologies and 
						techniques, the back end of this application is still in various stages of planning and development. For now, the list 
						of artist profiles is stored as an array of Javascript objects, similar in structure to how I am planning on returning 
						them as JSON from asynchronous server requests once everything is built and hooked up.
					</p>

					<p>
						<TextIndent>At</TextIndent> a high level, I am planning on building my server on top of a NodeJS architecture, and using 
						the ExpressJS library in order to build the server and benefit from its added functionality and reduction of necessary 
						boilerplate. For the database, I have been building and maintaining a Neo4J graph database in parallel to the front end 
						development. Its data model and structure mirrors the topology that will be needed to achieve current application functionality 
						once the back end is set up, and as my abilities around that technology grow, I am comfortable that the database can scale. 
					</p>

					<p>
						<TextIndent>The</TextIndent> rest of this section of the documentation starts with a bit more detail on the Express server I am 
						in the process of building. Then, I go more into the database side, getting into graphs as a mathematical construct, how that 
						data model is implemented into a production scale database technology by Neo4J, and the data model that I am currently iterating out 
						to act as the seed for the way my database is structured. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/469a3266-ff6b-4879-948d-616af79f8e39'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/25687c4e-20d3-4694-8846-b4a9fdc9e79a'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

BackEnd.contextType = ThemeContext;

export default BackEnd;

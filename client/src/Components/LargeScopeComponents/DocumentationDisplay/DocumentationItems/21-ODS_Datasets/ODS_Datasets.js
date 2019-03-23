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

class ODS_Datasets extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>The <code>Datasets</code> Directory</h1>

					<p>
						<TextIndent>As </TextIndent> I have learnt to build React applications, moving through all manner of textbooks,
						online courses, and tutorial articles, one of the development principles that has generally come up is to get the 
						application up and running with some sort of local state before trying to have it depend on external API calls. In that 
						spirit, I have stored the array of objects that holds information on each artist in the application in this directory. They 
						are stored and and exported in <code>artists.js</code>, grabbed and pushed into state with an asynchronous Redux action on
						page load.
					</p>

					<p>
						<TextIndent>Given,</TextIndent> this is not going to be a very sustainable situation in the future, as I add more and more artists 
						into the directory, and I start to think about building the functionality for people to build their own accounts where they can add 
						in and modify the information that is used to fill in their user profiles in the UI. What I have made sure to do in the meantime, is to
						develop a database that holds all this same user information in parallel to the UI development. While the application is not connected 
						to the database through an API server, just yet, I have made an effort to put some of the pieces together that will be required when I do.
						I go into this more in the <Link to='/documentation/27d03266-f7a4-453f-8c4a-9f4f08584f09'>database</Link> section of the documentation, 
						where I talk about the <a href='https://neo4j.com/' target='_blank' rel='noopen noreferrer'>technology</a> used to build the database and 
						the schema outlining the template of its topology.
					</p>

					<p>
						<TextIndent>In</TextIndent> addition to the artists data structure, I've also stored a JSON and mirroring CSV file of some of the top cities 
						distributed throughout the world, and metadata such as the country they are in and their geographical coordinates on the planet. I have not yet 
						reached the level of skill with graph databases required to import it into the overall topology, but as I start to work towards displaying upcoming 
						events in the scene, and their locations, this is a datasource I will be looking to in order to help with that.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/43b4e475-94f9-4674-840e-0e955238b2aa'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/00bf3d83-f8eb-4dab-ba2d-1e6ffc40dc2c'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Datasets.contextType = ThemeContext;

export default ODS_Datasets;

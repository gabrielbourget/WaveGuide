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

class DataModel extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Data Model</h1>

					<p>
						<TextIndent>Having</TextIndent> moved through a learning push where I read up on graph databases, looked through some 
						videos and demonstrations of how they are used for real-world systems, and worked through some small-scale tutorials 
						that introduced the basic concepts of CYPHER (Neo4J's query language), it was time to strike out and start to build 
						my own graph database. My thought process was that I would model the section of the community that clustered around membership 
						in its main Facebook group, <a href="https://www.facebook.com/groups/wav.city/" target='_blank' rel='noopener noreferrer'> Wavecity</a>.
						I reasoned that this would keep the graph I generated relatively small, centering around one cluster, and that it would keep 
						my efforts scoped to a reasonable portion of the community so that I didn't set out to map every single person in the community and burn out. 
						Below is a representation of the data model I have come up with so far, outlining the major nodes and relationships that make up the database. 
					</p>

					<div class={ initObject.tempPlaceholderClasses }>
						[ data model, expressed as shitty illustrator JPG or graph viz if I get that up and running. ]
					</div>

					<h2>Future Modifications and Expansions</h2>

					<p>
						<TextIndent>The</TextIndent> main type of profile I am storing in the database right now is artists, since that was the focus of building 
						a community directory around them. However, I was careful to also associate these artists with the people that they alias to. Many in the community 
						have other artistic and professional skills in areas such as graphic and motion design, hardware design, audio engineering, sound design, legal 
						skills etc... and I wanted to build for an eventuality where these types of projects might be associated with them in the database as well. 
					</p>

					<p>
						<TextIndent>Another</TextIndent> type of entity that I'd like to store in the database eventually are event nodes, forming the persistence layer 
						needed to serve them into the application and layer them onto a map component to be viewed by people in the community. I have tried to build ahead
						for this by building Location-type nodes like cities and countries into the database. Once my skills with batch-importing datasets are up to speed, 
						I plan on importing datasets of different locations into the database to serve as the basis for storing subclusters such as events and where they're 
						to be located.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/86b92487-31ec-49e9-9818-7919430888ee'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/8e113667-df9d-44ff-aa7c-6e2f16a96b80'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

DataModel.contextType = ThemeContext;

export default DataModel;

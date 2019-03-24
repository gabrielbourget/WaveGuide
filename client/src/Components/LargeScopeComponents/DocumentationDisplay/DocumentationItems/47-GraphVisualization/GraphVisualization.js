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

class GraphVisualization extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Graph Visualization</h1>

					<p>
						<TextIndent>As</TextIndent> web applications have grown more complicated, and the data that backs them 
						has grown exponentially and become increasingly interconnected, many development teams have been turning to 
						graphs, as a data structure to build databases from, and to visualize this information in meaningful and communicable 
						ways. In this section, I will be going over how I implemented a graph visualization component, and the different contexts 
						in which I can envision myself using it to convey this complex type of information structure. I go more into graphs as 
						mathematical structures in the <Link to='/documentation/70e2dbc6-f34f-4004-936d-f7a708ff76a4'>Introduction to Graphs </Link> 
						section of the documentation. I discuss how this type of data structure is implemented and exposed as a database technology by 
						Neo4J in the <Link to='/documentation/399b8def-c5cc-4c6a-a9dd-309fe70c758b'>Neo4J Implementation</Link> section. 
					</p>

					<p>
						Paragraph that discusses how I built the component and the sources I drew from to help me along the way.
					</p>

					<div className={ initObject.tempPlaceholderClasses }>
						[ Graph viz of artists, the people they alias to, and their geographical clustering ]
					</div>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/6061a33a-2168-4571-8aa7-cf516e0ef601'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/fc2898d7-3deb-4816-b30e-1334e7f96ae6'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

GraphVisualization.contextType = ThemeContext;

export default GraphVisualization;

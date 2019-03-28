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

class Neo4JDifferentiation extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Neo4J Differentiation</h1>

					<p>
						<TextIndent>The</TextIndent> advantages to using a native graph database system over a traditional one are numerous and significant.
						However, before diving into the more technical aspects, these databases are nice to use because the models that underlie their structure 
						are much more intuitive and map more closely onto the way that we might classify and relate information around us in our daily lives. 
						Without the foreign keys and manipulations that need to be made to tables in relational databases to optimize for performance, the actual 
						structure of the database can be more closely based on the entities and relationships between them within your enterprise's model. This 
						allows you to have an easier time keeping everyone in the organization on the same page, and allows for easier participation from non-technical 
						team members such as those working on marketing and graphic design.
					</p>

					<h2>Performance</h2>

					<p>
						<TextIndent>In</TextIndent> the case of this application, where I am dealing with the highly intermeshed data of a social network of artists and fans, 
						connected together into a globally spanning community, I gain significant performance benefits when choosing a graph database over something like a 
						relational database or NOSQL store. For queries that seek results for information that becomes very deeply nested (e.g. <i>friends-of-friends-of-friends</i>), 
						the join-intensive nature required in a relational database results in rapidly deteriorating speed and efficiency as the queries become more nested. In contrast,
						due to factors such as index-free adjacency, these types of queries remain pretty constant in performance and efficiency as a graph database scales up in size. In 
						general, the performance of a graph database query will be more closely tied to the distance within its topology that needs to be traversed in order to return the 
						results seeked by a query. 
					</p>

					<h2>Flexibility</h2>

					<p>
						<TextIndent>When</TextIndent> working with relational databases, the need to define a pretty strict schema for how your data is laid out and related to eachother can 
						make significant changes to the database structure laborious and prone to frustrating errors. The problem with this approach is that it is very unlikely that you and 
						your team will accurately model the entire domain space within which you want to operate completely or perfectly on the first go around. What you ideally want is a 
						way of building out an understanding of this space organically over time, as you gain the team members, resources, and take the time needed to fully understand it.
					</p>

					<p>
						<TextIndent>By</TextIndent> their very nature, graphs meet this additive requirement. Databases built using this technology can have a data model of the type of nodes and 
						relationships that make it up which reflects your team's current knowledge. As this grows over time, it is easy to add new kinds of nodes and relationships to them, allowing 
						the structure to change over time along with your team's understanding of the space in which they work.
					</p>

					<p>
						<TextIndent>The</TextIndent> flexibility of this approach also maps very nicely onto the agile development processes of modern software teams. Software today is for the most part 
						being developed in small functional sprints, merged into the rest of the codebase, and shipped to production. Being able to add to and modify the underlying persistence 
						layer of your application so quickly fits very well into this type of strategy.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/399b8def-c5cc-4c6a-a9dd-309fe70c758b'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/485dc30c-1e72-412e-9fc0-cf065a808c09'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
					
				</article>
			</FromTheTopCradle>
		);
	}
}

Neo4JDifferentiation.contextType = ThemeContext;

export default Neo4JDifferentiation;

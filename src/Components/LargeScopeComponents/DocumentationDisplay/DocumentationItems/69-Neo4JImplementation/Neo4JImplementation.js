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

class Neo4JImplementation extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>The Neo4J Database</h1>

					<p>
						<TextIndent>Armed</TextIndent> with a basic understanding of what a graph <Link to='/documentation/70e2dbc6-f34f-4004-936d-f7a708ff76a4'>is</Link>, one 
						can start to consider what a graph <i>database</i> might look like. This type of system exposes Create, Read, Update, and Delete (CRUD) operations through a query language 
						(the one built by Neo4J is called CYPHER), which allows users of the technology to build and maintain fully functioning databases connected together as nodes and relationships. 
						When comparing different graph database technologies two of the major factors to keep in mind are the underlying storage mechanism used, and the processing engine 
						that runs everything. 
					</p>

					<h2>Storage Mechanism</h2>

					<p>
						<TextIndent>In</TextIndent> graph databases that one might describe as being <i>native</i>, the nodes and relationships that make up the database are stored 
						in a memory structure that is structured as an actual graph, where nodes and relationships have their own memory addresses, and directionality of relationships 
						is achieved by storing the memory address of the node being pointed to within a relationship. Other graph database systems that are <i>non-native</i> might 
						store graph data in other types of structures such as relational databases, object-oriented databases, or other general-purpose data stores. In the case of Neo4J, 
						it can be described as a native system, storing the underlying data of a database built with it as a graph. 
					</p>

					<h2>Processing Engine</h2>

					<p>
						<TextIndent>The</TextIndent> processing engine is at the heart of graph databases systems, responsible for implementing the CRUD API and achieving other standard 
						fare of production-ready databases such as ACID-compliance and Transactions. The main differentiation point here will be whether or not the graph database system 
						achieves <i>index-free adjacency</i> in its operations. A system that achieves this stores nodes and relationships with memory addresses within the system. Because 
						each relationship points to the direct memory address of other nodes with which it has the relationship, it is extremely efficient to make traversals across the 
						data structure. Whereas other database technologies might have to run through JOIN tables to match up what they are looking for with a corresponding ID, graph 
						database systems can simply point to that specific index and return from their search operations very quickly. This ability for nodes to be so conceptually close 
						to eachother within the memory structure of a graph database is what gives this feature the name index-free adjacency. Since Neo4J implements the database as an 
						underlying graph structure, it can be said to be employing <i>native graph processing</i> in its operations. Other graph database systems which do not do this may 
						still behave like a graph database system at the surface, but will not be able to reach the same level of efficiency and speed in their operations. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/70e2dbc6-f34f-4004-936d-f7a708ff76a4'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/86b92487-31ec-49e9-9818-7919430888ee'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

Neo4JImplementation.contextType = ThemeContext;

export default Neo4JImplementation;

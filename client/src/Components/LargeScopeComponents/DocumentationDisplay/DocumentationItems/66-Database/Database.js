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

class Database extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Database</h1>

					<p>
						<TextIndent>Recognizing</TextIndent> from the starting days of designing this community directory, I knew that I wanted it to 
						be able to scale as it grew, and that persisting the information that is involved with the application would be important. Doing 
						some research into different types of database systems I came across 
						<a href='https://en.wikipedia.org/wiki/Graph_database' target='_blank' rel='noopener noreferrer'> graph databases</a>, 
						which offer an alternative data structure upon which large-scale databases can be implemented. 
					</p>

					<p>
						I discuss graphs as an abstract mathematical structure and how they are great candidates with which to build more intuitive and maintainable databases
						<Link to='/documentation/70e2dbc6-f34f-4004-936d-f7a708ff76a4'> here</Link>. I then take a look at how Neo4J implements a fully 
						functioning database technology on top of such a graph structure in
						<Link to='/documentation/399b8def-c5cc-4c6a-a9dd-309fe70c758b'> this section</Link>. Finally, I go into a discussion of how Neo4J 
						differentiates itself from other database technologies <Link to='/documentation/86b92487-31ec-49e9-9818-7919430888ee'>here</Link>.
						Suffice for now to say that I have made an effort to build the database in parallel to the front end, ensuring that the data needed to 
						feed into the user interface is structured and available within its nodes and relationships. 
					</p>

					<p>
						<TextIndent>As</TextIndent> an effort to credit the work put into it, I wanted to mention here as well that many of the concepts and points that I 
						bring up as I introduce graphs and the databases built on top of them are pulled from this 
						<a href="https://shop.oreilly.com/product/0636920028246.do"> free textbook</a> written by Neo4J and published by O'Reilly. If you are interested 
						in learning more about these types of data structures and how they are built up into such complex technological infrastructure, this book is a 
						great resource to get started with.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/25687c4e-20d3-4694-8846-b4a9fdc9e79a'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/70e2dbc6-f34f-4004-936d-f7a708ff76a4'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

Database.contextType = ThemeContext;

export default Database;

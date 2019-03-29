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
import simpleGraph from './SimpleGraph.jpg';

class IntroToGraphs extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
				
					<h1>Introduction To Graphs</h1>

					<p>
						<TextIndent>While</TextIndent> the types of algorithms and concepts involved with manipulating and traversing graphs get pretty complicated,
						the overall idea of what a graph <i>is</i> is really not so bad. Mathematically speaking, a graph is defined as a set collection of <i>vertices </i>
						and <i>edges</i>. In terminology that is more approachable, we might say that a graph is a collection of <i>nodes</i> and the <i>relationships </i>
						that thread them to eachother. From a data structures standpoint, this means that common ones like linked lists and trees are simply just specialized 
						types of graphs. 
					</p>

					<p>
						<TextIndent>In</TextIndent> a context that's closer to the type of application I'm building here, you could use a graph structure to model the people 
						in a social network, along with some of the relationships between them such as those who are friends, married, part of eachother's families etc... A 
						graph such as this might look like the one below. 
					</p>

					<div> {/*initObject.reduxFlowDemoCradleClasses*/}
						<img src={ simpleGraph } alt="Simple Labled Property Graph"/>
					</div>

					<h2>The Labeled Property Graph Model</h2>

					<p>
						<TextIndent>A</TextIndent> high level understanding of graphs as a data structure is useful for getting a feel for them. However, in order to move towards 
						using graphs as a basis for building databases, one must start thinking about the kinds of information that can be associated with nodes and relationships.
						The <strong>Labeled Property Graph</strong> is one such model which includes the following characteristics:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									Nodes and relationships between them, as a basis for forming a graph structure.
								</p>
							</li>
							<li>
								<p>
									Properties associated with nodes (stored as objects of key-value pairs). These help one to describe the types of information that might 
									be useful to store along with nodes in the system.
								</p>
							</li>
							<li>
								<p>
									Labels that can be associated with nodes to describe their type. Multiple labels can be applied to a node at once (e.g. A node being labelled as 
									a type of Person, could also be labelled as being of type Engineer to describe their occupation).
								</p>
							</li>
							<li>
								<p>
									Relationships are always to be named and have a definite direction, with a start node they originate from and an end node where they point to.
								</p>
							</li>
							<li>
								<p>
									Relationships can also hold key-value properties, allowing you to store factors such as a weight to a relationship (e.g. a relationship denoting 
									that someone likes a certain band's music could also contain a weight from 1-10 describing just how much that person likes their music).
								</p>
							</li>
						</ul>
					</p>

					<p>
						This data model encapsulates the basis upon which most graph database systems are built. I go more into Neo4J's specific implementation of this type of 
						technology in the next section of the documentation.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/27d03266-f7a4-453f-8c4a-9f4f08584f09'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/399b8def-c5cc-4c6a-a9dd-309fe70c758b'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

IntroToGraphs.contextType = ThemeContext;

export default IntroToGraphs;

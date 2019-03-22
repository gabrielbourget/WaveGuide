import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';
import { Link } from 'react-router-dom';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';

class TechStack extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Tech Stack</h1>

					<p>
						<TextIndent>The</TextIndent> wide variety of languages, frameworks, and design patterns that are available to choose from 
						in web design these days is both a blessing and a curse. With so many directions to go with, it can be hard to know where 
						to start and which family of technologies and philosophies to invest your time in. In the end, some of the criteria that I 
						used to evaluate the choices available to me and what direction to go in eventually were:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>Building user interface code that could be easily extracted and used in a modular way on future projects of mine.</p>
							</li>
							<li>
								<p>
									Managing state in a way that could extend from the state tree of a small project like this to the scale of one that is 
									much larger, acting as a basis for complex and interconnected processes in the user interface.
								</p>
							</li>
							<li>
								<p>
									Building a data model which worked for the context of my portfolio application, but which could be easily extended and 
									modified as the time and capacity to improve the application opened up. 
								</p>
							</li>
						</ul>
					</p>

					<p>
						In the end, I chose to build my front end using Facebook's 
						<a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer'> React </a> library, to manage my state 
						using the <a href="https://redux.js.org/" target='_blank' rel='noopener noreferrer'> Redux  </a> implementation of the 
						flux design pattern, <a href="https://expressjs.com/" target='_blank' rel='noopener noreferrer'> Express </a> as the 
						foundation for an eventual API server, and  <a href="https://neo4j.com/" target='_blank' rel='noopener noreferrer'> Neo4J </a>
						as the foundation for a flexible database that can grow with my requirements. 
					</p>

					<h2>React</h2>

					<p>
						<TextIndent>With</TextIndent> its modular, component-based approach to UI construction, its performant diffing algorithms over a 
						Javascript-based VirtualDOM, the great library support it has from its creator and the wider open source community, and the 
						exciting new features being shipped out with every release, React was a clear choice for me as I set out to build the front end 
						of my application. You can read more about the API features I used and the way that I structured the front end of the application 
						in the <Link to='/documentation/b7b2a049-cdcb-493f-aa24-29b2bed9ccf8'>Front End</Link> section of the documentation.
					</p>

					<h2>Redux</h2>

					<p>
						<TextIndent>Developing</TextIndent> modern user interfaces means building families of components working together to provide consistent
						and dynamic UX to a wide variety of devices with all sorts of shapes and interaction mechanisms. I was attracted to the idea of flowing all 
						of the different actions that could occur within my application through the same pipeline, and the consistent, decent-to-debug experience 
						that this could provide. It is due to this and many other reasons that I decided to go with Redux for my state management. You can read more 
						about how I implemented this design pattern and other associated topics in the  
						<Link to='/documentation/9cb887d0-a6d6-4a68-985b-0d0fb4a6836b'> State Management</Link> section of the documentation.
					</p>

					<div className={ initObject.spanQuoteClasses }>
						<p>						
							While I have thought out some of the ways that these parts of my application stack would be integrated with the front end in the future, I have worked 
							to create a codebase that can be refactored relatively simply towards working with a back end eventually, and have developed both the server and database 
							to a certain point, the focus of my job applications and educational push have been mostly on front-end technologies. As my abilities grow, and as time permits, I am 
							looking forward to stitching in a NodeJS API server, creating a set of connection points to a remote Neo4J database in order to make the application more 
							scalable and dynamic.
						</p>
					</div>

					<h2>Express</h2>

					<p>
						<TextIndent>As</TextIndent> the world of Javascript has steadily expanded from its humble beginnings, I was excited when I saw it make the jump to 
						environments other than the browser. As a self-contained JS runtime that could work in offline environments, NodeJS offered a foundation upon which 
						one could use the same technologies used to build user interfaces on the web, but in other contexts. I have made use of NodeJS technologies before 
						on a coop project, running an application's UI through Electron, and really enjoyed the experience. Looking towards what kind of server setup I might 
						want to use as my application scales, it was an easy choice to go with Express, built on top of this same foundation. I am a fan of Node's non-blocking, 
						single-threaded asynchronous event loop, and from the projects and tutorials I have completed using Express servers, I have enjoyed its ease of use and 
						diverse features so far. You can read more about how I am planning to integrate Express into my application in the 
						<Link to='/documentation/994199e8-5e34-4e9a-8ad7-ba84d1faa851'> Back End</Link> section of the documentation.
					</p>

					<h2>Neo4J</h2>

					<p>
						<TextIndent>Relational</TextIndent> databases built on various SQL-type technologies have served as a solid foundation for many very large and successful 
						applications over the time of their existence. However, for the kind of complex, highly interconnected data that I am looking to work with as this 
						application grows, I was searching for something that could better suit my needs. Due to its efficient memory map, ease of asking the database for deeply 
						interconnected information, and extremely impressive performance, I chose to go with a graph database implemented by Neo4J for my persistence layer. 
						You can learn more about graphs, how Neo4J implements a database system on top of that kind of data structure, the signficant differentiation to SQL and NoSQL
						databases, the overall data model I am working with in the <Link to='/documentation/27d03266-f7a4-453f-8c4a-9f4f08584f09'> Database</Link> section of the 
						documentation.
					</p>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/40edbc86-218c-47c9-b395-7a87c98a1fbe'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/0d209cbd-5b73-4e52-901e-1d012299acfd'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

TechStack.contextType = ThemeContext;

export default TechStack;

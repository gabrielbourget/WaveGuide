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

class Routing extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Routing</h1>

					<p>
						<TextIndent>The</TextIndent> first experiences I had with routing between parts of an application were based in the traditional styles of the early web. 
						Clicking on a link would cause a server to figure out which HTML document templated its content, and return to the client browser with associated styles 
						and javascript to be rendered there in the browser. On a coop project, I was also introduced to routing within .NET Core technologies, where different views 
						could be rendered to the page within an MVC framework. 
					</p>

					<p>
						<TextIndent>Switching</TextIndent> over to the routing strategies of React Router was really nice for this application. I was excited to set up an SPA-style 
						situation where the React application could adjust the components it rendered on the screen based on changes that occur in the browser's location, changing 
						just what was needed instead of going through all the work to render out entire new pages. 
					</p>

					<p>
						<TextIndent>Building</TextIndent> within this declarative paradigm of routing has been a rewarding experience, and in this section of the documentation, I go 
						over the contexts in which I made use of this library, laying out explicit links and routes in the top level of the application to switch out its major pieces, 
						and using dynamic routing within the documentation section to switch between its articles.
					</p>

					<h2>Top-Level Application Routing</h2>

					<p>
						<TextIndent>The</TextIndent> three major sections that I set up for the application so far are the home page, the artist display where I put out a gallery of cards 
						or a table that hold information on the artists returned in search queries, and the documentation section. At the top level of the application, I used React Router's 
						<code> Link</code> component to specify the URL structure needed when a user clicks through to these sections. I then used components such as <code>Switch</code>, 
						<code> Router</code>, and <code>Router</code> to create the ability to respond to the URL changing around, and to render out the appropriate component. 
					</p>

					<h2>Dynamic Routing</h2>

					<p>
						<TextIndent>When</TextIndent> it came to the documentation section, the overall structure of what I wanted was a <code>TreeView</code> on the left, displaying all of 
						the articles making up the documentation, and the way they were structured together. I wanted users to be able to click on each of these items and then have the 
						corresponding article render on the right. Given the number of articles that I wrote, I figured that it would be unwieldly and inefficient to write out individual 
						<code> Route</code> components for each. 
					</p>

					<p>
						<TextIndent>What</TextIndent> I opted for instead was to generate and assign UUIDs to each article in the documentation. Then, I added one instance of a <code>Route </code>
						component which analyzed the id at the end of the window URL, and ran down a routing table to match it with the appropriate article to render out. I am not sure that 
						this would be an appropriate solution in the long term, but the main goal as a portfolio project was to get it working in some way. If I were to build this documentation 
						architecture out to any bigger scale, I'd probably want to start thinking about building some sort of content management system layer where I could template out articles through 
						it, and keep track of how they're all connected to eachother.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/8e113667-df9d-44ff-aa7c-6e2f16a96b80'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/2ddc812b-2390-4664-a2f0-d214dfe7b8ea'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

Routing.contextType = ThemeContext;

export default Routing;

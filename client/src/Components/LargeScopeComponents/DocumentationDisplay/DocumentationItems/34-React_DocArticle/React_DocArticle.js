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


class React_DocArticle extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Choosing React For My Front End</h1>

					<p>
						<TextIndent>The</TextIndent> 2010s have been a time of great growth and churn, as factors such as performance requirements coming from an 
						uptick in consumption of applications in a mobile context and the growing complexity of web applications has brought about the development of 
						UI frameworks such as Anguar, React, and Vue. Having learnt web development in a context of MVC design patterns and .NET/Java-based technologies 
						in school, I felt that as I examined the terrain of modern web development, I should invest the time in learning how to use some of these major technologies 
						before jumping in and applying for job positions. 
					</p>

					<p>
						<TextIndent>Not</TextIndent> having any deep knowledge of these three major frameworks, I set out to do some research, and tried to keep an open mind 
						as I did. Reading through industry reports, Medium posts, and different textbooks, watching all manner of Youtube videos and conference/meetup talks, 
						and working through different tutorials, I tried to get a general idea of what a development experience would be like with them. In the end, I decided 
						to go with React for a number of reasons, including that: 
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									Much of the industry usage, open source community support, technologies being asked for in job descriptions, and overall energy seems to be 
									picking up steam behind React, versus Angular and Vue.
								</p>
							</li>
							<li>
								<p>
									I find the documentation built and maintained for React to be excellent, explaining its many complex and interrelated concepts in digestible portions 
									that can be read to build a foundation upon which someone can learn to use it. 
								</p>
							</li>
							<li>
								<p>
									I really enjoy the JSX syntax that Facebook has developed. The experience felt very close to writing HTML like before, but now I had the ability 
									to embed Javascript logic right in the markup that templated my components. 
								</p>
							</li>
							<li>
								<p>
									I am very impressed with the implementation of a Virtual DOM within React, and the performance that is possible due to its presence. 
								</p>
							</li>
							<li>
								<p>
									The support that Facebook provides as it moves from version to version of the framework seems considerate and helpful. The inclusion of 
									items such as build-time warnings about feature changes to prepare for, along with the codemods they provide to switch codebases over to 
									those new features are encouraging to me, as I look to maintaining and growing this application over time. 
								</p>
							</li>
						</ul>
					</p>

					<p>
						<TextIndent>Coming</TextIndent> out the other side of really digging and using React for the first time on a project of my own, I am very happy with my 
						choice of frameworks. Time permitting, I think it'd be fun to try out Vue and Angular at some point, but for now, I am looking forward to improving on 
						the scale, capabilities, resilience, and modularity of my codebase within a React context.
					</p>

					<h2>React API Feature Usage</h2>

					<p>
						As I have built out this application, I have had a chance to use many of the React frameworks major features, APIs, and design patterns.
						These include:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									The Context API in order to help in the implementation of a dark and light theme for the application.
								</p>
							</li>
							<li>
								<p>
									PropTypes to clearly define the types of information that a component is looking for from the outside world in order to properly 
									render and behave. I think that this library feature will really shine as I share my components with other developers, allowing 
									them to get a better idea about how to use them in their own projects or in collective collaborations.
								</p>
							</li>
							<li>
								<p>
									Higher-order components, as I enhanced the functionality of existing components to do things such as mapping state and props from the redux 
									store to the top-level App component, and providing information needed for routing tasks to different components. 
								</p>
							</li>
							<li>
								<p>
									Controlled components, where you divert around the typical internal state management of stateful HTML components such as <code> form</code>
									in order manage it yourself.
								</p>
							</li>
							<li>
								<p>
									Conditional rendering, where I can use conditional Javascript logic within JSX templates to decide what sections of a component are to be 
									rendered (e.g. opening or closing the social media links portion of a profile card based on the card's internal state).
								</p>
							</li>
						</ul>
					</p>

					<p>
						There are numerous features of the React API that I have read about/tried in smaller contexts, but have not yet had a chance to 
						bring into my application. These include: 
						<ul style={ {paddingLeft:'20px'} }>
							<li>
								<p>
									The React Hooks API. I am intrigued by the way that this allows developers to move away from class based components, and how organizing your lifecycle 
									logic around the API's philosophy can keep it modular and untangled. Time permitting, I'd like to refactor some of my components to this API, and 
									see if it's something I'd like to apply acrose the entire codebase. 
								</p>
							</li>
							<li>
								<p>
									The React Refs API. Seeing as this application is mostly presentational, there hasn't been much of a context to use this API where it shines (typically 
									tracking DOM elements within form components). However, as I consider creating support for application users to create their own profiles, the use 
									cases where they are entering information will surely increase. It is in this context that I plan on making use of this portion of the React library.
								</p>
							</li>
						</ul>
					</p>

					<p>
						<TextIndent>One</TextIndent> of the things that I most enjoy about writing UIs with React is that it minimizes the amount of HTML that I have to look at 
						at once. By encapsulating markup templates into components that are then composed and declared within bigger ones, I can ensure that the markup that I 
						might look through in a component's render function is concise and clearly communicates how it is composed and structured. Before I used React, composing 
						sections of a user interface or website meant copy pasting large sections of HTML into other even larger HTML documents, which was hard to read through/maintain, 
						and much more error prone than the approach taken in React.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/b7b2a049-cdcb-493f-aa24-29b2bed9ccf8'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/8f90509c-c5f9-471c-b068-e616a9679e86'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

React_DocArticle.contextType = ThemeContext;

export default React_DocArticle;

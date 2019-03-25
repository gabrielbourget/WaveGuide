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

class CDS_MainComponentFile extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Main Component File</h1>

					<p>
						<TextIndent>Throughout</TextIndent> the learning process I committed myself to, rather than getting the impression that there was any 
						<i> right</i> way to build and order the main javascript file of a React component, I came to understand the process as a series of 
						nuanced tradeoffs. The different syntax and API styles available were initially hard to navigate, but as I became more familiar 
						with the different options through study and practice, I opted for a combination that felt consistent and efficient to me. 
					</p>

					<p>
						<TextIndent>From</TextIndent> a syntax point of view, I opted to fully embrace the relatively new ES6 Javascript syntax to build my 
						React components. As I navigated my way around the binding issues that one can experience with the <code> this </code> keyword in a 
						component, I found that declaring my member functions using an arrow syntax felt less verbose and cumbersome than manually binding them 
						in a class constructor. I also decided to make use of the <code> static </code> keyword, bringing code blocks such as PropTypes and default 
						props objects into the class definition rather than sitting outside of it at the bottom of the file. 
					</p>

					<p>
						<TextIndent>What</TextIndent> follows below is a further exploration into some of the design styles and code organization that I went with 
						in the order in which they tend to appear in my Javascript files, along with some explanation as to why I made those choices. 						
					</p>

					<h2>Imports</h2>

					<p>
						<TextIndent>As</TextIndent> the components I was writing grew in size and complexity, so did the list of resources that I was importing in order 
						to achieve the functionality and appearance that I was looking for. The way that I decided to order my imports was from an outside &rarr; in 
						strategy, where I bring in, from top to bottom: 
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									Resources from node modules installed at the program root. 
								</p>
							</li>
							<li>
								<p>
									Resources that are external to the component library but created and held internally within the program structure. 
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<p>
												Examples might include a reference to the ThemeContext object I use to provide theme context to components, or helper resources 
												such as an exported object of available social media icon components, or data resources such as the list of artists acting as my 
												data persistence layer at the moment.												
											</p>
										</li>
									</ul>
								</p>
							</li>
							<li>
								<p>
									Other components held within the component library of the project.
								</p>
							</li>
							<li>
								<p>
									Resources that are internal to the component's directory structure, such as stylesheets, SVG icons, images, helper logic, etc...
								</p>
							</li>
						</ul>
					</p>

					<h2>Class vs. Functional Components</h2>

					<p>
						<TextIndent>As</TextIndent> I learned my way around React, and the different ways that you could create components, I had the chance to learn about 
						functional components learning through study and example how they differ in function, performance, and implementation from class components. As 
						a first major React project, I chose to go mainly with class-based components since:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									The syntax was the most familiar to me from my learning experiences so far. 
								</p>
							</li>
							<li>
								<p>
									I preferred the way that you subscribed class components to React's Context API over the way you need to do it with functional components.
								</p>
							</li>
							<li>
								<p>
									The application I've built is still at a relatively small size, and it would be a little while longer before I'd be seriously thinking about the
									performance improvements I could get from whittling down more and more components into functional ones. 
								</p>
							</li>
						</ul>
					</p>

					<p>
						<TextIndent>That</TextIndent> said, over the course of this portfolio project, I still had the chance to write some functional components, such as 
						the SVG icons that I have converted over into components, able to be included in JSX code like any other component, or as anonymous functional components 
						being rendered in real time by a <code> Route</code> component in <code> App.js </code>.
					</p>

					<h2>State, PropTypes, and Custom Logic</h2>

					<p>
						<TextIndent>Next</TextIndent>, although I have implemented a Redux strategy for state management, there are some components where I have decided to keep 
						some local state (e.g. for toggling UI states such as opening and closing a menu or a card). In cases where I choose to do this, I would declare my state 
						object at the top of the class definition of the component. I go more into this selective use of local component state in 
						<Link to='/documentation/b9f85483-d91c-44b7-9723-f9a96632ac65'> this section</Link> of the documentation.
					</p>

					<p>
						<TextIndent>Following</TextIndent> this, I like to lay out any PropTypes and default propType fallbacks below any state declaration. This allows me to set 
						clear expectations of what kinds of external information the component I'm building will expect from the outside world if it is to function correctly. 
						While you can not guarantee that other users of your components will remember to provide this information, including PropType declarations will at least 
						throw a warning in their development consoles in order to remind them.
					</p>

					<p>
						<TextIndent>After</TextIndent> PropTypes management, I like to then fill the next part of the component up with any custom logic that I might write in order 
						to fulfill its requirements. These might, for example, include functions such as event handlers which run through some logic and call event handler functions 
						passed down from higher up in the DOM tree as props. Another common piece of logic I have written for different components is a function which looks at different 
						things such as context, state, and props, to determine what variation of sub-components to return to the render function at the bottom of the component. This function 
						is typically called within render function's <code> return</code> statement.
					</p>

					<h2>Peripheral Lifecycle Methods</h2>

					<p>
						<TextIndent>Working</TextIndent> down the component, I like to then include any other lifecycle methods beyond <code> render()</code> that I might be using 
						in the component. One example is in my top-level <code> App </code> component, where in the <code> componentWillMount() </code> function, I dispatch a 
						theme switching action to render in dark or light theme depending on the client's time of day, followed by an async dispatch to gather the list of artists 
						persisting the state of my application.
					</p>

					<h2>Context, Higher-Order Component Wrapping, and Exports</h2>

					<p>
						<TextIndent>Following </TextIndent> the <code>render()</code> method and the closing of the component class block, I then specify that the component is drawing 
						from the ThemeContext object imported up above, part of the Context API usage that manages my color theme switching. Then, if I need to wrap the component in a 
						higher-order component to enhance functionality (e.g. withRouter() to provide access to <code> history </code>, <code> match </code>, and <code> location </code>), 
						I'll do so there. Finally, I'll export the component as a default export, ready to be imported by other files as a process of component composition.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/45631f67-11da-4a24-986a-7ba6dfb4a157'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/b535e44c-5ce5-4e18-9792-5067b7186c71'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

CDS_MainComponentFile.contextType = ThemeContext;

export default CDS_MainComponentFile;

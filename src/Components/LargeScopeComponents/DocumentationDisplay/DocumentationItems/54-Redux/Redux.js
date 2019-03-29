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
import stateManagementImage from './StateManagementDiagram.jpg';

class Redux extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Redux Implementation</h1>

					<p>
						<TextIndent>While</TextIndent> there are many implementations of the Flux design pattern, I was attracted to Redux due to the small 
						size and relative simplicity of its implementation. I also like the fact that it is agnostic to the actual user interface system that 
						is consuming the store that it sets up. The user interface of my application is implemented with React at the moment, but in a future 
						context where I, for example, use a different implementation for something like an iOS or Android representation, I could potentially 
						graft my redux infrastructure into how it functions as well. 
					</p>

					<p>
						<TextIndent>At</TextIndent> the bottom of this section is a visual representation of the different entities involved in this setup
						along with relationships denoting resources that have been granted to and passed between them and the types of actions and information that 
						flow to the reducer. Between here and there, I will go over the different parts of my Redux implementation, which are:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>The action strings I wrote and encapsulated into constant variables</p>
							</li>
							<li>
								<p>The action creator functions that dispatch actions of the right type, along with appropriate payloads.</p>
							</li>
							<li>
								<p>
									The reducer which negotiates the current state along with instructions about how to return a new copy of it to the store, including 
									appropriate changes and updates.
								</p>
							</li>
							<li>
								<p>
									The store, which acts as the central source of truth for the rest of the application.
								</p>
							</li>
							<li>
								<p>
									The use of higher order component patterns to map state and dispatch props to the top level <code>App</code> container, allowing the 
									Redux information flow cycle to run.
								</p>
							</li>
							<li>
								<p>
									The <code>Provider</code> component that wraps the entire application, providing it access to the store.
								</p>
							</li>
						</ul>
					</p>

					<h2>Action Strings</h2>

					<p>
						<TextIndent>As</TextIndent> I improve my software development skills, one principle that I try to use to help guide me along is to avoid 
						hardcoding values as much as possible in my code. When writing redux actions, the main discerning factor a reducer uses to direct control flow 
						is the <code>type</code> coming in on an action it receives. My thought process was then to create a separate Javascript file that would hold 
						<code>const</code> declarations representing the different Strings denoting action types to be consumed by the reducer. In order to thread together 
						the redux architecture, the action creator files and reducer files then import the different action strings they will need from this one file.
					</p>

					<p>
						<TextIndent>Another</TextIndent> benefit of abstracting and storing these action strings into their own file is that a new collaborator on the project 
						could, in the future, open up the <code>actionStrings.js</code> file to have a look through what's declared there and get an idea of the different 
						major events that can take place in the application. 
					</p>

					<h2>Action Creators</h2>

					<p>
						<TextIndent>As</TextIndent> I learnt redux at first, I was dispatching action objects with their types and payloads directly from within components, which 
						I believe was fine as a learning exercise. However, looking towards scaled up production-level settings, I believe that this would hard-code the form that 
						actions take across the codebase, making it pretty tedious to go through each place they're dispatched and changing the types and payloads in each one. 
						As an alternative strategy, I defined action creator functions, which are defined in one file. These action creator functions are then called by the components 
						that generate them throughout the course of the application. If, in the future, something about the action type or payload needs to change for some part of 
						the application, it will be fairly easy to go into the action creators file and change it there in one place, rather than many.
					</p>

					<h2>Top-Level Reducer</h2>

					<p>
						<TextIndent>The</TextIndent> reducer is where the real meat of this design pattern is carried out. Actions that are dispatched to the store are received by a 
						reducer function, which descends down a conditional structure such as an <code>if</code> / <code>if-else</code> / <code>else</code> block or <code>switch </code> 
						block. Depending on the action type, the reducer creates a copy of the current state, makes the appropriate modifications required by the action, 
						and returns the new, modified copy back to the store to be resolved against the Virtual DOM by React, modifying UI where necessary.
					</p>

					<h2>The Store</h2>

					<p>
						<TextIndent>The</TextIndent> store is where I describe the initial shape and content of the state tree for the application. Then, I import the reducer, 
						and create the store by synthesizing this reducer, initial state, and the application of middleware together. I also enabled hot reloading of the application 
					  as a little bonus to make the development experience smoother and less tedious. I then export the store variable as a default export, to be imported 
					  at the top level of the application. 
					</p>

					<h2>AppContainer</h2>

					<p>
						<TextIndent>One</TextIndent> thing I have really enjoyed about writing a web application with modern Javascript and tools such as React and Redux is the ability to 
						employ functional programming concepts to my workflow. One such pattern is my use of the <code>react-redux</code> library's <code>connect()</code> function. This 
						is an implementation of a <i>Higher Order Component</i>, where I take <code>App</code> component and grant it with the information and procedures it needs to connect 
						it to the redux store acting as a source of truth for the application. 
					</p>

					<p>
						<TextIndent>In</TextIndent> <code>AppContainer.js</code> within the <code>App</code> component's directory structure, I describe the sections of state that are to be mapped over as 
						props into the App component in a <code>mapDispatchToProps()</code> method. Then, I write dispatch functions that are to be passed down as props to App, and further into the application 
						structure. These dispatch functions receive any information needed for an action payload, and then call the appropriate action creator function in order to dispatch the action off to the 
						reducer to be handled. 
					</p>

					<h2><code>Provider</code></h2>

					<p>
						<TextIndent>Used</TextIndent> in my <code>WrappedApp</code> component, the <code>Provider</code> component, included as a tool to use in the <code>react-redux</code> library, is used to 
						wrap around the main components of the entire application. I import the redux store in this application's main Javascript file, and then pass it to the <code>Provider</code> component as 
						props in order to make the store available to all components in the application tree. 
					</p>

					<h2>Entity and Information Flow Diagram For State Management</h2>

					<p>
						Below is a diagram mapping out the different entities of my state management implementation and how they communicate resources and information between eachother in a 
						set of intricate relationships to make the application function. 
					</p>

					<div> {/*initObject.reduxFlowDemoCradleClasses*/}
						<img src={ stateManagementImage } alt="State Management Entities and Information/Event/Resource Flow" style={ {height: '85%', width: '85%'} }/>
					</div>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/9cb887d0-a6d6-4a68-985b-0d0fb4a6836b'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/b9f85483-d91c-44b7-9723-f9a96632ac65'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

Redux.contextType = ThemeContext;

export default Redux;

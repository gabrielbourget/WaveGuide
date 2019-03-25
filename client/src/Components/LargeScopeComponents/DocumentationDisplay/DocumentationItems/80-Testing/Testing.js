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

class Testing extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Testing</h1>

					<p>
						<TextIndent>The</TextIndent> research and learning that I did while preparing my portfolio project brought me into the world of testing. 
						I like the idea of having a test suite acting as a sort of living documentation, laying out the kinds of guarantees that a team wants to 
						put in place about how the different parts of their systems should work, and how they should integrate together. In the context of React 
						development, I had a chance to learn about frameworks such as Jest and Enzyme, and how they can be combined together to form an effective 
						unit testing strategy for React components. 
					</p>

					<p>
						<TextIndent>As</TextIndent> I identify learning areas that I can move into in order to improve my development skills, I am excited at the 
						prospect of working up to, and adopting a test-driven development approach, where I lay out the functionality that I want to achieve into 
						failing tests and work my way to having them all pass. However, in the context of learning how to express many of the UI components I've built 
						into a React context for the first time, it wasn't immediately clear to me how to outline this desired functionality without diving into 
						writing the code itself. As I gain more experience within this paradigm however, I am becoming increasingly comfortable building React components. 
						As that comfort level continues to rise, I am looking to adopt this process as I believe it will result in better components that are less 
						error-prone, and able to meet their requirements with a pretty stable guarantee.
					</p>

					<h2>Smoke Tests</h2>

					<p>
						<TextIndent>The</TextIndent> learning and tutorials that I did using Jest and Enzyme had me using the basics of such a setup, such as writing 
						<code> describe</code> blocks to group test runs together over a component, writing <code>it</code> blocks to test some specific part of the 
						component and using Enzyme's shallow rendering capabilities to mount just what I needed at any given time to perform tests. I plan on employing 
						these types of strategies to write out unit test suites for the component library I built as time permits. However, for now, I have written out 
						basic smoke tests in order to ensure that the components can at least render. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/158df3a4-d696-458e-a710-93395dc90d9e'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/64b76bcd-455f-46e7-b2c1-9ced5dcda550'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
					
				</article>
			</FromTheTopCradle>
		);
	}
}

Testing.contextType = ThemeContext;

export default Testing;

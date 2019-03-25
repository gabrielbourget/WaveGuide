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

class ODS_GlobalStyles extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>The <code>GlobalStyles</code> Directory</h1>

					<p>
						<TextIndent>Working</TextIndent> within a modular css paradigm has been a fantastic addition to the way that I write 
						web applications. Not worrying about selector collisions has allowed me to write my styles in a way that feels more natural and 
						scoped to the specific parts of a component they're meant to influence. In the interest of scalability and the ability to use this 
						project structure for other applications though, I chose to keep some styles (such as colors) globally declared and available for 
						reference in other stylesheets. By making references to these global style rules, exposed through CSS variables, I can more effectively 
						maintain the flexibility that I am looking for in my components. Below, I go through the different sections of CSS that are exposed globally 
						in the application, and my rationale for doing so in each case. 
					</p>

					<h2><code>base.css</code></h2>

					<p>
						<TextIndent>In </TextIndent> many web applications, there are certain calibrating style rules that one wants to apply to top level DOM elements
						such as <code>html</code> and <code>body</code>, meant to set the stage for a smooth development experience. In that spirit, my <code>base.css </code> 
						file makes small style rules along those lines. As the application grows, any other base-level styling that needs to be applied can be entered there. 
					</p>

					<h2><code>colors.css</code></h2>

					<p>
						<TextIndent>Rather </TextIndent> than boxing myself into hard-coding color values on any CSS selectors, I created this global css file to expose a series 
						of CSS variables assigned to the various colors that make up the two major themes available in the application. Any place in the styling of my component 
						library that assigns a color to a DOM element makes reference to this one file, making it easy and painless to play around with color schemes and start 
						to expand into other ones. I go into more depth on the colors that I picked for my dark and light theme, the highlight color, and how they all relate to 
						eachother in the <Link to='/documentation/98448871-11a4-4c22-bb55-9d2d81ad880c'>Color Scheme</Link> section of the documentation. 
					</p>

					<h2><code>fonts.scss</code></h2>

					<p>
						<TextIndent>In </TextIndent> the larger context of where I've sunk my time and energy, the fonts that I'm using for my application have been further down the 
						priority ladder. However, I thought it would be prudent to create a <code>fonts.scss </code> file for now where I exposed a Sans Serif stack for now that components 
						use to style their text. As I run into contexts where other font choices might be appropriate, I am planning on declaring new font stacks in that file and exposing 
						them as CSS variables to be used in component stylesheets.
					</p>

					<h2><code>generalVars.scss</code></h2>

					<p>
						<TextIndent>This </TextIndent> file is a catch all place for global CSS variables I wanted to expose, but wasn't sure how to categorize them immediately. For example, 
						as I built the profile cards in which I populate artist information, I wasn't entirely sure how high and wide I wanted them to be, not feeling that I had the nuanced 
						understanding of the various viewports they'd need to be displayed in to be fully responsive. So for now, I picked a height and width that I'm comfortable with for now, 
						and assigned them to variables that are called when assigning the card dimensions in the component stylesheet. 
					</p>

					<p>
						<TextIndent>Additionally</TextIndent>, I am also exposing two box shadow variables which assign box shadows to various components like block quotes in this documentation 
						and profile cards, for both light and dark theme. As I run into use cases where I might want softer or more pronounced variations on these box shadows, I can assign these 
						to new CSS variables and access them as needed in component stylesheets. 
					</p>

					<h2><code>zIndexes.scss</code></h2>

					<p>
						<TextIndent>Lastly, </TextIndent> I have been very wary of how I think about and assign z-index values to components throughout my application. While I have not run into too 
						many use cases that I have felt require explicit vertical stacking of components, my thought process has been to assign z-index values to variables and access them as needed. 
						The only major use case I have had for z-index stacking so far has been the side menu that slides in and out on the left of the application. However, as I move into creating 
						components such as modals, and think about things such as push notifications, it'll be nice to have a central place in my codebase where I can think about and organize my z-indexes.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/1722e2d5-8cb7-48d9-bcf2-333ea54de0ce'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/0772ee70-a178-4be0-8db3-989ae5ca743f'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_GlobalStyles.contextType = ThemeContext;

export default ODS_GlobalStyles;

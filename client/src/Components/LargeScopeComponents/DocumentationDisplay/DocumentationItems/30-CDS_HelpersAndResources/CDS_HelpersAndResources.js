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

class CDS_Helpers extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Helpers and Resources</h1>

					<p>
						<TextIndent>Many</TextIndent> of the components that I wrote for the application reached a level of size and complexity 
						where it made sense to extract certain logic to helper files, which helped me to standardize the way that I wrote this 
						logic, and to keep the main component JS files as clean and concise as possible. I also found that with certain component, 
						it made sense to me to bring in local copies of resources such as SVG icons in order to make them as independent and reusable
						as possible.
					</p>
	
					<h2>Helper JS Files</h2>

					<p>
						<TextIndent>In</TextIndent> the course of building the application, I found that as I thought about how I wanted components to be 
						styled, that these decisions were often contingent on dynamic factors such as application context, props passed into the component, 
						or component state itself. In order to make sure my components were styling themselves in proper accordance to these information 
						sources, I began writing logic such as assigning a <code>darkTheme</code> or <code>lightTheme</code> class to different elements of 
						the component depending on the value stored in the ThemeContext object exposed through React's Context API. 
					</p>

					<p>
						<TextIndent>What</TextIndent> I ended up with was series of different styling evaluations like this, based on how the stage was set 
						at render-time by context, state, and props, which decided upon a certain selector name to be chosen. Then I used the 
						<a href="https://www.npmjs.com/package/classnames" target='_blank' rel='noopen noreferrer'> ClassNames</a> package to build 
						appropriate class lists for the different sections of my component. 
					</p>

					<p>
						<TextIndent>As </TextIndent> I repeated this process for different components, I decided to extract it to its own function in a 
						<code> helpers.js</code> file. This function takes in component state, props, and application context, and once it has prepared 
						the classlists for the different sections of markup in the component, exports them as an object. Then, the component usingi this 
						helper function imports it at the top of the file, and calls it, returning it into an object declared and initialized in the 
						component's <code> render()</code> method. An example of one of these helper functions is included below for the [ insert component 
						name here ] component, followed by how it is used in the component itself to assign the right styles to its parts. 
					</p>

					<div className={ initObject.tempPlaceholderClasses }>
						[ Code sample of a component's helper function, and how it is used in the component's <code> render()</code> method. ]
					</div>

					<h3>Other Helper Functions</h3>

					<p>
						<TextIndent>Beyond</TextIndent> the encapsulated logic that helps with render-time styling, I also include any other helper logic 
						that the component that uses it might depend on for other activities. For example, my <code> TwoSizeCard</code> and 
						<code> TableItem</code> components both call a function which matches the social network links that are provided in an artist's 
						profile against a list of available social media icons. They then returns an array of objects containing the appropriate 
						social media icons, grouped by name and variation, providing the components with the right assets needed to 
						render the profile correctly.
					</p>

					<h2>Resources</h2>

					<p>
						<TextIndent>In</TextIndent> order to try my best to make my components independent and reusable, I try to keep local copies of 
						things like static assets within their internal component structure. I do this mainly with SVG files in my application, keeping 
						all of the icons needed to draw my application on hand locally. Since I am not pulling from the project's icon library as I 
						paint these components, they can more easily shared with other developers for reuse. 
					</p>

					<p>
						<TextIndent>Even</TextIndent> though I am employing this strategy mainly for static visual assets, I can see storing other local 
						information being useful in other context. For example, for the <code> TwoSizeCard</code>, as I get further into writing test scenarios 
						to verify that it can achieve its key functional and visual requirements, I could store small datasets used to mock appropriate 
						instances of the component within a test run. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/b535e44c-5ce5-4e18-9792-5067b7186c71'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/4a1afd52-4735-4f21-a24f-33c112c511aa'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

CDS_Helpers.contextType = ThemeContext;

export default CDS_Helpers;

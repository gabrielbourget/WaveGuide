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
						<TextIndent>In </TextIndent> an effort to keep my main component files as concise as possible, I have adopted a strategy of 
						extracting certain utility logic to its own helper JS files, to be imported and used by component files as they need them. 
						The main case in which I did this for components was a helper function that took in a component's state, props, context, and styles, 
						running through some logic to determine how to appropriately style the component at render-time based on this dynamic information. 
						I go into more detail on this process that I developed in the 
						<Link to='/documentation/5b0bb77c-efd2-491f-9ef7-9fab84fe4f42'> Render-Time Component Preparation </Link> section of the documentation.
					</p>

					<h3>Other Helper Functions</h3>

					<p>
						<TextIndent>Beyond</TextIndent> the encapsulated logic that helps with render-time styling, I also include any other helper logic 
						that the component that uses it might depend on for other activities. For example, my <code> TwoSizeCard</code> and 
						<code> TableItem</code> components both call a function which matches the social network links that are provided in an artist's 
						profile against a list of available social media icons. They then returns an array of objects containing the appropriate 
						social media icons, grouped by name and variation, providing the components with the right assets needed to 
						render the profile correctly.
					</p>

					<p>
						<TextIndent>I</TextIndent> have not yet run into many situations that require the extraction of other helper logic associated with the 
						rendering and function of my components. However, I am more comfortable knowing that I have set up an external file that can grow as 
						the need might arise for additional helper logic. It will keep my component files uncluttered, and if any helper file starts to reach 
						unwieldly sizes, I can refactor it into multiple files and move them into their own nested directory.
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
						<Link to='/documentation/b535e44c-5ce5-4e18-9792-5067b7186c71'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/4a1afd52-4735-4f21-a24f-33c112c511aa'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

CDS_Helpers.contextType = ThemeContext;

export default CDS_Helpers;

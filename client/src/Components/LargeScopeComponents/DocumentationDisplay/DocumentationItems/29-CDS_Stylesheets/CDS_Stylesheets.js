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



class CDS_Stylesheets extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Component Stylesheets</h1>

					<p>
						<TextIndent>In</TextIndent> order to style the components of my application, I decided to write separate stylesheets 
						which sit inside the local structure of the component, right alongside the main javascript file that builds them. In 
						order to make use of them, all that I need to do is import them at the top of the file, and assign them to a variable 
						(which I will typically call <code>styles</code>). Then, in order to assign those styles onto a DOM element, it is just 
						a matter of referring to them in their className attribute with a <code>styles.<i>selectorNameHere</i></code> syntax.
					</p>

					<p>
						<TextIndent>Since</TextIndent> I wanted my styles to be modular and scoped locally to the components that they refer to, 
						I made sure to follow the <code><i>styleSheetName</i>.module.scss</code> syntax so that React's build process would pick 
						it up. The build process then modifies selector names by prepending the component name they refer to, along with appending 
						some sort of identifier string at the end, taking a selector named <code>awesomeSelector</code> in development, to something 
						along the lines of <code>ComponentItCameFrom_awesomeSelector_17Qdi</code>. This batch find-and-replace process ensures that 
						css styles are scoped to the components that they're meant to affect and removes any chance of style collisions in the wider 
						code base. 
					</p>

					<p>
						<TextIndent>While</TextIndent> I could have achieved the same overall styling in my application using a vanilla CSS syntax, 
						I chose to go with using an SCSS pre-processor to enhance the experience. I find that the nesting syntax granted by these 
						types of pre-processors lets me write my styles in a way that is less verbose, and more easily communicable to other developers 
						who might be reading and using my code at some point. In order to add pre-processor functionality to the application's build 
						process, I followed 
						<a href="https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet" target='_blank' rel='noopen noreferrer'> this </a>
						section of the Create React App documentation.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/3b75a19f-9373-42d7-889a-47b30f0d2535'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/070f43b1-72a0-4f64-9293-bd1bec17055c'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

CDS_Stylesheets.contextType = ThemeContext;

export default CDS_Stylesheets;

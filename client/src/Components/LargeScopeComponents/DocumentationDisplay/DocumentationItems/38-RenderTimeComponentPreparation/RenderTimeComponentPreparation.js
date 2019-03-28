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

class RenderTimeComponentPreparation extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Render-Time Component Preparation</h1>

					<p>
						<TextIndent>I</TextIndent> have found that as I think about how I want components to be styled, these decisions are often 
						contingent on dynamic factors such as application context, props passed into the component, or component state itself. In order to 
						make sure my components style themselves in proper accordance to these information sources, I have ended up writing logic such as assigning 
						a <code>darkTheme</code> or <code>lightTheme</code> class to different elements of 
						the component depending on the value stored in the ThemeContext object exposed through React's Context API. 
					</p>

					<p>
						<TextIndent>What</TextIndent> I have ended up with was series of different styling evaluations like this, based on how the stage is set 
						at render-time by context, state, and props, which decide a certain selector name to be chosen. Then I used the 
						<a href="https://www.npmjs.com/package/classnames" target='_blank' rel='noopen noreferrer'> ClassNames</a> package to build 
						appropriate class lists for the different sections of my component. 
					</p>

					<p>
						<TextIndent>As </TextIndent> I repeated this process for different components, I decided to extract it to its own function in a 
						<code> helpers.js</code> file. This function takes in component state, props, and application context, and once it has prepared 
						the classlists for the different sections of markup in the component, exports them as an object. Then, the component using this 
						helper function imports it at the top of the file, and calls it, returning it into an object declared and initialized in the 
						component's <code> render()</code> method. An example of one of these helper functions is included below for the [ insert component 
						name here ] component, followed by how it is used in the component itself to assign the right styles to its parts. 
					</p>

					<div className={ initObject.tempPlaceholderClasses }>
						[ Code sample of a component's helper function, and how it is used in the component's <code> render()</code> method. ]
					</div>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/4d3daac5-29e2-4d96-b4bd-9e0ba7b8c133'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/b1020f53-578b-4d6b-a112-1ee402e94ead'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

RenderTimeComponentPreparation.contextType = ThemeContext;

export default RenderTimeComponentPreparation;

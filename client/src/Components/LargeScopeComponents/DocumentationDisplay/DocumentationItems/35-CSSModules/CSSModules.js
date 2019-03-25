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

class CSSModules extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>CSS Modules</h1>

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

					<h2>Considering CSS-In-JS</h2>

					<p>
						<TextIndent>The</TextIndent> other major styling paradigm that I considered for this application was 
						<a href="https://www.styled-components.com/" target='_blank' rel='noopen noreferrer'> Styled Components</a>. In such a 'CSS-In-JS' 
						approach to styling, one builds their styles right in the main Javascript tile, encapsulating them in a Javascript template string 
						and writing them out using a syntax that is very similar to that of a CSS pre-processor like SCSS. Since you are writing these 
						styles in a Javascript context, and within the component file, you can also programatically set certain styling rules, according to 
						dynamic component information such as props and state. While I think that this is a solidly built technology and that it would be fun to 
						use in the future, there are two major reasons that I chose to go with CSS Modules instead. 
					</p>

					<p>
						<TextIndent>The</TextIndent> first of those reasons is that it is very important to me that my main component JS files stay as concise and 
						small as possible. They are likely the entry point that someone else would take when learning about them in a context of potential re-use, 
						and I have made an effort to keep them short, and write code that is easy to understand. Where possible, I have moved supporting logic and 
						styles to external files, to be imported and utilized in the main file and its operations. The CSS that I wrote for my components got pretty 
						long for a lot of components, and I felt that it would be beneficial to abstract them into their own stylesheets to be brought in and used as 
						external resources. 
					</p>

					<p>
						<TextIndent>The </TextIndent> second of these reasons is that while the way styling logic is implemented in styled components is interesting to me, 
						the switch over to them seemed like it would be relatively horizontal based on how I was styling my components. The way I've implemented my 
						component library, I am still progrmatically applying certain styles based on this dynamic information, but I do this by adding or removing classes 
						from the classlists applied to parts of a component at render time. While the logic to do this is separated from the actual styles, it still 
						seemed like about the same amount of code in the end. You can read more about the way that I dynamically apply component styles in the 
						<Link to='/documentation/5b0bb77c-efd2-491f-9ef7-9fab84fe4f42'> Render-Time Component Preperation</Link> section of the documentation.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/f472f77f-cc05-4e04-a779-53cdab8cf280'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/4d3daac5-29e2-4d96-b4bd-9e0ba7b8c133'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

CSSModules.contextType = ThemeContext;

export default CSSModules;

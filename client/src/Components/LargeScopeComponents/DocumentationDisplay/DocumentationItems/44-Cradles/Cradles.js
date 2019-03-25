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

class Cradles extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Cradles</h1>

					<p>
						<TextIndent>One</TextIndent> thing I have noticed as I have learnt to build user interface components and environments 
						is that from a markup point of view, they often include a sort of wrapper div, who's assigned style rules set the stage 
						for the way that content will be sized and displayed within its boundaries. What I decided to do with this component library 
						is to abstract some of these common layout scenarios into their own cradle components. One such cradle that I use over and 
						over in this application (and is wrapping this documentation article) is the <code>FromTheTopCradle</code>. The CSS for this 
						component ensures that the height of the container reaches at least 100% of the available vertical space left to it in the 
						viewport, and stacks content vertically from the top using a CSS Grid <code>display</code> property.
					</p>

					<p>
						<TextIndent>The</TextIndent> cradles are pretty simple components, who just contain a div that is assigned the appropriate 
						layout rules for its inner context. I then nest the children props that the component receives, allowing me to nest whatever 
						components and markup I want to include within the cradle when I'm building up other components. This is an overall design 
						pattern that I plan to continue employing, adding more cradles that I can pull off the shelf for other common layout situations
						that are sure to arise as I build more user interface components. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/0b78e43a-9b1f-4544-bb50-5f1772434f29'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/5998402b-1e69-4095-b7a9-7800e17d0b47'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

Cradles.contextType = ThemeContext;

export default Cradles;

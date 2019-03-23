import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';
import VerticalDivider from '../../../../Dividers/VerticalDivider/VerticalDivider';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class Dividers extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Dividers</h1>

					<p>
						<TextIndent>Another</TextIndent> small, highly-reusable pair of components that I worked to create was a 
						horizontal and vertical divider component. Such a component comes in as more of a visual tool meant to clear 
						segmentation between the sections of a component. For example, I make use of the <code>HorizontalDivider </code> 
						component in both the artist profile cards and in each of the documentation articles of this application.
					</p>

					<p>
						<TextIndent>Each</TextIndent> component is just a div that is filled with a background color appropriate to the 
						application's current color theme, and with a width or height set by the component user in props. While I could 
						have specific widths or heights in order to size these dividers, I decided to have them fill up 100% of the horizontal
						or vertical size of their parent component, allowing their sizing to be determined by the larger context that they take 
						part in. Perhaps in the future, I might refactor the components to take optional props like this in order to extend 
						their functionality to such scenarios where their sizing should be more explicit. An example of such a <code>HorizontalDivider </code>
						is provided below, created a visual demarcation between the end of the article and the navigation buttons to the previous 
						or next section.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/80c14b29-aa22-40f8-9672-7314481f5d86'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/0b78e43a-9b1f-4544-bb50-5f1772434f29'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

Dividers.contextType = ThemeContext;

export default Dividers;

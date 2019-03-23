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

class CDS_NestedComponents extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Nested Components</h1>

					<p>
						<TextIndent>For</TextIndent> the most part, I have tried to keep the directory structure of the component library fairly 
						flat. For some components, however, it has made sense to me to develop and include another component nested into the directory structure of 
						a parent component. The first reason for this is that the sub-component makes sense in the context of being a composable and derivative part of 
						a larger component (such is the case with a component like <code>TableItem</code>, nested into the directory structure of the 
						<code> ArtistTable</code> component). 
					</p>

					<p>
						<TextIndent>The</TextIndent> second reason for this is that I might be implementing a type of sub-component that is not really that generalizable and is more closely related to
						the personal preferences of the application developer. An example of this would be with the composition of the <code> Jumbotron</code> component into 
						the directory structure of my <code> HomePage</code> component. The dimensions and functionality of a basic jumbotron segment are not too hard to 
						replicate, and I felt that the content in there and the way that it is laid out was more specific to the application I was building than generalizable to 
						other projects. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/4a1afd52-4735-4f21-a24f-33c112c511aa'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/b7b2a049-cdcb-493f-aa24-29b2bed9ccf8'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

CDS_NestedComponents.contextType = ThemeContext;

export default CDS_NestedComponents;

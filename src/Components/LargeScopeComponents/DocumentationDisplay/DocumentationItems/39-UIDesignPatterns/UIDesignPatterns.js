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

class UIDesignPatterns extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Implemented UI Patterns</h1>

					<p>
						<TextIndent>The</TextIndent> UI components that I built and that are composed together to form this application were 
						developed as part of a thought process on how I wanted to structure the directory, and the types of information 
						and interactions I wanted to make available to the community it is meant to serve. In so doing, I ended up working out 
						how to develop best-effort implementations of many staple components one would expect to find in a modern web application. 
						These ranged from small units such as buttons and dividers, to standard layout implementations like a navbar, footer, and dynamic side menu,
						to more complicated environments that present the artist information like the <code> ArtistGallery</code> and <code> ArtistTable</code>. 
					</p>

					<p>
						<TextIndent>The</TextIndent> following articles go into some of these standard components and environments that I took at stab at implementing. I 
						discuss the thought process that went into their design, some of the flexibility I have tried to build in for future re-use or refactoring, 
						and the way that they managed their inner and outer contexts to achieve their presentation and functionality. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/5b0bb77c-efd2-491f-9ef7-9fab84fe4f42'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/ac20c586-039e-4ea4-9b20-8a41cdab3a38'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

UIDesignPatterns.contextType = ThemeContext;

export default UIDesignPatterns;

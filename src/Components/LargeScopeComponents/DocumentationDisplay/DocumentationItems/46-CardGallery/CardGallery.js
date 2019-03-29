import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';
import CodeBlock from '../../../../TextLayout/CodeBlock/CodeBlock';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class CardGallery extends React.Component {
	render() {

		const codeBlock= `
			@import "../../../GlobalStyles/colors.css";
			@import "../../../GlobalStyles/generalVars.scss";

			.gallery {

				width: 100%;
				height: 100%;
				padding-bottom: 30px;

				display: grid;
				grid-template-columns: repeat(auto-fill, var(--cardWidth));
				grid-template-rows: repeat(auto-fit, var(--cardHeight));
				justify-content: center;
				justify-items: center;
				grid-gap: 1rem;
				grid-auto-flow: dense;
				overflow-y: auto;

				&.darkTheme {
					background: var(--veryveryDarkGrey);
				}

				&.lightTheme {
					background: var(--white);
				}
			}
		`;

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Card Gallery</h1>

					<p>
						<TextIndent>One</TextIndent> of the standard display environments that I wanted to implement as part of 
						my learning process was a dynamic gallery that could display and arrange the artist profile cards within 
						fluid specifications that reflowed content accordingly and could handle different viewport sizes. I followed 
						<a href="https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/" target='_blank' rel='noopener noreferrer'> this </a>
						tutorial from CSS-Tricks to get a starting idea of how to pull it off, and went from there, customizing the 
						gallery to my needs.
					</p>

					<p>
						<TextIndent>As</TextIndent> mentioned in the previous section, where I discuss the <code>TwoSizeCard</code> component that 
						displays artist profile information, the way that it resizes itself is by changing its row-span within this grid environment 
						from one, to two. I template the columns of the grid to fill as many spots as there is available, at the globally specified 
						card height that I set. Then, I set the template rows of the grid to fill as many spots as are required by the number of cards 
						in the grid. I also made use of the property <code>grid-auto-flow: dense</code> in order to ensure that, as cards expanded and closed, 
						the available content would reflow thorugh the grid's space in order prevent any holes from occuring. Finally, the way the columns 
						and rows are templated out, the grid scales nicely across wide screen sizes all the way down to the narrow reality of mobile devices. 
						The full SCSS code that specifies the grid layout is included below in the following code sample. 
					</p>

					<ReactMarkdown 
						source={ codeBlock } 
						renderers={ {code: CodeBlock} }
					/>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/5998402b-1e69-4095-b7a9-7800e17d0b47'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/8f036fd9-596b-40eb-9f79-311e0e9afa79'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

CardGallery.contextType = ThemeContext;

export default CardGallery;

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

class Design extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Design</h1>

					<p>
						<TextIndent>I</TextIndent> wanted to challenge myself during the development of this project to do so in a manner that was as self-sufficient 
						as possible. While my graphic design skills are certainly not up to any sort of industry standard, I wanted to see if I could develop some of 
						the static visual assets needed throughout my application for visual and functional purposes. I go into more detail on this later on in the 
						icon library portion of this article. In general, I tried to stay relatively unopinionated about the visual design of the application, taking a 
						less-is-more approach and opting for good color contrast, appropriate spacing between elements, and a focus on useability. 
					</p>

					<p>
						<TextIndent>The</TextIndent> photoshop and illustrator files that I used to work on and refine the visual assets used through this program can 
						be found in the <code>Design</code> directory at the top level of the application. While there are blemishes in this design work that I am not 
						entirely sure how to fix or improve at the moment, I wanted to make sure to include these files in the git repository. As I release the application 
						and look to collaborate with others in the community to further develop it, I wanted those files there so that others with greater design skills could 
						hop in and help me out in the areas that I am lacking. 
					</p>

					<h2>Icon Library</h2>

					<p>
						<TextIndent>While</TextIndent> building the functionality of the application, I decided on a strategy of building my buttons as clickable SVG icons. 
						For now, the display context of the application is built primarily for desktop devices, but I liked the idea of SVG because it would allow my static 
						assets to be scaled to whatever size they needed to be. The icon library that I built is stored in two illustrator files in the <code>Design </code>
						directory. Where I used icons created by other artists, I included the appropriate information in there required to properly credit them for their work. 
					</p>

					<h2>Fonts</h2>

					<p>
						<TextIndent>In </TextIndent> terms of fonts, I again kept it simple for the application, opting for a sans-serif font stack based around Roboto, since 
						it's widely able to be rendered in most browser environments. I also globally set font-size to be at 62.5% in order to calibrate my relative units used to 
						size font sizes throughout the application. This calibration makes it so that 1rem measures out to a 10px sized font, making it easy and reliable to set 
						font sizes throughout the application's style modules. 
					</p>

					<h2>Color Scheme</h2>

					<p>
						<TextIndent>Wanting</TextIndent> to build a light and a dark theme for the application, I first wanted to come up with a color palette which would 
						provide the shades of color needed for both, and ideally create a situation where both themes used the same colors but in an inverted fashion. I ended up 
						following <a href="https://www.youtube.com/watch?v=9S8LGdpNh4Q" target='_blank' rel='noopener noreferrer'> this </a> tutorial in order to come up with 
						the colors for my application.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/485dc30c-1e72-412e-9fc0-cf065a808c09'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/158df3a4-d696-458e-a710-93395dc90d9e'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

Design.contextType = ThemeContext;

export default Design;

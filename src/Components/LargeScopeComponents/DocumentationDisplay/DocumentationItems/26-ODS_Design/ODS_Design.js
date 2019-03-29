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

class ODS_Design extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>The <code>Design</code> Directory</h1>

					<p>
						<TextIndent>While</TextIndent> my graphic design skills are certainly not in a place that would grant me the ability 
						to carry out and take on the design responsibilities of an entire project, I wanted to challenge myself with this one 
						and be as self-sufficient as possible. As such, the majority of static assets such as the SVG icons that scatter the 
						application and the jumbotron image on the home page were developed in Illustrator and Photoshop. Where I required a 
						bit of a helping hand, such as with the social media icons, I pulled in logo implementations from 
						<a href="https://flaticon.com" target='_blank' rel='noopener noreferrer'> FlatIcon</a>, and have attributed credit 
						to the creators in a proper fashion. I go into more discussion about the different design decisions that I made and 
						strategies that I followed in the <Link to='documentation/8e113667-df9d-44ff-aa7c-6e2f16a96b80'> Design </Link> section 
						of the documentation.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/bf059259-f7fa-4f97-8bb8-459eb3e2a805'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/45631f67-11da-4a24-986a-7ba6dfb4a157'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Design.contextType = ThemeContext;

export default ODS_Design;

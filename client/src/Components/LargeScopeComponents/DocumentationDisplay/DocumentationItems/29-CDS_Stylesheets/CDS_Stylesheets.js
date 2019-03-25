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
						<TextIndent>While</TextIndent> markup templating and logic are co-located within the component's main Javascript
						file, I have decided to store the CSS styles for a component in separate stylesheets, within the component's 
						directory structure. You can read more about how I implemented CSS modules in the 
						<Link to='/documentation/8f90509c-c5f9-471c-b068-e616a9679e86'> CSS Modules</Link> article of the Front End section.
						In that article, I also go into my reasoning for going with them in contrast to 'CSS-In-JS' approaches such as 
						styled components.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/3b75a19f-9373-42d7-889a-47b30f0d2535'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/070f43b1-72a0-4f64-9293-bd1bec17055c'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

CDS_Stylesheets.contextType = ThemeContext;

export default CDS_Stylesheets;

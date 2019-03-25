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

class Security extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Security</h1>

					<p>
						<TextIndent>Like</TextIndent> accessibility, security is an area of web development that is vast to survey over, and quite involved in order to cover all your bases. 
						The myriad ways in which an application can be vulnerable to hazards such as data breaches, script injection attacks, failures in access control etc... are very 
						extensive to even understand, and even harder to account for as you build a production-ready application. Down the road, and in the context of working within a team that 
						could handle it, I would want to be able to run a full threat and risk analysis on the systems being built, cataloguing the different surface areas in the code that 
						left it vulnerable to compromise, and establishing strategies to address those problems. For now, I will continue to do my best to learn more about the topics involved in 
						this area of software development and to apply them iteratively to my work. 
					</p>

					<h2>Feature Scoping</h2>

					<p>
						<TextIndent>A</TextIndent> simple security strategy to follow involves consciously not developing certain application features until you can be fairly sure that they 
						will be secure. For example, I think that down the road it would be interesting to allow members of the community to create their own profiles on the application, filling in 
						their own information and performing such actions as uploading some of their music to be listened to by other people. Beyond the amount of time needed to code that out though, 
						I'm also trying to be realistic about the fact that my knowledge on access control measures and other similar security features in this area is not up to the task of implementing 
						a feature like this in a secure fashion. As I continue to develop the application and add new features, I plan on running through similar evaluations in order to help scope 
						what is realistic within my current skill set and resources. 
					</p>

					<h2>Anchor Links</h2>

					<p>
	 					<TextIndent>One</TextIndent> interesting security feature that was simple to implement was making sure that the anchor links I included in the application taking users to external 
						sites were secure. By including the attribute <code>rel='noopener noreferrer'</code> onto I can ensure that the browser does not grant the browsing context access to the page 
						that opened the link, and that it does not send the origin page address or any other value via the Referer:HTTP header.						
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/73627e59-49df-47a8-a0d7-22edd04a7c0c'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/18d1dc66-e33b-4823-bed3-ea4c8b60c553'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

Security.contextType = ThemeContext;

export default Security;

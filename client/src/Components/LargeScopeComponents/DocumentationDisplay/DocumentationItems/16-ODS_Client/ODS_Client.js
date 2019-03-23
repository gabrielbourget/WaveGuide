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

class ODS_Client extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1><code>client</code> Directory</h1>

					<p>
						<TextIndent>As</TextIndent> this was the first time I've really taken a stab at building a React application from the 
						ground up, I wanted to prioritize my focus on the design of my component library and the implementation of different 
						key application-wide systems like routing and state management. While I am comfortable with what the Webpack bundler does
						and some of the ways it can be configured, I opted for now to bootstrap the client using Facebook's create-react-app tool. 
						I am looking forward to learning more about Webpack as my experience grows, and I am comfortable with the fact that, if I 
						outgrow the different presets set by Facebook, that I can eject the project and move on from there. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/18d1dc66-e33b-4823-bed3-ea4c8b60c553'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/3033ce2e-9598-4d6c-9819-9666b49176f4'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Client.contextType = ThemeContext;

export default ODS_Client;

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

class ODS_Public extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1><code>public</code> Directory</h1>

					<p>
						<TextIndent>The</TextIndent> <code>public</code> directory of the client application is currently where I am storing
						many of the static assets for the application. I have a folder that is holding my icon library, and then another folder 
						that is holding the profile images for all of the artist profiles that the application fills out. 
					</p>

					<p>
						<TextIndent>A</TextIndent> development feature of in create-react-app is that its build process does not enjoy when you attempt 
						to import resources from beyond the root of the project's <code>src</code> directory. Seeing as many of my project's UI components 
						needed to pull from the icon library that I built, I decided for now to splice a copy of the library as its own directory within the 
						bounds of <code>src</code>.
					</p>

					<h2>Looking To Future Scalability</h2>

					<p>
						<TextIndent>Since</TextIndent> the application is still quite small in size and function, I thought that it was appropriate for now 
						to store static assets such as icons and images within the directory structure of the client, and pull from them when necessary to 
						render out a component properly. However, I'm aware that if the application were to continue to scale in users and functionality, that 
						it would be more appropriate to store these kinds of assets on external infrastructure such as a CDN to be pulled from remotely with a 
						network request. 
					</p>

					<p>
						<TextIndent>What</TextIndent> I'm thinking that I'd do is to implement some sort of logic in the client that would determine at application 
						mounting time whether a cache existed on the client device which might contain some stored static assets from previous sessions. If so, 
						the application's async redux actions responsible for reaching out to external resources and populating the state tree could look to the cache 
						first for static assets. If it did not exist, the logic could make an API request to these external network resources, bring them into the state 
						tree, and appropriately cache them for later use. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/2c4c531e-e905-41f4-ac7c-bc6018bab0a6'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/7e34fce7-d704-4d24-9779-0ea55d5a6664'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					
				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Public.contextType = ThemeContext;

export default ODS_Public;

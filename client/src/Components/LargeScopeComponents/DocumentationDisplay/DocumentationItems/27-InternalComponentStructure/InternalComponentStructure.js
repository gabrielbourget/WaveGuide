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

class ComponentDirectoryStructure extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Internal Component Structure</h1>

					<p>
						<TextIndent>As</TextIndent> I have worked through building various React components at varying levels of complexity and requirement, I have
						done my best to cobble together a set of workflows and strategies in how I scaffold and fill out their internal directory structures. My 
						overall strategy is one in which I seek to encapsulate as many of the resources and logic needed to properly render the component as possible. 
					</p>

					<p>
						<TextIndent>Building</TextIndent> React components feels like working to strike a balance between the layout, styles, and logic that are defined 
						internally, and the connections to resources that are external. These external resources can be coming from components in the same program,
						passed down as props, state, context etc... They can also come from beyond the program itself, accessed through network requests to different servers.
					</p>

					<p>
						<TextIndent>On</TextIndent> the external side of things, I have tried to take a layered approach, where network requests are to be dispatched through 
						asynchronous redux actions, feeding into the state that resides in the store. Coming in a layer deeper, I then provide that information, along with dispatch 
						functions that can send out actions to affect and modify that information, down to my components by generating container components using react-redux's 
						<code> connect()</code> function. You can read more about this area of the application architecture in the 
						<Link to='/documentation/9cb887d0-a6d6-4a68-985b-0d0fb4a6836b'> State Management </Link> section of the documentation.
					</p>

					<p>
						The focus of this section, however, is on the internal context of these components. On a high level, I ended up with a tendency to structure 
						my components with:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									A main component file which pulls in the resources it will need from node modules and internal project resources, and defines markup and logic for 
									its proper functioning.
								</p>
							</li>
							<li>
								<p>
									A stylesheet, or set of stylesheets, written using an SCSS pre-processor syntax that outlines the overall layout and presentation of the component, also 
									definining contingent classes that are applied in certain contexts such as color schemes and certain props being present.
								</p>
							</li>
							<li>
								<p>
									Static resources a component might need such as images and SVG icons, along with helper javascript files that contain render-time 
									(called within <code> render()</code>) logic that prepares appropriate classlists to be applied to different sections of the component.
								</p>
							</li>
							<li>
								<p>
									One or many test files, potentially in their own sub-directory that are flagged to be evaluated when you activate a test-runner like Jest.
								</p>
							</li>
							<li>
								<p>
									Occasionally (typically for larger components), child components are composed within their overall structure, but don't really have much 
									relevance to the rest of the component library (e.g. a <code> TableItem </code> component within the directory structure of my 
									<code> ArtistTable </code> component).
								</p>
							</li>
						</ul>
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/28005464-9c1f-413e-952f-d422242ed0ffc'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/3b75a19f-9373-42d7-889a-47b30f0d2535'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>					
				</article>
			</FromTheTopCradle>
		);
	}
}

ComponentDirectoryStructure.contextType = ThemeContext;

export default ComponentDirectoryStructure;

import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class ODS_Components extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>The <code>Components</code> Directory</h1>

					<p>
						<TextIndent>As </TextIndent> I sat down and began to brainstorm the application, and considered the kinds 
						of components and experiences that would be necessary to build a community directory for this music scene, 
						I began with broad strokes. For example, I knew that I wanted some sort of home page, and that on that home page, I would 
						want some sort of navbar, jumbotron splash image, and a footer. I knew that I wanted to be able to convey 
						information about artists in at least a couple of ways, and settled on building out a card gallery and table 
						representation of their profiles. 
					</p>

					<p>
						<TextIndent>As </TextIndent> this process continued, I began to get increasingly sophisticated in my sketching 
						and started to consider the smaller components like buttons, indicators, and dividers, which would be used again 
						and again in the context of providing a cohesive interface in which key UX sequences could take place. Moving into 
						implementation of these components as React code, I decided to start small and build up. I have come to really 
						embrace the compositional nature of React's philosophy, gradually working your way up to complex user interfaces by 
						building smaller pieces of it, and then composing them into the different larger contexts in which they play a part 
						in the user experience. 
					</p>

					<p>
						<TextIndent>I </TextIndent>go into the general design strategies that I employed to structure each component's inner 
						directory structure later on in <Link to='/documentation/45631f67-11da-4a24-986a-7ba6dfb4a157'>this section</Link>.
						However, in this section of the documentation, I'd like to keep the focus on the structure that I developed for the 
						organization of the overall component library.
					</p>

					<h2>Organizing The Component Library</h2>

					<p>
						<TextIndent>Seeing </TextIndent> as this was the first time I built a React component library, my approach was to 
						start with the smallest components and work my way up. The way that they're structured alongside eachother in the end 
						is an emergent result of the insights and lessons I learnt along the way as I tried different things out, seeing 
						what worked well and what brought up issues.
					</p>

					<p>
						<TextIndent>The </TextIndent> context in which these components are used at the moment is for just one application. 
						However, I have made an effort to build them such that I can export them relatively to be used and adapted into other 
						applications that I'm planning to build in the future. 
					</p>

					<p>
						<TextIndent>For</TextIndent> components such as buttons, cards, layout cradles, loaders, progress indicators, and text 
						layout utilties, I decided to build a generic directory denoting what the category was, and then storing instance of 
						that design pattern within them. For example, in the Buttons directory, you can find three variations. 
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									<code>CircleButton</code> is meant to expose SVG icons as buttons in the user interface, and the one that I built 
									takes in the light theme, dark theme, and highlighted version of the SVG icon meant to be displayed.
								</p>
							</li>
							<li>
								<p>
									<code>FilledButton</code> implements a button with a solid filled background, able to match its background color 
									and text color to the application's theme. 
								</p>
							</li>
							<li>
								<p>
									<code>OutlineButton</code> implements a button with an outline around its border, also able to match its outline
									and text color to the application's theme.
								</p>
							</li>
						</ul>						
					</p>

					<p>
						<TextIndent>Moving</TextIndent> up in size and complexity, I began to develop components that, while they could be expressed 
						in a relatively generic way, would need to be implemented in a way that hardcoded some of their visual features and interaction
						effects to this specific application. As a result, these components, such as the <code>Footer</code>, <code>Navbar</code>, 
						<code>SearchBar</code>, and <code>TreeView</code>, are certainly not as immediately transferable to other applications. However, 
						I made an effort to make the styling and logic generic enough that it'd be a matter of providing proper button text, passing 
						in the right event handler props, and feeding them the right data sources in order to tailor them to another application. 
					</p>

					<p>
						<TextIndent>At </TextIndent> the highest level of size and complexity, my library has components that act as major pages/ecosystems
						in the application, such as the <code>HomePage</code>, <code>DocumentationDisplay</code>, and <code>ArtistProfileDisplay</code>. The 
						layouts, styles, and logic in these components is for the most part taking care of the broad strokes of how the pages of the application 
						are laid out. In another application, the construction of similar components would be more of an emergent result of how one would want 
						the large sections of the application to look and function, resulting from the composition and coordination of some of its larger pieces. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/7e34fce7-d704-4d24-9779-0ea55d5a6664'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/1722e2d5-8cb7-48d9-bcf2-333ea54de0ce'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Components.contextType = ThemeContext;

export default ODS_Components;

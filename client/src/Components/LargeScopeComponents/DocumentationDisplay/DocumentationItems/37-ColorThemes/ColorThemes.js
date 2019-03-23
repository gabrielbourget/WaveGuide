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

class ColorThemes extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Color Themes</h1>
					<p>
						<TextIndent>My </TextIndent> thought process as I set out to implement dark and light themes in the application was that if I was able to think 
						through and implement a strategy that allowed for at least two color schemes, it would be much easier to move to a third than it would be 
						to move from a single theme to multiple ones. In the end, multiple processes in different parts of the code base act in concert to implement this. 
						At a high level, they are: 
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									A global CSS file where I outline the variables that point to the limited selection of colors used to paint the themes.
								</p>
							</li>
							<li>
								<p>
									Using React's Context API to expose to all subscribing components what the current application theme is. 
								</p>
							</li>
							<li>
								<p>
									Nesting <code> .darkTheme </code> and <code> .lightTheme </code> selectors into many of the other class selectors within my SCSS files. 
									As a component's helper logic determines what theme the application is in, it appends the correct theme class to relevant class lists, 
									allowing each component to style itself correctly. 
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<p>
												A concrete example of this would be the div that contains the TreeView component. Depending on whether or not the <code> .darkTheme </code>
												or <code> .lightTheme </code> classes are appended onto the classlist that this div receives, it will paint its background to the dark grey 
												of the dark theme or white of the light theme.
											</p>
										</li>
									</ul>
								</p>
							</li>
						</ul>
					</p>

					<h2>React Context Portion of Color Theme Implementation</h2>

					<p>
						<TextIndent>As</TextIndent> I learnt my way through React and read through its documentation, I was intrigued by its Context 
						API, and the ability it granted to make information available to deeply nested components without needing to chain props down the 
						DOM tree to them. I put some thought into how I might try out this part of the API, and an immediate candidate was as a contribution 
						to the implementation of a dark and light theme in the application. 
					</p>
					
					<p>
						<TextIndent>At</TextIndent> the top directory level of the client's source code, I wrote a small Javascript file in which I exported 
						a variable that instantiated a React Context along with some default value for the theme. You can see this in the code sample below:
					</p>

					<div className={ initObject.tempPlaceholderClasses }>
						[ Code sample of the declaration of the ThemeContext variable ]
					</div>

					<p>
						<TextIndent>Then,</TextIndent> in order for components to subscribe to this context and use it in their rendering logic, I imported this 
						ThemeContext variable in their main JS files and specified that their <code> contextType </code> was of <code> ThemeContext </code>. This is 
						outlined in the code sample below.
					</p>

					<div className={ initObject.tempPlaceholderClasses }>
						[ Code sample of a component subscribing to the ThemeContext ]
					</div>					

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/8f90509c-c5f9-471c-b068-e616a9679e86'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/5b0bb77c-efd2-491f-9ef7-9fab84fe4f42'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

ColorThemes.contextType = ThemeContext;

export default ColorThemes;

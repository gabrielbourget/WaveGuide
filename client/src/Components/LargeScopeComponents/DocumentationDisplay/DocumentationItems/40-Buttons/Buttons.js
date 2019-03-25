import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import OutlineButton from '../../../../Buttons/OutlineButton/OutlineButton';
import CircleButton from '../../../../Buttons/CircleButton/CircleButton';

import { ReactComponent as SunIconDarkTheme } from '../../../../../Icons/SunIcon/SunIconDarkTheme.svg';
import { ReactComponent as SunIconLightTheme } from '../../../../../Icons/SunIcon/SunIconLightTheme.svg';
import { ReactComponent as SunIconHighlighted } from '../../../../../Icons/SunIcon/SunIconHighlighted.svg';
import { ReactComponent as MoonIconDarkTheme } from '../../../../../Icons/MoonIcon/MoonIconDarkTheme.svg';
import { ReactComponent as MoonIconLightTheme } from '../../../../../Icons/MoonIcon/MoonIconLightTheme.svg';
import { ReactComponent as MoonIconHighlighted } from '../../../../../Icons/MoonIcon/MoonIconHighlighted.svg';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';



class Buttons extends React.Component {

	static propTypes = {
		onThemeSwitch: PropTypes.func.isRequired
	};

  switchToLightTheme = () => {
    this.props.onThemeSwitch('light');
  };

  switchToDarkTheme = () => {
  	this.props.onThemeSwitch('dark');
  };

	whichButton = () => {
		if (this.context === 'dark') {
			return (
				<CircleButton 
					darkTheme={ <SunIconDarkTheme/> }
					lightTheme={ <SunIconLightTheme/> }
					highlighted={ <SunIconHighlighted/> }
					size='50px'
					onClick={ () => this.switchToLightTheme() }
				/>
			);
		}
		else {
			return (
				<CircleButton 
					darkTheme={ <MoonIconDarkTheme/> }
					lightTheme={ <MoonIconLightTheme/> }
					highlighted={ <MoonIconHighlighted/> }
					size='50px'
					onClick={ () => this.switchToDarkTheme() }
				/>
			);
		}
	};

	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Buttons</h1>

					<p>
						<TextIndent>The</TextIndent> button, as humble of a component as it might be, was a great starting point for me. Even though 
						the required functionality is relatively limited, the thought and design that went into the code provided 
						useful insights into how I might achieve independence and reuseability with bigger more complex items.
					</p>

					<h2><code>FilledButton</code></h2>

					<p>
						<TextIndent>This</TextIndent> button is used to display different text prompts in different components throughout the application. 
						Depending on the color theme of the application, it paints its background in the high contrast to that, meant to be highly 
						visible and easy to use. As props, the button requires some sort of text to be passed down, which is displayed, along with 
						some function meant to be called when the button is clicked. The component also takes a <code>shape</code> prop, which if 
						set to <code>'rounded'</code> will result in the button having rounded corners. 
					</p>

					<div className={ initObject.componentDemonstrationRowClasses }>
						<FilledButton
							text='Orthogonal Corners'
							onClick={ () => {alert('I do something.')} }
						/>

						<FilledButton
							text='Rounded Corners'
							shape='rounded'
							onClick={ () => {alert('I do something.')} }
						/>
					</div>

					<h2><code>OutlineButton</code></h2>

					<p>
						<TextIndent>Essentially</TextIndent> identical in functionality and purpose to the <code>FilledButton</code>, <code>OutlineButton</code>
						is more of a stylistic variation, meant to provide visual variety in the toolkit used to build out larger UI sections.
						Like the <code>FilledButton</code>, this button takes text, shape, and onClick props.
					</p>

					<div className={ initObject.componentDemonstrationRowClasses }>
						<OutlineButton
							text='Orthogonal Corners'
							onClick={ () => {alert('I do something.')} }
						/>

						<OutlineButton
							text='Rounded Corners'
							shape='rounded'
							onClick={ () => {alert('I do something.')} }
						/>
					</div>

					<h2><code>CircleButton</code></h2>

					<p>
						<TextIndent>From</TextIndent> a UX standpoint, the <code>CircleButton</code> is very similar to the other two buttons. However, from a 
						presentational standpoint, I built it to act as a cradle in order to expose many of the SVG iconography that I prepared in my design 
						processes as buttons to be used throughout the applications. Present in the <code>Navbar</code> of this page for example are instances 
						of this button component for opening the side menu, opening the search input, and routing back to the application's home page.
					</p>

					<p>
						<TextIndent>For</TextIndent> props, the <code>CircleButton</code> first takes in three functional SVG React components as variations on 
						the same icon in dark theme, light theme, and in the highlight color picked for the current scheme. The component also takes in a size 
						prop meant to specify the overall size to expand or scale down the SVGs to fit their intended visual context. Finally, it also takes 
						in an onClick prop function. 
					</p>

					<p>
						<TextIndent>As</TextIndent> it stands, I am experiencing ongoing and unresolved issues surrounding the use of SVG files like this as React 
						components. I go into more detail around the implementations I have tried, along with the problems I have run into with each of them in the 
						<Link to='/documentation/44e61326-d324-4563-9792-f481dc7ad1f4'> Active Problem Areas</Link> section, included at the bottom of the documentation tree. 
						While the <code>CircleButton</code> has the logic and resources set up to allow for transitioning to the highlighted version of the SVG when the 
						button is hovered over, I have disabled this functionality until I can resolve the SVG issues I'm experiencing. For now, I have provided a demo of 
						the button below which toggles between light and dark theme.
					</p>

{					<div className={ initObject.componentDemonstrationRowClasses }>
						{ this.whichButton() }
					</div>}

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/b1020f53-578b-4d6b-a112-1ee402e94ead'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/80c14b29-aa22-40f8-9672-7314481f5d86'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

Buttons.contextType = ThemeContext;

export default Buttons;

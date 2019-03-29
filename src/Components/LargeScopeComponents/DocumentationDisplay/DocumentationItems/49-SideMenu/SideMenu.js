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

class SideMenu extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Side Menu</h1>

					<p>
						<TextIndent>The</TextIndent> side menu is a classic pattern in web development, allowing for easy access to important application functionality, keeping 
						it available to slide in at the push of a button throughout the application. The side menu that I developed for this application is included as a 
						single mounted instance at the top level of the application in <code>App</code>. Sliding out at the click of the menu button in the navbar, it contains 
						buttons to switch the theme between light and dark, major site navigation links, and a list of links included that points to common subreddits, 
						discord servers, youtube channels, record labels/art collectives in the community.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/fc2898d7-3deb-4816-b30e-1334e7f96ae6'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/167985c8-11a5-4b09-be7b-fa176dcef24e'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

SideMenu.contextType = ThemeContext;

export default SideMenu;

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

class SearchBar extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Search Bar</h1>

					<p>
						<TextIndent>One</TextIndent> of the key requirements I set out during the design process for this directory was 
						to implement a functioning search engine, allowing application users the ability to search through and find information 
						on artists in the community. Sending off search queries to the redux store, and how those queries are used to generate a 
						search result list is more in the realm of the state management section of what I did, but I'll talk here about the 
						<code>SearchBar</code> component that I implemented. 
					</p>

					<p>
						<TextIndent>Just</TextIndent> as important as all the logic and data manipulation that goes on behind the scenes of a search 
						procedure, is a clear, and easy-to-use interface through which application users can enter their search queries. In such a 
						spirit, the search bar that's implemented for this application is nested within the <code>Navbar</code>, and opens up when 
						a user clicks on the magnifying glass icon. 
					</p>

					<p>
						<TextIndent>As</TextIndent> an ongoing opportunity to learn the nuances of building a React application, the <code>SearchBar </code>
						was a great chance to explore <b>controlled</b> versus <b>uncontrolled</b> components. It is a great and useful thing that certain 
						HTML5 components such as <code>textarea</code>, <code>input</code>, and <code>form</code> manage their own internal state. This 
						allows software developers to achieve fairly complicated functionality such as check-box management and form submission without 
						needing to worry about a lot of the small details. 
					</p>

					<p>
						<TextIndent>However,</TextIndent> part of what makes React so special is its ability to abstract the entire DOM representation as 
						an interconnected set of Javascript entities in its Virtual DOM. The contract that it asks for, however, in order to effectively 
						carry out this paradigm of UI construction, is that any changes to the DOM should go through changes to component state, rather than 
						direct, manual manipulation of the DOM. In this sense, I implemented the search bar as a <i>controlled</i>, rather than uncontrolled 
						component. Instead of manually storing the value of the search input field, along with a reference to its DOM element variables, and 
						updating its value as the user types, I store the value of the input field in state, and route any changes to the field through a 
						call to <code>setState()</code>. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/21a57b18-8be9-45ca-9e79-66b6511e995f'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/c212d863-a83b-451f-a7a3-93c979ec3d0a'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

SearchBar.contextType = ThemeContext;

export default SearchBar;

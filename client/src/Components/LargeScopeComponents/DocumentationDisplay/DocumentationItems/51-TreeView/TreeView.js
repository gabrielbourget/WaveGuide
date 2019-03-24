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

class TreeView extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Tree View</h1>

					<p>
						<TextIndent>The</TextIndent> tree view is one of the oldest implemented user interface patterns. Implemented as an easy way 
						for software users to navigate through nested data structures such as file directory systems, this UI component has been with 
						us since some of the earliest operating systems implementing GUIs. In the context of this application, I developed a <code>TreeView</code>
					  component in order to outline the sections of the documentation, and how they are nested into eachother to form the overall narrative flow. 
					  Included to the left, clicking on each item changes the window location, triggering a routing change that swaps in the correct corresponding 
					  documentation article. You can read more about this in the <Link to='/documentation/1684177a-80e6-4e13-88a4-71e732e74196'>dynamic routing </Link> 
						section of the documentation.
					</p>

					<p>
					 	<TextIndent>The</TextIndent> way that I implemented this component is that it takes in a javascript object that contains a flattened tree representation 
					 	of the different articles included in this documentation. By recursively rendering Tree Nodes, it renders out the overall component, and contains the 
					 	logic needed to open up and close the different parts of the tree as they are interacted with. 
					</p>

					 <h2>Future Refactoring and Improvements</h2>

					<p>
					 	<TextIndent>From</TextIndent> a re-use standpoint, the way that I construct the flattened tree that is fed into the rendering process of the tree is 
					 	fairly cumbersome, with me writing out each individual node in the data structure. What I am considering is some programattic process in which I could either 
					 	scan through an existing folder structure build some sort of UI layer where I could build the data structure by filling out a series of forms I could create 
					 	for myself. 
					</p>

					<p>
						<TextIndent>The</TextIndent> component is also capable of displaying folder and file icons for tree structures that would mirror directory structures in other programs 
					 	that are in the spirit of Google Drive. As I adapt the component for use in different contexts, I might abstract out a version meant to display tree structures like this,
					 	and another that renders link trees such as the one for this documentation.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/167985c8-11a5-4b09-be7b-fa176dcef24e'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/a6405a7a-5467-4e28-a388-c48a47284850'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

TreeView.contextType = ThemeContext;

export default TreeView;

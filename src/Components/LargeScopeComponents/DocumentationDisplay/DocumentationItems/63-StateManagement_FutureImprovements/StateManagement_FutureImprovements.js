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

class StateManagement_FutureImprovements extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>

					<h1>Future Improvements</h1>

					<p>
						<TextIndent>I</TextIndent> feel that at this point, I have built up to a solid introduction to Redux and the overall state 
						management strategy that possible by using it. There are definitely improvements that I'd like to make as the application develops 
						however. Additionally, the size of the community directory is still relatively small, and I think that Redux will really begin to shine 
						as it grows in size and complexity.
					</p>

					<h2>Breaking Up and Composing Reducers</h2>

					<p>
						<TextIndent>At</TextIndent> this juncture, the application doesn't contain an overbearing number of actions dispatched to the reducer, centering mostly 
						around fetching artist information, manipulating that information, and toggling various UI features. However, as I begin adding features and start to 
						manipulate other datasets such as upcoming events and profile information for community members other than musicians, I can see the one reducer I have 
						at the moment getting rather large and unwieldly. I can see two major improvements that I will benefit from by breaking them up and into their own 
						sectioned functions and composing them together in the root reducer.
					</p>

					<p>
						<TextIndent>The</TextIndent> first is that reducer code will be scoped to the area of the state tree that it affects and is responsible for watching 
						over. By splitting these reducers up into their own files, the state management code will become more modular, and easier to read through. The second reason 
						is that since these smaller reducers will only be responsible for one section of the state tree, I would only have to pass one part of it into them, rather 
						than the entire data structure. This will make the process a little more efficient, and reduce the complexity of traversing through its structure in order to 
						carry out reducer operations.
					</p>

					<h2>Moving TreeView State Into the Redux Store</h2>

					<p>
						<TextIndent>The</TextIndent> way that the <code>TreeView</code> currently works for this documentation portion of the application, is that a flattened 
						structure of the different nodes going into it is fed into it as props in order to populate it in the user interface. While this is a strategy that works fine 
						for development purposes, the tree collapses back to its closed state whenever the component refreshes due to the fact that the branches of the tree that are 
						opened by the user are not persisted in state. By moving this data structure into state, and passing it to the <code>TreeView</code> through props, it could 
						stay open as the user moved through the application, becoming a more useful UI component. 
					</p>

					<p>
						<TextIndent>I</TextIndent> am currently exploring the different actions a user takes that modify the contents of this data structure, and thinking through 
						how I will translate these into the Redux flow in order to achieve the extended functionality I am looking for. I am thinking that I will make an 
						<code> OPEN_FOLDER_NODE</code> and <code>CLOSE_FOLDER_NODE</code> action, which will toggle the isOpen status on each element in the data structure, which tells 
						the React rendering process which sub-branches to open up and which to keep closed as it recurses through the structure and displays the component.
					</p>

					<h2>Exploring Other Redux-Related Tools and Infrastructure</h2>

					<p>
						<TextIndent>While</TextIndent> my exposure to them is still just at the surface level of Medium tutorials and Youtube videos, I am interested in 
						<code> Redux Sagas</code> and the potentially alternative place they could take in my system in place of Redux Thunks. I have heard both good and bad things 
						about both strategies around asynchrnous actions, but I don't believe that my experience with either technology is deep enough to really appreciate the points 
						that people are making. I plan to try and stay with Redux Thunks for now as I move into implementing my back end in the near future. Then, perhaps for a certain 
						asynchronous communication scenario with the server, such as adding an artist into the database, I will try Redux Sagas then.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/65fab7ed-3225-4ca4-8a08-723406e431eb'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/994199e8-5e34-4e9a-8ad7-ba84d1faa851'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

StateManagement_FutureImprovements.contextType = ThemeContext;

export default StateManagement_FutureImprovements;

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

class Table extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Table</h1>

					<p>
						<TextIndent>The</TextIndent> other major environment I wanted to provide for displaying artist information was a general purpose 
						table, that I could then adopt for other contexts where information could be effectively displayed in this format. I had implemented a 
						div-based table for a previous software project that I worked on during school, and one of the major frustrations that I had was developing 
						a strategy for using it in the context of other parts of the application we were developing. Implemented as a CSHTML template as part of a 
						.NET Core stack application that pulled from an external source to map out the items in the table body, I found it unwieldly to implement it 
						again in other Views of the application. I would either rewrite all of the markup again in a new file, or copy over the table markup from another
						view and comb through it to change the dynamic code within it. Both processes were slow and error prone, and resulted in a user interface component 
						that was not easily reusable. 
					</p>

					<p>
						<TextIndent>Taking</TextIndent> another crack at something like it again in the context of React development was a much nicer experience. The 
						<code> ArtistTable</code> component was implemented as some template markup that outlines a table body, along with an optional table header and footer.
						I then implemented a <code>TableItem</code> component that is generated for each artist being displayed in the table, rendered during a mapping operation 
						that corresponds to the <code>displayedArtists</code> prop passed into the table component. 
					</p>

					<h2>Future Refactoring and Improvements</h2>

					<p>
						<TextIndent>While</TextIndent> this table component works well for the purposes of the application so far, I would like to improve it in order to 
						more easily use in order to display information such as lists of upcoming events or songs and albums in an artist's discography. I am relatively happy 
						right now with the way the table component is structured; what I am planning to do, is to define different types of <code>TableItem</code> style components that 
						can act as templates for receiving and arranging the different types of information sets I'll need to iterate through and display. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/cf74736d-037c-45ab-a517-be63fbb05987'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/22e9e820-5b9c-4688-8f31-7b44a3afe6bd'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

Table.contextType = ThemeContext;

export default Table;

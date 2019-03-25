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

class CDS_Tests extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Tests</h1>

					<p>
						<TextIndent>Next,</TextIndent> I have tried to create conceptual space for including my component tests in its 
						internal directory context. For now, I have a file, where I am running simple smoke tests to make sure that 
						the component can render. As my testing becomes more intensive, I can add more to the same file or create separate 
						ones. I go more into the tests that I have written so far, along with the larger picture of the tests I'd like to 
						develop as the application grows in the <Link to='/documentation/2ddc812b-2390-4664-a2f0-d214dfe7b8ea'> Tests </Link> 
						section of the documentation.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/070f43b1-72a0-4f64-9293-bd1bec17055c'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/1fd3e88d-cf43-4616-b115-f0bd390585a4'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

CDS_Tests.contextType = ThemeContext;

export default CDS_Tests;

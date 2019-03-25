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

class FrontEnd extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Front End</h1>

					<p>
						<TextIndent>In</TextIndent> this section of the documentation, I expand on the overall framework and architecture choices that I made while 
						building the front end of the application. I go into:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									The reasons that I chose React as the centerpiece of my architecture, and a high level overview of some of its different APIs I made use 
									of, and others that I passed on for now. 
								</p>
							</li>
							<li>
								<p>
									My use of CSS Modules, and how they helped to contribute to a codebase that seeks to be as modular and reusable as it can. 
								</p>
							</li>
							<li>
								<p>
									My implementation of a dark and light theme for the application, and how I have structured the codebase to be at least receptive to adding 
									further color themes in the future. 
								</p>
							</li>
							<li>
								<p>
									My strategy around making render-time decisions on component styling based on dynamic factors such as context, props, and state, and how 
									I implemented it with helper logic that my components use. 
								</p>
							</li>
							<li>
								<p>
									A discussion on some of the major UI components and patterns that I implemented as part of the application.
								</p>
							</li>
							<li>
								<p>
									A description of some of the improvements and additions I am planning on adding to the front end of my application as time and growing 
									ability permit.
								</p>
							</li>
						</ul>
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/1fd3e88d-cf43-4616-b115-f0bd390585a4'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/f472f77f-cc05-4e04-a779-53cdab8cf280'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

FrontEnd.contextType = ThemeContext;

export default FrontEnd;

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

class SpecialCasesComponentState extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Keeping Some Local State</h1>

					<p>
						<TextIndent>Redux</TextIndent> is a great way to store complex, dynamic information that is needed 
						by multiple parts of the application in order to function correctly. However, I found that there were some 
						cases in which stateful information was only really relevant within the component that it affected. Some 
						examples of this include:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									A boolean that tracks whether or not the <code>TwoSizeCard</code> is open or closed, used by the component 
									to know when to ope nand up and display an artists's links. 
								</p>
							</li>
							<li>
								<p>
									A boolean that similarly controls whether or not the search input field is displayed in the navbar or hidden, 
									controlled by clicking the magnifying glass icon.
								</p>
							</li>
							<li>
								<p>
									A boolean that toggles whether or not to open up the different sort options available in the <code>ArtistProfileDisplay </code>
									component. 
								</p>
							</li>
						</ul>
					</p>

					<p>
						<TextIndent>While</TextIndent> this type of information is certainly dynamic, I reasoned that there weren't any other 
						components throughout the application that depended on it in order to function correctly. It is due to this that 
						small, locally-scoped segments of state are kept in their appropriate containers and out of the Redux store. If there 
						ever came a time when this kind of depedency structure changed, it would be relatively simple to move that piece of 
						information into the redux store, and pass it down as mapped props to a container component. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/c51a43be-2a4b-4fac-b40b-ec04e0d64a95'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/65fab7ed-3225-4ca4-8a08-723406e431eb'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

SpecialCasesComponentState.contextType = ThemeContext;

export default SpecialCasesComponentState;

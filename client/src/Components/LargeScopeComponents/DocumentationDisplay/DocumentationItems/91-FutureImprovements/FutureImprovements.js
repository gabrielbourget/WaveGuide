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

class FutureImprovements extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<ul>
						<li>Documentation of component library onto something like Storybook and/or Bit, exposing sections of it as npm package</li>
						<li>Move context into state</li>
						<li>Whole section on media responsiveness</li>
						<ul>
							<li>Media queries to reflow how layout is achieved in css</li>
							<li>Window listeners in components that trigger changes to state which trigger re-expression of component for changed viewport context</li>
						</ul>
					</ul>
				</article>
			</FromTheTopCradle>
		);
	}
}

FutureImprovements.contextType = ThemeContext;

export default FutureImprovements;

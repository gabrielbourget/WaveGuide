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
					<ul>
						<li>
							<p>
								Breaking up and composing reducer logic. 
							</p>
						</li>
						<li>
							<p>
								Moving TreeView state into redux store, allowing it to persist its visual representation. 
							</p>
						</li>
						<li>
							<p>
								Other tech like Redux Sagas, Redux Observables (from Netflix)
							</p>
						</li>
					</ul>
				</article>
			</FromTheTopCradle>
		);
	}
}

StateManagement_FutureImprovements.contextType = ThemeContext;

export default StateManagement_FutureImprovements;

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

class ApplicationOverview extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<ul>
						<li>
							<p>
								Move theme into redux store and discontinue use of Context API
							</p>
						</li>
						<li>
							<p>
								Move tree state into redux store.
							</p>
						</li>
						<li>
							<p>Future UI Components</p>
							<ul>
								<li>
									<p>
										Audio Player
									</p>
								</li>
								<li>
									<p>
										Video Player
									</p>
								</li>
								<li>
									<p>
										Modal (w/explanation of how I have many of the tools needed, having implemented Side Menu)
									</p>
								</li>
								<li>
									<p>Other Indicators (e.g. selection indicators that are absolutely positioned under menu options and such)</p>
								</li>
							</ul>
						</li>
					</ul>
				</article>
			</FromTheTopCradle>
		);
	}
}

ApplicationOverview.contextType = ThemeContext;

export default ApplicationOverview;

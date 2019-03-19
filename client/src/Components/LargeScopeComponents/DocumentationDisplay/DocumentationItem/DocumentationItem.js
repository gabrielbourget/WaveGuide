import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './DocumentationItem.module.scss';
import { prepareComponent } from './helpers';

import FromTheTopCradle from '../../../Cradles/FromTheTopCradle/FromTheTopCradle';

class DocumentationItem extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.documentationItemClasses }>
					<h1>Table of Contents</h1>
				</div>
			</FromTheTopCradle>
		);
	}
}

DocumentationItem.contextType = ThemeContext;

export default DocumentationItem;


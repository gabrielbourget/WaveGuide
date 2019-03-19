import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';
import { withRouter } from 'react-router';

import { prepareComponent } from './helpers';
import styles from './DocumentationDisplay.module.scss';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import DocumentationItem from './DocumentationItem/DocumentationItem'; // - TODO -> Eventually import list of components that
import DocumentationTree from './DocumentationTree/DocumentationTree'; //   			  use that one to build pages. 

class DocumentationDisplay extends React.Component { 
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.documentationDisplayClasses }>
					<DocumentationTree/>
					<DocumentationItem/>
				</div>				
			</FromTheTopCradle>
		);
	}
}

DocumentationDisplay.contextType = ThemeContext;

const DocumentationDisplayWithRouter = withRouter(DocumentationDisplay);

export default DocumentationDisplayWithRouter;

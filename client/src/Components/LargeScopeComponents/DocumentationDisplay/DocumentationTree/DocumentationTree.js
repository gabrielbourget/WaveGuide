import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './DocumentationTree.module.scss';
import { prepareComponent } from './helpers';

import TreeView from '../../../TreeView/TreeView';

class DocumentationTree extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<div className={ initObject.documentationTreeClasses }>
				<TreeView />
			</div>
		);
	}
}

DocumentationTree.contextType = ThemeContext;

export default DocumentationTree;

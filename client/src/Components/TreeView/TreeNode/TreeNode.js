import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import last from 'lodash/last';
import { ThemeContext } from '../../../ThemeContext';

import styles from './TreeNode.module.scss';

// - Icons

// - ChevronRight 
import { ReactComponent as ChevronRightDarkTheme } from '../SVG/ChevronRightDarkTheme.svg';
import { ReactComponent as ChevronRightLightTheme } from '../SVG/ChevronRightLightTheme.svg';
import { ReactComponent as ChevronRightHighlighted } from '../SVG/ChevronRightHighlighted.svg';
// - ChevronDown
import { ReactComponent as ChevronDownDarkTheme } from '../SVG/ChevronDownDarkTheme.svg';
import { ReactComponent as ChevronDownLightTheme } from '../SVG/ChevronDownLightTheme.svg';
import { ReactComponent as ChevronDownHighlighted } from '../SVG/ChevronDownHighlighted.svg';
// - FolderClosed
import { ReactComponent as FolderClosedDarkTheme } from '../SVG/FolderClosedDarkTheme.svg';
import { ReactComponent as FolderClosedLightTheme } from '../SVG/FolderClosedLightTheme.svg';
import { ReactComponent as FolderClosedHighlighted } from '../SVG/FolderClosedHighlighted.svg';
// - FolderOpen
import { ReactComponent as FolderOpenDarkTheme } from '../SVG/FolderOpenDarkTheme.svg';
import { ReactComponent as FolderOpenLightTheme } from '../SVG/FolderOpenLightTheme.svg';
import { ReactComponent as FolderOpenHighlighted } from '../SVG/FolderOpenHighlighted.svg';

class TreeNode extends React.Component {

	getNodeLabel = (node) => (last(node.path.split('/')));

	render() {

		const { node, getChildNodes, level } = this.props;

		return (
			<React.Fragment>
				<div level={ level } type={ node.type }>
					<div>
						{
							node.type === 'folder' && (
								node.isOpen ? 
							)
						}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

TreeNode.contextType = ThemeContext;

export default TreeNode;

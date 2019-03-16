import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './TreeNode.module.scss';

import { prepareComponent, getNodeLabel } from './helpers.js';

import CircleButton from '../../../Buttons/CircleButton/CircleButton';

// --- Icons ---

// - ChevronRight 
import ChevronRightDarkTheme from '../SVG/ChevronRight/ChevronRightDarkTheme';
import ChevronRightLightTheme from '../SVG/ChevronRight/ChevronRightLightTheme';
import ChevronRightHighlighted from '../SVG/ChevronRight/ChevronRightHighlighted';
// - ChevronDown
import ChevronDownDarkTheme from '../SVG/ChevronDown/ChevronDownDarkTheme';
import ChevronDownLightTheme from '../SVG/ChevronDown/ChevronDownLightTheme';
import ChevronDownHighlighted from '../SVG/ChevronDown/ChevronDownHighlighted';
// - FolderClosed
import FolderClosedDarkTheme from '../SVG/FolderClosed/FolderClosedDarkTheme';
import FolderClosedLightTheme from '../SVG/FolderClosed/FolderClosedLightTheme';
import FolderClosedHighlighted from '../SVG/FolderClosed/FolderClosedHighlighted';
// - FolderOpen
import FolderOpenDarkTheme from '../SVG/FolderOpen/FolderOpenDarkTheme';
import FolderOpenLightTheme from '../SVG/FolderOpen/FolderOpenLightTheme';
import FolderOpenHighlighted from '../SVG/FolderOpen/FolderOpenHighlighted';
// - File
import FileDarkTheme from '../SVG/File/FileDarkTheme';
import FileLightTheme from '../SVG/File/FileLightTheme';
import FileHighlighted from '../SVG/File/FileHighlighted.svg';

class TreeNode extends React.Component {

	static propTypes = {
	  node: PropTypes.object.isRequired,
	  getChildNodes: PropTypes.func.isRequired,
	  level: PropTypes.number.isRequired,
	  onToggle: PropTypes.func.isRequired,
	  onNodeSelect: PropTypes.func.isRequired,
	  r_mrgn: PropTypes.string
	};

	static defaultProps = {
		r_mrgn: '10',
		level: 0
	};

	render() {

		const { node, getChildNodes, level, onToggle, onNodeSelect } = this.props;

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<React.Fragment>
				<div 
					style={ initObject.treeNodeStyle }
					className={ initObject.treeNodeClasses } 
					level={ level } 
					type={ node.type }
				>
					<div>
						{/* If the node is a folder, is it open or not. */}
						{
							node.type === 'folder' && (
								node.isOpen ? 
								<CircleButton 
									size='8px'
									darkTheme={ <ChevronDownDarkTheme/> }
									lightTheme={ <ChevronDownLightTheme/> }
									highlighted={ <ChevronDownHighlighted/> }
									onClick={ () => { onToggle(node) } }
								/> :
								<CircleButton
									size='8px'
									darkTheme={ <ChevronRightDarkTheme/> }
									lightTheme={ <ChevronRightLightTheme/> }
									highlighted={ <ChevronRightHighlighted/> }
									onClick={ () => { onToggle(node) } }
								/>
							)
						}
					</div>
					<div 
						style={ initObject.nodeIconStyle }
						className={ initObject.nodeIconClasses } 
						r_mrgn={ 10 }
					>
						{/* File */}
						{ 
							node.type === 'file'  
							&& <CircleButton
										size='10px'
										darkTheme={ <FileDarkTheme/> }
										lightTheme={ <FileLightTheme/> }
										highlighted={ <FileHighlighted/> }
										onClick={ () => {} }
								 />
						}
					  {/* Open Folder */}
						{
							node.type === 'folder' && node.isOpen && (
								<CircleButton
									size='13px'
									darkTheme={ <FolderOpenDarkTheme/> }
									lightTheme={ <FolderOpenLightTheme/> }
									highlighted={ <FolderOpenHighlighted/> }
									onClick={ () => {} }
								/>
							)
						}
					  {/* Closed Folder */}
						{
							node.type === 'folder' && !node.isOpen && (
								<CircleButton 
									size='13px'
									darkTheme={ <FolderClosedDarkTheme/> }
									lightTheme={ <FolderClosedLightTheme/> }
									highlighted={ <FolderClosedHighlighted/> }
									onClick={ () => {} }
								/>
							)
						}
					</div>

					{/* Grab name at the end of that node's path. */}
					<span 
						className={ styles.nodeSpan }
						role="button"
						onClick={ () => { onNodeSelect(node) }}
					>
						{ getNodeLabel(node) }
					</span>
				</div>	

				{/* If the node is open, recursively generate each child node. */}
				{
					node.isOpen && getChildNodes(node).map((childNode, index) => (
						<TreeNode
							key={ index }
							{ ...this.props }
							node={ childNode }
							level={ level + 1 }
						/>
					))
				}
			</React.Fragment>
		);
	}
}

TreeNode.contextType = ThemeContext;

export default TreeNode;

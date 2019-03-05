import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './TreeNode.module.scss';

import { prepareComponent, getNodeLabel } from './helpers.js';

import CircleButton from '../../../Buttons/CircleButton/CircleButton';

// --- Icons ---

// - ChevronRight 
import { ReactComponent as ChevronRightDarkTheme } from '../SVG/ChevronRight/ChevronRightDarkTheme.svg';
import { ReactComponent as ChevronRightLightTheme } from '../SVG/ChevronRight/ChevronRightLightTheme.svg';
import { ReactComponent as ChevronRightHighlighted } from '../SVG/ChevronRight/ChevronRightHighlighted.svg';
// - ChevronDown
import { ReactComponent as ChevronDownDarkTheme } from '../SVG/ChevronDown/ChevronDownDarkTheme.svg';
import { ReactComponent as ChevronDownLightTheme } from '../SVG/ChevronDown/ChevronDownLightTheme.svg';
import { ReactComponent as ChevronDownHighlighted } from '../SVG/ChevronDown/ChevronDownHighlighted.svg';
// - FolderClosed
import { ReactComponent as FolderClosedDarkTheme } from '../SVG/FolderClosed/FolderClosedDarkTheme.svg';
import { ReactComponent as FolderClosedLightTheme } from '../SVG/FolderClosed/FolderClosedLightTheme.svg';
import { ReactComponent as FolderClosedHighlighted } from '../SVG/FolderClosed/FolderClosedHighlighted.svg';
// - FolderOpen
import { ReactComponent as FolderOpenDarkTheme } from '../SVG/FolderOpen/FolderOpenDarkTheme.svg';
import { ReactComponent as FolderOpenLightTheme } from '../SVG/FolderOpen/FolderOpenLightTheme.svg';
import { ReactComponent as FolderOpenHighlighted } from '../SVG/FolderOpen/FolderOpenHighlighted.svg';
// - File
import { ReactComponent as FileDarkTheme } from '../SVG/File/FileDarkTheme.svg';
import { ReactComponent as FileLightTheme } from '../SVG/File/FileLightTheme.svg';
import { ReactComponent as FileHighlighted } from '../SVG/File/FileHighlighted.svg';

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

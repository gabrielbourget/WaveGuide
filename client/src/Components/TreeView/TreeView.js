import React from 'react';
import values from 'lodash/values';
// import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

//import styles from './TreeView.module.scss';

import TreeNode from './TreeNode/TreeNode';

class TreeView extends React.Component {

	data = {
	  '/root': {
	    path: '/root',
	    type: 'folder',
	    isRoot: true,
	    children: ['/root/david', '/root/jslancer'],
	  },
	  '/root/david': {
	    path: '/root/david',
	    type: 'folder',
	    children: ['/root/david/readme.md'],
	  },
	  '/root/david/readme.md': {
	    path: '/root/david/readme.md',
	    type: 'file',
	    content: 'Thanks for reading me me. But there is nothing here.'
	  },
	  '/root/jslancer': {
	    path: '/root/jslancer',
	    type: 'folder',
	    children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
	  },
	  '/root/jslancer/projects': {
	    path: '/root/jslancer/projects',
	    type: 'folder',
	    children: ['/root/jslancer/projects/treeview'],
	  },
	  '/root/jslancer/projects/treeview': {
	    path: '/root/jslancer/projects/treeview',
	    type: 'folder',
	    children: [],
	  },
	  '/root/jslancer/vblogs': {
	    path: '/root/jslancer/vblogs',
	    type: 'folder',
	    children: [],
	  },
	};

	state = {
		nodes: this.data
	};

	static propTypes = {
		onSelect: PropTypes.func.isRequired
	}

	getRootNodes = () => (
		values(this.state.nodes).filter( node => node.isRoot )
	);

	getChildNodes = (node) => {
		const { nodes } = this.state;
		if (!node.children) return [];
		return node.children.map( path => nodes[path]);
	};

	onToggle = (node) => {
		const { nodes } = this.state;
		nodes[node.path].isOpen = !node.isOpen;
		this.setState({ nodes });
	};

  onNodeSelect = (node) => {
    const { onSelect } = this.props;
    onSelect(node);
  }	

	render() {
		const rootNodes = this.getRootNodes();

		return(
			<div>
				{
					rootNodes.map((node,index) => (
						<TreeNode
							key={ index }
							node={ node }
							getChildNodes={ this.getChildNodes }
							onToggle={ this.onToggle }
							onNodeSelect ={ this.onNodeSelect }
						/>
					))
				}
			</div>	
		);
	}
}

TreeView.contextType = ThemeContext;

export default TreeView;

// - Nucleation point -> https://medium.com/@davidtranwd/implement-tree-view-component-with-reactjs-and-styled-components-5eea3b1603cf

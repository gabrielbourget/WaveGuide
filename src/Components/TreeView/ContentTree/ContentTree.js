import React from 'react';
import values from 'lodash/values';
// import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

//import styles from './TreeView.module.scss';

import TreeNode from './TreeNode/TreeNode';

class ContentTree extends React.Component {

	state = {
		nodes: this.props.data
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

ContentTree.contextType = ThemeContext;

export default ContentTree;

// - Nucleation point -> https://medium.com/@davidtranwd/implement-tree-view-component-with-reactjs-and-styled-components-5eea3b1603cf

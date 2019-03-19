import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';

import styles from './TreeView.module.scss';

import ContentTree from './ContentTree/ContentTree';

class TreeView extends React.Component {

	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const treeViewClasses = ClassNames(styles.treeView, themeClass);

		return ( 
			<div className={ treeViewClasses }>
				<ContentTree 
					data={ this.props.data }
					onSelect={ () => {} }
				/>
			</div>
		);
	}
}

TreeView.contextType = ThemeContext;

export default TreeView;

const	data = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    isOpen: false,
    children: ['/root/david', '/root/jslancer'],
  },
  '/root/david': {
    path: '/root/david',
    type: 'folder',
    isOpen: false,
    children: ['/root/david/readme.md'],
  },
  '/root/david/readme.md': {
    path: '/root/david/readme.md',
    type: 'file',
    isOpen: false,
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/jslancer': {
    path: '/root/jslancer',
    type: 'folder',
    isOpen: false,
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
  },
  '/root/jslancer/projects': {
    path: '/root/jslancer/projects',
    type: 'folder',
    isOpen: false,
    children: ['/root/jslancer/projects/treeview'],
  },
  '/root/jslancer/projects/treeview': {
    path: '/root/jslancer/projects/treeview',
    type: 'folder',
    isOpen: false,
    children: [],
  },
  '/root/jslancer/vblogs': {
    path: '/root/jslancer/vblogs',
    type: 'folder',
    isOpen: false,
    children: [],
  },
};

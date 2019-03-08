import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './TableItem.module.scss';

class TableItem extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const tableItemClasses = ClassNames(styles.tableItem, themeClass);

		return (
			<tr className={ tableItemClasses }>
				
			</tr>
		);
	}
}

TableItem.contextType = ThemeContext;

export default TableItem;

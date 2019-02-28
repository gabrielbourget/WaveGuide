import React from 'react';
import styles from './ColumnWithPaddingPageCradle.module.scss';

const ColumnWithPaddingPageCradle = (props) => (
	<div className={ styles.cradle }>
		{ props.children }
	</div>
);

export default ColumnWithPaddingPageCradle;

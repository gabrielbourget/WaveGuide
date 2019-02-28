import React from 'react';
import styles from './MiddleContentCradle.module.scss';

const MiddleContentCradle = (props) => {
	return (
		<div className={ styles.cradle }>
			{ props.children }
		</div>
	);
};

export default MiddleContentCradle;

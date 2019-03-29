import React from 'react';
import styles from './CoverBackdrop.module.scss';

const CoverBackdrop = (props) => (
	<div 
		className={ styles.backdrop }
		onClick={ props.onClick }
	/>
);

export default CoverBackdrop;

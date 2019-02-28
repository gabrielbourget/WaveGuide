import React, { Component } from 'react';
import styles from './OutlineButton.module.scss';


class OutlineButton extends Component {

	handleClick = () => (
		this.props.onClick()
	);

	render() {
		return (
			<button 
				className={ styles.button } 
				onClick={ this.handleClick }
			>
				{ this.props.buttonText }
			</button>
		);
	}
}

export default OutlineButton;

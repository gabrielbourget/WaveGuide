import React, { Component } from 'react';
import styles from './OutlineButton.module.scss';


class OutlineButton extends Component {

	render() {
		return (
			<button 
				className={ styles.button } 
				onClick={ this.props.handleClick }
			>
				{ this.props.buttonText }
			</button>
		);
	}
}

export default OutlineButton;

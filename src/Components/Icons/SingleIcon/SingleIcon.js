import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleIcon.module.scss';

class SingleIcon extends React.Component {

	static propTypes = {
		size: PropTypes.string
	};

	static defaultProps = {
		size: '30px'
	};

	render() {

		const style = {
			width: this.props.size,
			height: this.props.size
		};		

		return (
			<div style={ style } className={ styles.display }>
				{ this.props.icon }
			</div>
		);
	}
}

export default SingleIcon;

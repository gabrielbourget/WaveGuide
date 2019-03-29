import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './Paragraph.module.scss';

class Paragraph extends React.Component {

	static propTypes = {
		fontSize: PropTypes.string
	}

	static defaultProps = {
		fontSize: '1.5rem'
	}

	render() {

		// - Determine color scheme from context
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		// - Build class list for component's markup.
		const paragraphClasses = ClassNames(styles.paragraph, themeClass);

		const style = {
			fontSize: this.props.fontSize
		}

		return (
			<p 
				className={ paragraphClasses }
				style={ style }
			>
				{ this.props.children }
			</p>
		);
	}
}

Paragraph.contextType = ThemeContext;

export default Paragraph;

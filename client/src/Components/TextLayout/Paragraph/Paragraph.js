import React from 'react';
import ClassNames from 'classnames';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './Paragraph.module.scss';

class Paragraph extends React.Component {


	render() {

		// - Determine color scheme from context
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		// - Build class list for component's markup.
		const paragraphClasses = ClassNames(styles.paragraph, themeClass);

		return (
			<p className={ paragraphClasses }>
				Does this work well? <br/>
				Do the line <br/>
				breaks look nice?
			</p>
		);
	}
}

Paragraph.contextType = ThemeContext;

export default Paragraph;

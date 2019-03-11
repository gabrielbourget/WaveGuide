import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';

import styles from './Footer.module.scss';

class Footer extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const footerClasses = ClassNames(styles.footer, themeClass); 

		return (
			<div className={ footerClasses }>
				<div className={ styles.logo }>

				</div>
				<div className={ styles.footerInfo }>
					<div className={ styles.description }>
						
					</div>
					<div className={ styles.links }>
						
					</div>
				</div>
			</div>
		);
	}
}

Footer.contextType = ThemeContext;

export default Footer;

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ThemeSlider.module.scss';
import IconDisplay from '../../Icons/IconDisplay/IconDisplay';

import { ReactComponent as SunIconDarkTheme } from './SVG/SunIcon/SunIconDarkTheme.svg';
import { ReactComponent as SunIconLightTheme } from './SVG/SunIcon/SunIconLightTheme.svg';
import { ReactComponent as SunIconHighlighted } from './SVG/SunIcon/SunIconHighlighted.svg';

import { ReactComponent as MoonIconDarkTheme } from './SVG/MoonIcon/MoonIconDarkTheme.svg';
import { ReactComponent as MoonIconLightTheme } from './SVG/MoonIcon/MoonIconLightTheme.svg';
import { ReactComponent as MoonIconHighlighted } from './SVG/MoonIcon/MoonIconHighlighted.svg';

class ThemeSlider extends React.Component {
	render() {
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const sliderCradleClasses = ClassNames(styles.sliderCradle, themeClass);

		return (
			<div className={ sliderCradleClasses }>
				<div className={ styles.option1 }>
					<IconDisplay
						size='15px'
						darkTheme={ <SunIconDarkTheme/> }
						lightTheme={ <SunIconLightTheme/> }
						highlighted={ <SunIconHighlighted/> }
					/>
				</div>
				<div className={ styles.option2 }>
					<IconDisplay 
						size='15px'
						darkTheme={ <MoonIconDarkTheme/> }
						lightTheme={ <MoonIconLightTheme/> }
						highlighted={ <MoonIconHighlighted/> }
					/>
				</div>
				<div className={ styles.handle }></div>
			</div>
		);
	}
}

ThemeSlider.contextType = ThemeContext;

export default ThemeSlider;

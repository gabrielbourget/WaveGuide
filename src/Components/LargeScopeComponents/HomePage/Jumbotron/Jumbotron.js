import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { ThemeContext } from '../../../../ThemeContext';

// import { ReactComponent as ChevronDownSkinnyDarkTheme } from './SVG/ChevronDownSkinny/ChevronDownSkinnyDarkTheme.svg';
import ChevronDownSkinnyDarkTheme from './SVG/ChevronDownSkinny/ChevronDownSkinnyDarkTheme';
// import { ReactComponent as WaveIcon } from './SVG/WaveIcon/WaveIconLightTheme.svg';
//import IconDisplay from '../../../Icons/IconDisplay/IconDisplay';
import SingleIcon from '../../../Icons/SingleIcon/SingleIcon';

import styles from './Jumbotron.module.scss';

class Jumbotron extends React.Component {
	render() {
		return (
			<div className={ styles.jumbotron }>
				<h1>
					Welcome to Waveguide, a directory for a <br/> 
					growing and global community of artists <br/>
					forming around Wave music.
				</h1>
				<h2>
					Search through the directory up above to find information on <br/>
					artists in the community. Enter the term 'everyone' in order to <br/>
					return everyone in the directory.
				</h2>
				<h2>
					Scroll down to learn more about the community.
				</h2>
				<div className={ styles.downChevron }>
					<SingleIcon 
						size='30px'
						icon={ <ChevronDownSkinnyDarkTheme/> }
					/>
				</div>
			</div>
		);
	}
}

Jumbotron.contextType = ThemeContext;

export default Jumbotron;


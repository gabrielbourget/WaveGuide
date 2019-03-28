import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import Jumbotron from './Jumbotron/Jumbotron';
import FilledButton from '../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from './HomePage.module.scss';

class HomePage extends React.Component {

	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		const bottomContentClasses = ClassNames(styles.bottomContent, themeClass);
		const keyPlaylistsCradleClasses = ClassNames(styles.keyPlaylistsCradle, themeClass);
		const keyPlaylistsClasses = ClassNames(styles.keyPlaylists, themeClass);

		return (
			<React.Fragment>
				<FromTheTopCradle>
					<Jumbotron/>
				</FromTheTopCradle>
				<div className={ bottomContentClasses }>
					<h2 className={ styles.introToWaveBlurb }>
						Out of the new, distributed reality of social networks and streaming platforms, a global 
						community of artists has gathered around a type of music collectively known as wave. Read more about this 
						community, and the art being created and shared within it below. 
					</h2>

					<div style={ {display:'grid', width: '100%', placeContent: 'center'} }>
						<Link to='/documentation/97df66de-33fb-48cd-9543-0c698821d5d8'>
							<FilledButton text='READ FURTHER' shape='square' onClick={ () => {} }/>
						</Link>
					</div>

					<HorizontalDivider height='4px'/>
				</div>	
				<div className={ keyPlaylistsCradleClasses }>
					<div className={ keyPlaylistsClasses }>
						<h2>
							Click through to these spotify playlists to get an introduction to some of the sounds of the scene.
						</h2>
						<ul style={ {paddingLeft: '20px', display: 'grid', alignItems: 'center', justifyItems: 'start' } }>
							<li>
								<p>
									<a 
										href="https://open.spotify.com/user/liquidritual/playlist/57GAUprXFP9XIZaupQzIsS?si=vhEAliiAT0K16N1KRNISlw"
										target='_blank'
										rel='noopener noreferrer'
									>
										Wave Essentials (Liquid Ritual)
									</a>
								</p>
							</li>
							<li>
								<p>
									<a 
										href="https://open.spotify.com/album/2MeQtgz5OzKfkOoMqHlhFr?si=5hP5A3jkTj6s6F13RzIAog"
										target='_blank'
										rel='noopener noreferrer'
									>
										Liquid Ritual Volume 1 
									</a>
								</p>
							</li>	
							<li>
								<p>
									<a 
										href="https://open.spotify.com/album/3Godq9AabVjhEVCuJPFGIF?si=JzD7OiiWRkO53ZhzOGWH7Q"
										target='_blank'
										rel='noopener noreferrer'
									>
										Vibe Digital Volume 1 
									</a>
								</p>
							</li>	
							<li>
								<p>
									<a 
										href="https://open.spotify.com/user/soundofshade/playlist/7lmO3tR8k5Rf0xUNPBUfV3?si=cfc_I885RICy07Adtu4y4A"
										target='_blank'
										rel='noopener noreferrer'
									>
										Shxde Selects
									</a>
								</p>
							</li>								
						</ul>							
					</div>		
				</div>				
			</React.Fragment>			
		);
	}
}

HomePage.contextType = ThemeContext;

export default HomePage;

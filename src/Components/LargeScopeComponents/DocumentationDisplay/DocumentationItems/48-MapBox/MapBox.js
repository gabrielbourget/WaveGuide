import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class MapBox extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Map Component</h1>

					<p>
						<TextIndent>Central</TextIndent> to many modern web applications is the implementation of some sort of map component, which 
						is used in coordination with the rest of the application's featureas and functionality. This might be in a context like 
						Google Maps, where navigating a map is the main activity that users carry out in the application. It might also be in the
						context of an application like Uber, where the map is a powerful UX paradigm that allows users and drivers to coordinate 
						easily with eachother to arrange rides. 
					</p>

					<p>
						<TextIndent>As</TextIndent> I am working on building a directory that provides useful information to a global community of 
						artists, I can identify a number of use cases where having a map component to layer information onto would be helpful to 
						providing an effective user experience. One example, would be by placing artists on a map according to the city that they're 
						based in. Another would be to create a layer of markers indicating the locations of upcoming events in the scene. 
					</p>

					<p>
						<TextIndent>In</TextIndent> order to achieve such things, I would first need a map component which could be provided with the 
						right types of data in order to provide such layers to users. I followed 
						<a href="https://medium.com/@julianne.marik/creating-a-mapbox-react-component-1314d2796b7" target='_blank' rel='noopen noreferrer'> this </a>
						tutorial in order to get a feel for what building one of these is like, and how to integrate it into an overall Redux structure. 
						I ended up registering an account of my own with MapBox in order to be provided with an API key, and I mirrored the structure of this 
						tutorial component in order to integrate it into my application. An instance of this map component, along with a layer showing the location 
						clustering of the artists in the community is provided below. 
					</p>

					<div className={ initObject.tempPlaceholderClasses }>
						[ Map component with artist location clustering view ]
					</div>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/8f036fd9-596b-40eb-9f79-311e0e9afa79'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/cf74736d-037c-45ab-a517-be63fbb05987'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

MapBox.contextType = ThemeContext;

export default MapBox;

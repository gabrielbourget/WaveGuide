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

class ThunkMiddleware extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Thunk Middleware</h1>

					<p>
						<TextIndent>The</TextIndent> functionality that comes packaged with the Redux library is great. However, one hole that is present
	 					reveals itself when you start seeing the need to perform asynchronous actions such as making network requests for dynamic information 
	 					from a server. Actions that are dispatched to redux store are evaluated synchronously, moving through the reducer and updating the store 
	 					right away.
 					</p> 

					<p>
						<TextIndent>Even</TextIndent> though the application I have written is not currently hooked up to an API server, I have partial designs and 
						plans moving towards putting one together (which I discuss in the <Link to='/documentation/994199e8-5e34-4e9a-8ad7-ba84d1faa851'>Back End </Link>
						section of the documentation). In anticipation of distributing the reach of the program to a back end and persisting graph database, I wanted to 
						lay as much of the road needed in my state management strategy to prepare for that. 
					</p>

					<p>
						<TextIndent>In</TextIndent> order to prep for asynchronous network requests to this server then, I decided to use the Redux Thunk library. Sitting 
						as middleware within the redux implementation, this library allowed me to write asynchronous actions, dispatching a request action, followed by 
						a fetch failure or fetch success action depending on how the network request went. This process is seen in my <code>fetchArtists</code> action creator, 
						displayed in the code sample below.
					</p>

					<div className={ initObject.tempPlaceholderClasses }>
						[ fetchArtists() action creator function ]
					</div>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/b9f85483-d91c-44b7-9723-f9a96632ac65'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/469a3266-ff6b-4879-948d-616af79f8e39'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
					
				</article>
			</FromTheTopCradle>
		);
	}
}

ThunkMiddleware.contextType = ThemeContext;

export default ThunkMiddleware;

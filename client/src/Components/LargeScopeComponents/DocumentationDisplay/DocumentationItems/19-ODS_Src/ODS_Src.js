import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';

class ODS_Src extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1><code>src</code> Directory</h1>

					<p>
						<TextIndent>The</TextIndent> <code>src</code> directory, as mentioned in the previous section is the boundary within 
						which all of the source code being considered in React's build process is being contained. A major topic of discussion 
						within this section of the documentation will of course be the components folder where I have stored the component library
						that is composed together to form the overall application. Additionally, I will be going over:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									The <code>Datasets</code> directory, in which I am currently storing the artist profile information that is used to 
									populate the profiles as application users search through the directory. 
								</p>
							</li>
							<li>
								<p>
									The <code>GlobalStyles</code> directory, in which I have generated and maintain a set of stylesheets that contain 
									rules and variables which globally control areas such as base styling, colors, fonts, box shadows, and z-indexes. 
								</p>
							</li>
							<li>
								<p>
									The <code>Helpers</code> directory, which has global data structures such as enums that help with application logic, 
									and a script that converts all of my social media icon SVGs to functional React components, and exports them to a 
									return object that groups them by network and visual variation (dark theme, light theme, highlighted).
								</p>
							</li>
							<li>
								<p>
									The <code>Redux</code> directory, which contains all the data structures and logic working together to implement the 
									flux design pattern for the application's state management. You can read more about how I implemented state management 
									into the application in the <Link to='/documentation/9cb887d0-a6d6-4a68-985b-0d0fb4a6836b'> State Management</Link> section.
								</p>
							</li>
						</ul>
					</p>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/3033ce2e-9598-4d6c-9819-9666b49176f4'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/43b4e475-94f9-4674-840e-0e955238b2aa'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Src.contextType = ThemeContext;

export default ODS_Src;

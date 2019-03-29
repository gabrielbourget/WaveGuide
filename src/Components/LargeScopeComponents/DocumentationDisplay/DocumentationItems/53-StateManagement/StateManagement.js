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

class StateManagement extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>State Management</h1>

					<p>
						<TextIndent>While</TextIndent> this community directory is not incredibly complicated at the moment, I wanted to take the time 
						to build it a technological foundation that could scale over time as its features became more numerous and involved, and as it 
						relied on larger and more complex data sources to feed its user interface components. The unidirectional data flow of the Redux 
						pattern was an obvious fit for me, giving me the structure I would need to set up state management for the application's current 
						functionality, with the ability to extend it in a straightforward manner in the future. 
					</p>

					<p>
						This section of the documentation goes into detail on how I used the redux library, along with other 
						associated tools to implement the flux design pattern. I go into:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									The parts of my redux implementation, and how they came together to provide state management for the application.
								</p>
							</li>
							<li>
								<p>
									The special cases where I kept some local state in components, along with the reasoning that I went through to come to
									that decision.
								</p>
							</li>
							<li>
								<p>
									My use of Redux Thunk middleware in order to scaffold the capability to dispatch asynchronous actions once my back end system is 
									threaded together and operational.
								</p>
							</li>
							<li>
								<p>
									Some of the modifications and improvements I am planning to make in the future regarding state management in the application.
								</p>
							</li>
						</ul>
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/a6405a7a-5467-4e28-a388-c48a47284850'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/c51a43be-2a4b-4fac-b40b-ec04e0d64a95'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

StateManagement.contextType = ThemeContext;

export default StateManagement;

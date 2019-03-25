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

class ODS_Redux extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>The <code>Redux</code> Directory</h1>

					<p>
						<TextIndent>As</TextIndent> mentioned previously in the documentation, I chose to go with Redux as my strategy for managing 
						the state tree of my application. I resonate strongly with the simplicity of a unidirectional information flow paradigm, and 
						the learning resources/documentation/community support around this implementation of the Flux pattern were very attractive to 
						a beginner and learner like myself. 
					</p>

					<p>
						<TextIndent>This</TextIndent> directory is where I stored the different logic and data structures accessed and used by the 
						application in order to hook up and operate this information flow throughout its operation. Co-located in this directory are:
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									The action strings associated with the different action types in my application.
								</p>
							</li>
							<li>
								<p>
									The action creator functions which are responsible for dispatching these actions to the store, along with their appropriate payloads.
								</p>
							</li>
							<li>
								<p>
									The reducers which process these actions, resolving how their consequences modifies the state tree, and then reflecting those changes 
									in the new copy of state that they return. 
								</p>
							</li>
							<li>
								<p>
									A <code>helpers.js</code> file that encapsulates and exports logic that the reducers use in order to search through the artists when 
									a user enters a query in the search bar, and to sort the returned artists alphabetically and reverse alphabetically.
								</p>
							</li>
							<li>
								<p>
									The store, which initializes the application's initial state, creates the store, hooks up middleware, sets up hot reloading for reducers,
									and exports the store to be used at the top level in the <code>Provider</code> component that wraps the application.
								</p>
							</li>
						</ul>
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/0772ee70-a178-4be0-8db3-989ae5ca743f'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/28005464-9c1f-413e-952f-d422242ed0ff'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

ODS_Redux.contextType = ThemeContext;

export default ODS_Redux;

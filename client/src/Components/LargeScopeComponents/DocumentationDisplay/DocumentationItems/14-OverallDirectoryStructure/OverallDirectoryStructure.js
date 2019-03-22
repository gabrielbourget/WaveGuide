import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../../ThemeContext';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';

class OverallDirectoryStructure extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Overall Directory Structure</h1>

					<p>
						<TextIndent>As</TextIndent> mentioned in the previous section, I am planning on implementing a back-end server 
						in addition to the client that I've developed so far. Once I've moved into development on it, it will have its own 
						directory within the top level of the application structure called 'server'. The two main sections that I'll be going into at this top level will be the overall project 
						structure of the client, along with the Design folder.
					</p>

					<h2>Items Excluded</h2>

					<p>
						<TextIndent>Due</TextIndent> to the fact that they do not differ so much from the standard 
						boilerplate of a modern web application, I will not be expanding into too much detail on: 
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>
									The various .rc files that provide customization and added functionality to associated programs such as linters 
									and Webpack, along with the gitignore file that calibrates what gets included in my commits. 
								</p>
							</li>
							<li>
								<p>
									The license and readme files associated with my git repository.
								</p>
							</li>
							<li>
								<p>
									The build folder within the client, which contains all the optimized and stripped down assets needed to 
									serve the client application in a production context. 
								</p>
							</li>
							<li>
								<p>
									The node modules folder, containing the different package dependencies that the client program depends on to build 
									and run, along with other utilties like <code>package.json</code> and <code>package-lock.json</code>.
								</p>
							</li>
						</ul>
					</p>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/0d209cbd-5b73-4e52-901e-1d012299acfd'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/2c4c531e-e905-41f4-ac7c-bc6018bab0a6'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

OverallDirectoryStructure.contextType = ThemeContext;

export default OverallDirectoryStructure;

import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';
import { Link } from 'react-router-dom';

import styles from './TableOfContents.module.scss';
import { prepareComponent } from './helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';

class TableOfContents extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.tableOfContentsClasses }>
					<ul>
						<h1>Table of Contents</h1>
						<li>
							<Link>
								<h4>Overview</h4>
							</Link>
							<ul style={{paddingLeft: '20px'}}>
								<li>
									<Link>
										<h4>Intro to the Wave Scene</h4>
									</Link>
								</li>
								<li>
									<Link>
										<h4>Application Overview</h4>
									</Link>
								</li>
								<li>
									<Link>
										<h4>Application Scope</h4>
									</Link>
								</li>
								<li>
									<Link>
										<h4>Tech Stack</h4>
									</Link>
								</li>
								<li>
									<Link>
										<h4>Project Structure</h4>
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link>
								<h4>Front End</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>State Management</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Back End</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Design</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Routing</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Testing</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Accessibility</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Security</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Future Improvements</h4>
							</Link>
						</li>
						<li>
							<Link>
								<h4>Active Problem Areas</h4>
							</Link>
						</li>
					</ul>
				</div>
			</FromTheTopCradle>
		);
	}
}

TableOfContents.contextType = ThemeContext;

export default TableOfContents;


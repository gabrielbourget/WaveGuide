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
					<ul style={ {width: '100%'} }>
						<h1 style={ {marginBottom: '20px'} }>Table of Contents</h1>
						{/* OVERVIEW */}
						<li>
							<Link>
								<p>Overview</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link>
										<p>Intro to the Wave Scene</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Application Overview</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Application Scope</p>
									</Link>										
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link>
												<p>Technical Scope</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Feature Scope</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link>
										<p>Tech Stack</p>
									</Link>										
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link>
												<p>React</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Redux</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Express</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Neo4J</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link>
										<p>Project Structure</p>
									</Link>										
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link>
												<p>Overall Directory Structure</p>
											</Link>												
											<ul style={ {paddingLeft: '20px'} }>
												<li>
													<Link>
														<p>Excluded Items</p>
													</Link>
												</li>
												<li>
													<Link>
														<p>client</p>
													</Link>														
													<ul style={ {paddingLeft: '20px'} }>
														<li>
															<Link>
																<p>build</p>
															</Link>
														</li>
														<li>
															<Link>
																<p>public</p>
															</Link>
														</li>
														<li>
															<Link>
																<p>src</p>
															</Link>																
															<ul style={ {paddingLeft: '20px'} }>
																<li>
																	<Link>
																		<p>Components</p>
																	</Link>
																</li>
																<li>
																	<Link>
																		<p>Datasets</p>
																	</Link>
																</li>
																<li>
																	<Link>
																		<p>Global Styles</p>
																	</Link>
																</li>
																<li>
																	<Link>
																		<p>Helpers</p>
																	</Link>
																</li>
																<li>
																	<Link>
																		<p>Redux</p>
																	</Link>
																</li>
																<li>
																	<Link>
																		<p>index.js</p>
																	</Link>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<Link>
														<p>Design</p>
													</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link>
												<p>Component Directory Structure</p>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						{/* FRONT END */}
						<li>
							<Link>
								<p>Front End</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link>
										<p>React</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>CSS Modules</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Global Styles</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Color Themes</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Render-Time Component Preparation</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Implemented Design Patterns</p>
									</Link>
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link>
												<p>Buttons</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Selection Indicators</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Dividers</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Search Bar</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Cradles</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Profile Card</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Card Gallery</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Graph Visualization</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Map</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Side Menu</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Table</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Tree View</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Future Components</p>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						{/* STATE MANAGEMENT */}
						<li>
							<Link>
								<p>State Management</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link>
										<p>Redux</p>
									</Link>
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link>
												<p>Action Strings</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Action Creators</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Reducer</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Store</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>AppContainer</p>
											</Link>
										</li>
										<li>
											<Link>
												<p>Provider</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link>
										<p>Local State In Some Components</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Thunk Middleware</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Future Improvements</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* BACK END */}
						<li>
							<Link>
								<p>Back End</p>
							</Link>
						</li>
						{/* DESIGN */}
						<li>
							<Link>
								<p>Design</p>
							</Link>
						</li>
						{/* ROUTING */}
						<li>
							<Link>
								<p>Routing</p>
							</Link>
						</li>
						{/* TESTING */}
						<li>
							<Link>
								<p>Testing</p>
							</Link>
						</li>
						{/* ACCESSIBILITY */}
						<li>
							<Link>
								<p>Accessibility</p>
							</Link>
						</li>
						{/* SECURITY */}
						<li>
							<Link>
								<p>Security</p>
							</Link>
						</li>
						{/* FUTURE IMPROVEMENTS */}
						<li>
							<Link>
								<p>Future Improvements</p>
							</Link>
						</li>
						{/* ACTIVE PROBLEM AREAS */}
						<li>
							<Link>
								<p>Active Problem Areas</p>
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


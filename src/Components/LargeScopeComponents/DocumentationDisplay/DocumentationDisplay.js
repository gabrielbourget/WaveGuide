/* eslint no-use-before-define: 0 */  // --> OFF

import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import { prepareComponent } from './helpers';
import styles from './DocumentationDisplay.module.scss';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import DocumentationTree from './DocumentationTree/DocumentationTree';  
import TreeToggleButton from './TreeToggleButton/TreeToggleButton'; 			 

import routingTable from './routingTable_v2'; // - Holds list of pages and their corresponding ids.

// - Import all documentation pages.
import TableOfContents from './DocumentationItems/01-TableOfContents/TableOfContents';
import Overview from './DocumentationItems/02-Overview/Overview';
import IntroToTheWaveScene from './DocumentationItems/03-IntroToTheWaveScene/IntroToTheWaveScene';
import ApplicationOverview from './DocumentationItems/04-ApplicationOverview/ApplicationOverview';
import ApplicationScope from './DocumentationItems/05-ApplicationScope/ApplicationScope';
import TechStack from './DocumentationItems/08-TechStack/TechStack';
import ProjectStructure from './DocumentationItems/13-ProjectStructure/ProjectStructure';
import OverallDirectoryStructure from './DocumentationItems/14-OverallDirectoryStructure/OverallDirectoryStructure';
import ODS_Client from './DocumentationItems/16-ODS_Client/ODS_Client';
import ODS_Public from './DocumentationItems/18-ODS_Public/ODS_Public';
import ODS_Src from './DocumentationItems/19-ODS_Src/ODS_Src';
import ODS_Components from './DocumentationItems/20-ODS_Components/ODS_Components';
import ODS_Datasets from './DocumentationItems/21-ODS_Datasets/ODS_Datasets';
import ODS_GlobalStyles from './DocumentationItems/22-ODS_GlobalStyles/ODS_GlobalStyles';
import ODS_Helpers from './DocumentationItems/23-ODS_Helpers/ODS_Helpers';
import ODS_Redux from './DocumentationItems/24-ODS_Redux/ODS_Redux';
import ODS_Design from './DocumentationItems/26-ODS_Design/ODS_Design';
import InternalComponentStructure from './DocumentationItems/27-InternalComponentStructure/InternalComponentStructure';
import CDS_MainComponentFile from './DocumentationItems/28-CDS_MainComponentFile/CDS_MainComponentFile';
import CDS_Stylesheets from './DocumentationItems/29-CDS_Stylesheets/CDS_Stylesheets';
import CDS_HelpersAndResources from './DocumentationItems/30-CDS_HelpersAndResources/CDS_HelpersAndResources';
import CDS_Tests from './DocumentationItems/31-CDS_Tests/CDS_Tests';
import CDS_NestedComponents from './DocumentationItems/32-CDS_NestedComponents/CDS_NestedComponents';
import FrontEnd from './DocumentationItems/33-FrontEnd/FrontEnd';
import React_DocArticle from './DocumentationItems/34-React_DocArticle/React_DocArticle';
import CSSModules from './DocumentationItems/35-CSSModules/CSSModules';
import ColorThemes from './DocumentationItems/37-ColorThemes/ColorThemes';
import RenderTimeComponentPreparation from './DocumentationItems/38-RenderTimeComponentPreparation/RenderTimeComponentPreparation';
import UIDesignPatterns from './DocumentationItems/39-UIDesignPatterns/UIDesignPatterns';
import Buttons from './DocumentationItems/40-Buttons/Buttons';
import SelectionIndicators from './DocumentationItems/41-SelectionIndicators/SelectionIndicators';
import Dividers from './DocumentationItems/42-Dividers/Dividers';
import SearchBar from './DocumentationItems/43-SearchBar/SearchBar';
import Cradles from './DocumentationItems/44-Cradles/Cradles';
import ProfileCard from './DocumentationItems/45-ProfileCard/ProfileCard';
import CardGallery from './DocumentationItems/46-CardGallery/CardGallery';
import GraphVisualization from './DocumentationItems/47-GraphVisualization/GraphVisualization';
import MapBox from './DocumentationItems/48-MapBox/MapBox';
import SideMenu from './DocumentationItems/49-SideMenu/SideMenu';
import Table from './DocumentationItems/50-Table/Table';
import TreeView from './DocumentationItems/51-TreeView/TreeView';
import FrontEnd_FutureImprovements from './DocumentationItems/52-FrontEnd_FutureImprovements/FrontEnd_FutureImprovements';
import StateManagement from './DocumentationItems/53-StateManagement/StateManagement';
import SpecialCasesComponentState from './DocumentationItems/61-SpecialCasesComponentState/SpecialCasesComponentState';
import ThunkMiddleware from './DocumentationItems/62-ThunkMiddleware/ThunkMiddleware';
import StateManagement_FutureImprovements from './DocumentationItems/63-StateManagement_FutureImprovements/StateManagement_FutureImprovements';
import BackEnd from './DocumentationItems/64-BackEnd/BackEnd';
import APIServer from './DocumentationItems/65-Server/Server';
import Database from './DocumentationItems/66-Database/Database';
import IntroToGraphs from './DocumentationItems/68-IntroToGraphs/IntroToGraphs';
import Neo4JImplementation from './DocumentationItems/69-Neo4JImplementation/Neo4JImplementation';
import Neo4JDifferentiation from './DocumentationItems/70-Neo4JDifferentiation/Neo4JDifferentiation';
import DataModel from './DocumentationItems/71-DataModel/DataModel';
import Design from './DocumentationItems/73-Design/Design';
import Routing from './DocumentationItems/77-Routing/Routing';
import Testing from './DocumentationItems/80-Testing/Testing';
import Accessibility from './DocumentationItems/83-Accessibility/Accessibility';
import Security from './DocumentationItems/88-Security/Security';
import FutureImprovements from './DocumentationItems/91-FutureImprovements/FutureImprovements';
import ActiveProblemAreas from './DocumentationItems/92-ActiveProblemAreas/ActiveProblemAreas';
import SVGRenderingProblem from './DocumentationItems/94-SVGRenderingProblem/SVGRenderingProblem';
import CardGalleryProblem from './DocumentationItems/96-CardGalleryProblem/CardGalleryProblem';

class DocumentationDisplay extends React.Component { 

	state = {
		treeOpened: false,
		windowWidth: window.innerWidth
	};

	handleResize = () => this.setState( {windowWidth: window.innerWidth });

	toggleTree = () => {
		const prevState = this.state;
		this.setState( (prevState) => (
			{ treeOpened: !prevState.treeOpened }
		));
	};

	conditionalTreeRender = () => {
		if (this.state.windowWidth > 650) return <DocumentationTree nodeClick={ this.toggleTree }/>;
		if (this.state.windowWidth <= 650 && this.state.treeOpened) {
			return (
				<React.Fragment>
					<DocumentationTree nodeClick={ this.toggleTree }/>	
					<TreeToggleButton 
						onClick={ this.toggleTree }
						status='open'
					/>
				</React.Fragment>
			);
		}
		else return (
			<TreeToggleButton 
				onClick={ this.toggleTree }
				status='closed'
			/>
		);
	};

  componentDidMount = () => {
		this.setState( { windowWidth: window.innerWidth } );
		window.addEventListener('resize', this.handleResize);
	};

	componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);  

	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.documentationDisplayClasses }>
					
					{ this.conditionalTreeRender() }

					<Route path='/documentation' exact component={ Overview }/>
					<Route 
						path={ `/documentation/:articleId` }
						render= { () => {

							const path = this.props.location.pathname;

							// - Special case for buttons since it needs props 
							if (path === '/documentation/ac20c586-039e-4ea4-9b20-8a41cdab3a38') {
								return <Buttons onThemeSwitch={ this.props.onThemeSwitch } />
							}

							else return (
								React.createElement(routingTable[path])
							)
						}}
					/>
				</div>
			</FromTheTopCradle>
		);
	}
}

DocumentationDisplay.contextType = ThemeContext;

const DocumentationDisplayWithRouter = withRouter(DocumentationDisplay);

export default DocumentationDisplayWithRouter;

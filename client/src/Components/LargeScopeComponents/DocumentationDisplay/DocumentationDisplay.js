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

import routingTable from './routingTable_v2'; // - Holds list of pages and their corresponding ids.

// - Import all documentation pages.
import TableOfContents from './DocumentationItems/01-TableOfContents/TableOfContents';
import Overview from './DocumentationItems/02-Overview/Overview';
import IntroToTheWaveScene from './DocumentationItems/03-IntroToTheWaveScene/IntroToTheWaveScene';
import ApplicationOverview from './DocumentationItems/04-ApplicationOverview/ApplicationOverview';
import ApplicationScope from './DocumentationItems/05-ApplicationScope/ApplicationScope';
import TechnicalScope from './DocumentationItems/06-TechnicalScope/TechnicalScope';
import Overview_FeatureScope from './DocumentationItems/07-Overview_FeatureScope/Overview_FeatureScope';
import TechStack from './DocumentationItems/08-TechStack/TechStack';
// import OverviewReact from './DocumentationItems/09-OverviewReact/OverviewReact';
// import OverviewRedux from './DocumentationItems/10-OverviewRedux/OverviewRedux';
// import OverviewExpress from './DocumentationItems/11-OverviewExpress/OverviewExpress';
// import OverviewNeo4J from './DocumentationItems/12-OverviewNeo4J/OverviewNeo4J';
import ProjectStructure from './DocumentationItems/13-ProjectStructure/ProjectStructure';
import OverallDirectoryStructure from './DocumentationItems/14-OverallDirectoryStructure/OverallDirectoryStructure';
import ODS_ExcludedItems from './DocumentationItems/15-ODS_ExcludedItems/ODS_ExcludedItems';
import ODS_Client from './DocumentationItems/16-ODS_Client/ODS_Client';
import ODS_Build from './DocumentationItems/17-ODS_Build/ODS_Build';
import ODS_Public from './DocumentationItems/18-ODS_Public/ODS_Public';
import ODS_Src from './DocumentationItems/19-ODS_Src/ODS_Src';
import ODS_Components from './DocumentationItems/20-ODS_Components/ODS_Components';
import ODS_Datasets from './DocumentationItems/21-ODS_Datasets/ODS_Datasets';
import ODS_GlobalStyles from './DocumentationItems/22-ODS_GlobalStyles/ODS_GlobalStyles';
import ODS_Helpers from './DocumentationItems/23-ODS_Helpers/ODS_Helpers';
import ODS_Redux from './DocumentationItems/24-ODS_Redux/ODS_Redux';
import ODS_IndexJS from './DocumentationItems/25-ODS_IndexJS/ODS_IndexJS';
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
// import GlobalStyles from './DocumentationItems/36-GlobalStyles/GlobalStyles';
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
import Redux from './DocumentationItems/54-Redux/Redux';
import ActionStrings from './DocumentationItems/55-ActionStrings/ActionStrings';
import ActionCreators from './DocumentationItems/56-ActionCreators/ActionCreators';
import Reducer from './DocumentationItems/57-Reducer/Reducer';
import Store from './DocumentationItems/58-Store/Store';
import AppContainer from './DocumentationItems/59-AppContainer/AppContainer';
import Provider from './DocumentationItems/60-Provider/Provider';
import SpecialCasesComponentState from './DocumentationItems/61-SpecialCasesComponentState/SpecialCasesComponentState';
import ThunkMiddleware from './DocumentationItems/62-ThunkMiddleware/ThunkMiddleware';
import StateManagement_FutureImprovements from './DocumentationItems/63-StateManagement_FutureImprovements/StateManagement_FutureImprovements';
import BackEnd from './DocumentationItems/64-BackEnd/BackEnd';
import APIServer from './DocumentationItems/65-Server/Server';
import Database from './DocumentationItems/66-Database/Database';
// import Neo4JIntro from './DocumentationItems/67-Neo4JIntro/Neo4JIntro';
import IntroToGraphs from './DocumentationItems/68-IntroToGraphs/IntroToGraphs';
import Neo4JImplementation from './DocumentationItems/69-Neo4JImplementation/Neo4JImplementation';
import Neo4JDifferentiation from './DocumentationItems/70-Neo4JDifferentiation/Neo4JDifferentiation';
import DataModel from './DocumentationItems/71-DataModel/DataModel';
import BackEnd_FutureImprovements from './DocumentationItems/72-BackEnd_FutureImprovements/BackEnd_FutureImprovements';
import Design from './DocumentationItems/73-Design/Design';
import IconLibrary from './DocumentationItems/74-IconLibrary/IconLibrary';
import Fonts from './DocumentationItems/75-Fonts/Fonts';
import ColorScheme from './DocumentationItems/76-ColorScheme/ColorScheme';
import Routing from './DocumentationItems/77-Routing/Routing';
import TopLevelApplicationRouting from './DocumentationItems/78-TopLevelApplicationRouting/TopLevelApplicationRouting';
import DynamicRouting from './DocumentationItems/79-DynamicRouting/DynamicRouting';
import Testing from './DocumentationItems/80-Testing/Testing';
import SmokeTests from './DocumentationItems/81-SmokeTests/SmokeTests';
import Testing_FutureImprovements from './DocumentationItems/82-Testing_FutureImprovements/Testing_FutureImprovements';
import Accessibility from './DocumentationItems/83-Accessibility/Accessibility';
import SemanticHTML from './DocumentationItems/84-SemanticHTML/SemanticHTML';
import Images from './DocumentationItems/85-Images/Images';
import ColorContrast from './DocumentationItems/86-ColorContrast/ColorContrast';
import Accessibility_FutureImprovements from './DocumentationItems/87-Accessibility_FutureImprovements/Accessibility_FutureImprovements';
import Security from './DocumentationItems/88-Security/Security';
import Security_FeatureScope from './DocumentationItems/89-Security_FeatureScope/Security_FeatureScope';
import AnchorLinks from './DocumentationItems/90-AnchorLinks/AnchorLinks';
import FutureImprovements from './DocumentationItems/91-FutureImprovements/FutureImprovements';
import ActiveProblemAreas from './DocumentationItems/92-ActiveProblemAreas/ActiveProblemAreas';
// import ReactRefsProblem from './DocumentationItems/93-ReactRefsProblem/ReactRefsProblem';
import SVGRenderingProblem from './DocumentationItems/94-SVGRenderingProblem/SVGRenderingProblem';
// import LintingProblem from './DocumentationItems/95-LintingProblem/LintingProblem';
import CardGalleryProblem from './DocumentationItems/96-CardGalleryProblem/CardGalleryProblem';

class DocumentationDisplay extends React.Component { 

	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.documentationDisplayClasses }>
					<DocumentationTree/>
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

// <Buttons onThemeSwitch={ this.props.onThemeSwitch }/>

DocumentationDisplay.contextType = ThemeContext;

const DocumentationDisplayWithRouter = withRouter(DocumentationDisplay);

export default DocumentationDisplayWithRouter;

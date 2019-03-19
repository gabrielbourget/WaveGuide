import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';
import { withRouter } from 'react-router';

import { prepareComponent } from './helpers';
import styles from './DocumentationDisplay.module.scss';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import DocumentationItem from './DocumentationItem/DocumentationItem'; // - TODO -> Eventually import list of components that
import DocumentationTree from './DocumentationTree/DocumentationTree'; //   			  use that one to build pages. 

import documentationItemIndex from './documentationItemIndex'; // - Holds list of pages and their corresponding ids.

// - Import all documentation pages.
import TableOfContents from './DocumentationItems/TableOfContents/TableOfContents';
// import Overview from './DocumentationItems/Overview/Overview';
// import IntroToTheWaveScene from './DocumentationItems/IntroToTheWaveScene/IntroToTheWaveScene';
// import ApplicationOverview from './DocumentationItems/ApplicationOverview/ApplicationOverview';
// import ApplicationScope from './DocumentationItems/ApplicationScope/ApplicationScope';
// import Overview_FeatureScope from './DocumentationItems/Overview_FeatureScope/Overview_FeatureScope';
// import TechStack from './DocumentationItems/TechStack/TechStack';
// import OverviewReact from './DocumentationItems/OverviewReact/OverviewReact';
// import OverviewRedux from './DocumentationItems/OverviewRedux/OverviewRedux';
// import OverviewExpress from './DocumentationItems/OverviewExpress/OverviewExpress';
// import OverviewNeo4J from './DocumentationItems/OverviewNeo4J/OverviewNeo4J';
// import ProjectStructure from './DocumentationItems/ProjectStructure/ProjectStructure';
// import OverallDirectoryStructure from './DocumentationItems/OverallDirectoryStructure/OverallDirectoryStructure';
// import ODS_ExcludedItems from './DocumentationItems/ODS_ExcludedItems/ODS_ExcludedItems';
// import ODS_Client from './DocumentationItems/ODS_Client/ODS_Client';
// import ODS_Build from './DocumentationItems/ODS_Build/ODS_Build';
// import ODS_Public from './DocumentationItems/ODS_Public/ODS_Public';
// import ODS_Src from './DocumentationItems/ODS_Src/ODS_Src';
// import ODS_Components from './DocumentationItems/ODS_Components/ODS_Components';
// import ODS_Datasets from './DocumentationItems/ODS_Datasets/ODS_Datasets';
// import ODS_GlobalStyles from './DocumentationItems/ODS_GlobalStyles/ODS_GlobalStyles';
// import ODS_Helpers from './DocumentationItems/ODS_Helpers/ODS_Helpers';
// import ODS_Redux from './DocumentationItems/ODS_Redux/ODS_Redux';
// import ODS_IndexJS from './DocumentationItems/ODS_IndexJS/ODS_IndexJS';
// import ODS_Design from './DocumentationItems/ODS_Design/ODS_Design';
// import ComponentDirectoryStructure from './DocumentationItems/ComponentDirectoryStructure/ComponentDirectoryStructure';
// import CDS_MainComponentFile from './DocumentationItems/CDS_MainComponentFile/CDS_MainComponentFile';
// import CDS_Stylesheets from './DocumentationItems/CDS_Stylesheets/CDS_Stylesheets';
// import CDS_Helpers from './DocumentationItems/CDS_Helpers/CDS_Helpers';
// import CDS_Tests from './DocumentationItems/CDS_Tests/CDS_Tests';
// import CDS_NestedComponents from './DocumentationItems/CDS_NestedComponents/CDS_NestedComponents';
// import FrontEnd from './DocumentationItems/FrontEnd/FrontEnd';
// import React_DocArticle from './DocumentationItems/React/React';
// import CSSModules from './DocumentationItems/CSSModules/CSSModules';
// import GlobalStyles from './DocumentationItems/GlobalStyles/GlobalStyles';
// import ColorThemes from './DocumentationItems/ColorThemes/ColorThemes';
// import RenderTimeComponentPreparation from './DocumentationItems/RenderTimeComponentPreparation/RenderTimeComponentPreparation';
// import UIDesignPatterns from './DocumentationItems/UIDesignPatterns/UIDesignPatterns';
// import Buttons from './DocumentationItems/Buttons/Buttons';
// import SelectionIndicators from './DocumentationItems/SelectionIndicators/SelectionIndicators';
// import Dividers from './DocumentationItems/Dividers/Dividers';
// import SearchBar from './DocumentationItems/SearchBar/SearchBar';
// import Cradles from './DocumentationItems/Cradles/Cradles';
// import ProfileCard from './DocumentationItems/ProfileCard/ProfileCard';
// import CardGallery from './DocumentationItems/CardGallery/CardGallery';
// import GraphVisualization from './DocumentationItems/GraphVisualization/GraphVisualization';
// import MapBox from './DocumentationItems/MapBox/MapBox';
// import SideMenu from './DocumentationItems/SideMenu/SideMenu';
// import Table from './DocumentationItems/Table/Table';
// import TreeView from './DocumentationItems/TreeView/TreeView';
// import UIPatterns_FutureImprovements from './DocumentationItems/UIPatterns_FutureImprovements/UIPatterns_FutureImprovements';
// import StateManagement from './DocumentationItems/StateManagement/StateManagement';
// import Redux from './DocumentationItems/Redux/Redux';
// import ActionStrings from './DocumentationItems/ActionStrings/ActionStrings';
// import ActionCreators from './DocumentationItems/ActionCreators/ActionCreators';
// import Reducer from './DocumentationItems/Reducer/Reducer';
// import Store from './DocumentationItems/Store/Store';
// import AppContainer from './DocumentationItems/AppContainer/AppContainer';
// import Provider from './DocumentationItems/Provider/Provider';
// import SpecialCasesComponentState from './DocumentationItems/SpecialCasesComponentState/SpecialCasesComponentState';
// import ThunkMiddleware from './DocumentationItems/ThunkMiddleware/ThunkMiddleware';
// import StateManagement_FutureImprovements from './DocumentationItems/StateManagement_FutureImprovements/StateManagement_FutureImprovements';
// import BackEnd from './DocumentationItems/BackEnd/BackEnd';
// import APIServer from './DocumentationItems/APIServer/APIServer';
// import Database from './DocumentationItems/Database/Database';
// import Neo4JIntro from './DocumentationItems/Neo4JIntro/Neo4JIntro';
// import IntroToGraphs from './DocumentationItems/IntroToGraphs/IntroToGraphs';
// import Neo4JImplementation from './DocumentationItems/Neo4JImplementation/Neo4JImplementation';
// import Neo4JDifferentiation from './DocumentationItems/Neo4JDifferentiation/Neo4JDifferentiation';
// import DataModel from './DocumentationItems/DataModel/DataModel';
// import PlannedQueries from './DocumentationItems/PlannedQueries/PlannedQueries';
// import BackEnd_FutureImprovements from './DocumentationItems/BackEnd_FutureImprovements/BackEnd_FutureImprovements';
// import GraphicDesign from './DocumentationItems/GraphicDesign/GraphicDesign';
// import IconLibrary from './DocumentationItems/IconLibrary/IconLibrary';
// import Fonts from './DocumentationItems/Fonts/Fonts';
// import ColorScheme from './DocumentationItems/ColorScheme/ColorScheme';
// import Routing from './DocumentationItems/Routing/Routing';
// import TopLevelApplicationRouting from './DocumentationItems/TopLevelApplicationRouting/TopLevelApplicationRouting';
// import DynamicRouting from './DocumentationItems/DynamicRouting/DynamicRouting';
// import Testing from './DocumentationItems/Testing/Testing';
// import SmokeTests from './DocumentationItems/SmokeTests/SmokeTests/';
// import Testing_FutureImprovements from './DocumentationItems/Testing_FutureImprovements/Testing_FutureImprovements';
// import Accessibility from './DocumentationItems/Accessibility/Accessibility';
// import SemanticHTML from './DocumentationItems/SemanticHTML/SemanticHTML';
// import Images from './DocumentationItems/Images/Images';
// import ColorContrast from './DocumentationItems/ColorContrast/ColorContrast';
// import Accessibility_FutureImprovements from './DocumentationItems/Accessibility_FutureImprovements/Accessibility_FutureImprovements';
// import Security from './DocumentationItems/Security/Security';
// import Security_FeatureScope from './DocumentationItems/Security_FeatureScope/Security_FeatureScope';
// import AnchorLinks from './DocumentationItems/AnchorLinks/AnchorLinks';
// import FutureImprovements from './DocumentationItems/FutureImprovements/FutureImprovements';
// import ActiveProblemAreas from './DocumentationItems/ActiveProblemAreas/ActiveProblemAreas';
// import ReactRefsProblem from './DocumentationItems/ReactRefsProblem/ReactRefsProblem';
// import SVGRenderingProblem from './DocumentationItems/SVGRenderingProblem/SVGRenderingProblem';
// import LintingProblem from './DocumentationItems/LintingProblem/LintingProblem';
// import CardGalleryProblem from './DocumentationItems/CardGalleryProblem/CardGalleryProblem';

class DocumentationDisplay extends React.Component { 
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.documentationDisplayClasses }>
					<DocumentationTree/>
					<TableOfContents/>
				</div>				
			</FromTheTopCradle>
		);
	}
}

DocumentationDisplay.contextType = ThemeContext;

const DocumentationDisplayWithRouter = withRouter(DocumentationDisplay);

export default DocumentationDisplayWithRouter;

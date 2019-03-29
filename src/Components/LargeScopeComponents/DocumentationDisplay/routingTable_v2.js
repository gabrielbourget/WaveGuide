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
import Redux from './DocumentationItems/54-Redux/Redux';
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

const routingTable = {
	'/documentation/f161856e-5375-4a66-882f-85b122eb439d': TableOfContents,
	'/documentation/894b3efd-02a9-40d7-adee-aab4548c87f6': Overview,
	'/documentation/97df66de-33fb-48cd-9543-0c698821d5d8': IntroToTheWaveScene,
	'/documentation/71987a6a-61c1-4c2e-8ad6-af16714c583f': ApplicationOverview,
	'/documentation/40edbc86-218c-47c9-b395-7a87c98a1fbe': ApplicationScope,
	'/documentation/73627e59-49df-47a8-a0d7-22edd04a7c0c': TechStack,
	'/documentation/0d209cbd-5b73-4e52-901e-1d012299acfd': ProjectStructure,
	'/documentation/18d1dc66-e33b-4823-bed3-ea4c8b60c553': OverallDirectoryStructure,
	'/documentation/2c4c531e-e905-41f4-ac7c-bc6018bab0a6': ODS_Client,
	'/documentation/3033ce2e-9598-4d6c-9819-9666b49176f4': ODS_Public,
	'/documentation/7e34fce7-d704-4d24-9779-0ea55d5a6664': ODS_Src,
	'/documentation/43b4e475-94f9-4674-840e-0e955238b2aa': ODS_Components,
	'/documentation/1722e2d5-8cb7-48d9-bcf2-333ea54de0ce': ODS_Datasets,
	'/documentation/00bf3d83-f8eb-4dab-ba2d-1e6ffc40dc2c': ODS_GlobalStyles,
	'/documentation/0772ee70-a178-4be0-8db3-989ae5ca743f': ODS_Helpers,
	'/documentation/bf059259-f7fa-4f97-8bb8-459eb3e2a805': ODS_Redux,
	'/documentation/28005464-9c1f-413e-952f-d422242ed0ff': ODS_Design,
	'/documentation/45631f67-11da-4a24-986a-7ba6dfb4a157': InternalComponentStructure,
	'/documentation/3b75a19f-9373-42d7-889a-47b30f0d2535': CDS_MainComponentFile,
	'/documentation/b535e44c-5ce5-4e18-9792-5067b7186c71': CDS_Stylesheets,
	'/documentation/070f43b1-72a0-4f64-9293-bd1bec17055c': CDS_HelpersAndResources,
	'/documentation/4a1afd52-4735-4f21-a24f-33c112c511aa': CDS_Tests,
	'/documentation/1fd3e88d-cf43-4616-b115-f0bd390585a4': CDS_NestedComponents,
	'/documentation/b7b2a049-cdcb-493f-aa24-29b2bed9ccf8': FrontEnd,
	'/documentation/f472f77f-cc05-4e04-a779-53cdab8cf280': React_DocArticle,
	'/documentation/8f90509c-c5f9-471c-b068-e616a9679e86': CSSModules,
	'/documentation/4d3daac5-29e2-4d96-b4bd-9e0ba7b8c133': ColorThemes,
	'/documentation/5b0bb77c-efd2-491f-9ef7-9fab84fe4f42': RenderTimeComponentPreparation,
	'/documentation/b1020f53-578b-4d6b-a112-1ee402e94ead': UIDesignPatterns,
	'/documentation/ac20c586-039e-4ea4-9b20-8a41cdab3a38': Buttons,
	'/documentation/80c14b29-aa22-40f8-9672-7314481f5d86': SelectionIndicators,
	'/documentation/21a57b18-8be9-45ca-9e79-66b6511e995f': Dividers,
	'/documentation/0b78e43a-9b1f-4544-bb50-5f1772434f29': SearchBar,
	'/documentation/c212d863-a83b-451f-a7a3-93c979ec3d0a': Cradles,
	'/documentation/5998402b-1e69-4095-b7a9-7800e17d0b47': ProfileCard,
	'/documentation/6061a33a-2168-4571-8aa7-cf516e0ef601': CardGallery,
	'/documentation/8f036fd9-596b-40eb-9f79-311e0e9afa79': GraphVisualization,
	'/documentation/fc2898d7-3deb-4816-b30e-1334e7f96ae6': MapBox,
	'/documentation/cf74736d-037c-45ab-a517-be63fbb05987': SideMenu,
	'/documentation/167985c8-11a5-4b09-be7b-fa176dcef24e': Table,
	'/documentation/22e9e820-5b9c-4688-8f31-7b44a3afe6bd': TreeView,
	'/documentation/a6405a7a-5467-4e28-a388-c48a47284850': FrontEnd_FutureImprovements,
	'/documentation/9cb887d0-a6d6-4a68-985b-0d0fb4a6836b': StateManagement,
	'/documentation/c51a43be-2a4b-4fac-b40b-ec04e0d64a95': Redux,
	'/documentation/b9f85483-d91c-44b7-9723-f9a96632ac65': SpecialCasesComponentState,
	'/documentation/65fab7ed-3225-4ca4-8a08-723406e431eb': ThunkMiddleware,
	'/documentation/469a3266-ff6b-4879-948d-616af79f8e39': StateManagement_FutureImprovements,
	'/documentation/994199e8-5e34-4e9a-8ad7-ba84d1faa851': BackEnd,
	'/documentation/25687c4e-20d3-4694-8846-b4a9fdc9e79a': APIServer,
	'/documentation/27d03266-f7a4-453f-8c4a-9f4f08584f09': Database,
	'/documentation/70e2dbc6-f34f-4004-936d-f7a708ff76a4': IntroToGraphs,
	'/documentation/399b8def-c5cc-4c6a-a9dd-309fe70c758b': Neo4JImplementation,
	'/documentation/86b92487-31ec-49e9-9818-7919430888ee': Neo4JDifferentiation,
	'/documentation/485dc30c-1e72-412e-9fc0-cf065a808c09': DataModel,
	'/documentation/8e113667-df9d-44ff-aa7c-6e2f16a96b80': Design,
	'/documentation/158df3a4-d696-458e-a710-93395dc90d9e': Routing,
	'/documentation/2ddc812b-2390-4664-a2f0-d214dfe7b8ea': Testing,
	'/documentation/64b76bcd-455f-46e7-b2c1-9ced5dcda550': Accessibility,
	'/documentation/6a91f5a4-03e4-43e2-8fee-34e8a51fcdfc': Security,
  '/documentation/f111f51d-4c5b-4bee-ada4-211d36359ce9': FutureImprovements
};

export default routingTable;

const documentationTree = {
	'/tableOfContents': {
		path: '/tableOfContents',
		name: 'Table of Contents',
		type: 'file',
		isRoot: true,
		isOpen: false,
		id: 'f161856e-5375-4a66-882f-85b122eb439d'
	},
	'/overview': {
		path: '/overview',
		name: 'Overview',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '894b3efd-02a9-40d7-adee-aab4548c87f6',
		children: ['/overview/introToTheWaveScene',
							 '/overview/applicationOverview',
							 '/overview/applicationScope',
							 '/overview/techStack',
							 '/overview/projectStructure']
	},
	'/overview/introToTheWaveScene': {
		path: '/overview/introToTheWaveScene',
		name: 'Intro To The Wave Scene',
		type: '/file',
		isOpen: false,
		id: '97df66de-33fb-48cd-9543-0c698821d5d8'
	},
	'/overview/applicationOverview': {
		path: '/overview/applicationOverview',
		name: 'Application Overview',
		type: 'file',
		isOpen: false,
		id: '71987a6a-61c1-4c2e-8ad6-af16714c583f'
	},
	'/overview/applicationScope': {
		path: '/overview/applicationScope',
		name: 'Application Scope',
		type: 'file',
		isOpen: false,
		id: '40edbc86-218c-47c9-b395-7a87c98a1fbe',
		// children: ['/overview/applicationScope/technicalScope',
		// 					 '/overview/applicationScope/featureScope']
	},
	// '/overview/applicationScope/technicalScope': {
	// 	path: '/overview/applicationScope/technicalScope',
	// 	name: 'Technical Scope',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: '85aed067-0172-493f-8660-b1e1d825dbb1'
	// },
	// '/overview/applicationScope/featureScope': {
	// 	path: '/overview/applicationScope/featureScope',
	// 	name: 'Feature Scope',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: 'ec8c2776-abdf-4a58-b7ed-c1e62ef56e64'
	// },
	'/overview/techStack': {
		path: '/overview/techStack',
		name: 'Tech Stack',
		type: 'file',
		isOpen: false,
		id: '73627e59-49df-47a8-a0d7-22edd04a7c0c',
		// children: ['/overview/techStack/react',
		// 					 '/overview/techStack/redux',
		// 					 '/overview/techStack/express',
		// 					 '/overview/techStack/neo4J']
	},
	// '/overview/techStack/react': {
	// 	path: '/overview/techStack/react',
	// 	name: 'React',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: '540ce7b9-b00f-41ab-9042-507d781268f9'
	// },
	// '/overview/techStack/redux': {
	// 	path: '/overview/techStack/redux',
	// 	name: 'Redux',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: '09e461f5-baec-4785-b509-ecbcb9980f16'
	// },
	// '/overview/techStack/express': {
	// 	path: '/overview/techStack/express',
	// 	name: 'Express',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: '0720c963-f0f3-4097-9011-78aebb9743de'
	// },
	'/overview/techStack/neo4J': {
		path: '/overview/techStack/neo4J',
		name: 'Neo4J',
		type: 'file',
		isOpen: false,
		id: '4c153909-f42a-4577-8de0-edd069441d97'
	},
	'/overview/projectStructure': {
		path: '/overview/projectStructure',
		name: 'Project Structure',
		type: 'folder',
		isOpen: false,
		id: '0d209cbd-5b73-4e52-901e-1d012299acfd',
		children: ['/overview/projectStructure/overallDirectoryStructure',
							 '/overview/projectStructure/internalComponentStructure']
	},
	'/overview/projectStructure/overallDirectoryStructure': {
		path: '/overview/projectStructure/overallDirectoryStructure',
		name: 'Overall Directory Structure',
		type: 'folder',
		isOpen: false,
		id: '18d1dc66-e33b-4823-bed3-ea4c8b60c553',
		children: [
							//'/overview/projectStructure/overallDirectoryStructure/excludedItems',
							 '/overview/projectStructure/overallDirectoryStructure/client',
							 '/overview/projectStructure/overallDirectoryStructure/Design']
	},
	// '/overview/projectStructure/overallDirectoryStructure/excludedItems': {
	// 	path: '/overview/projectStructure/overallDirectoryStructure/excludedItems',
	// 	name: 'Excluded Items',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: '9b5de2da-c1c8-4651-82d2-0c66a410e405'
	// },
	'/overview/projectStructure/overallDirectoryStructure/client': {
		path: '/overview/projectStructure/overallDirectoryStructure/client',
		name: 'client',
		type: 'folder',
		isOpen: false,
		id: '2c4c531e-e905-41f4-ac7c-bc6018bab0a6',
		children: [
							 // '/overview/projectStructure/overallDirectoryStructure/client/build',
							 '/overview/projectStructure/overallDirectoryStructure/client/public',
							 '/overview/projectStructure/overallDirectoryStructure/client/src']
	},
	// '/overview/projectStructure/overallDirectoryStructure/client/build': {
	// 	path: '/overview/projectStructure/overallDirectoryStructure/client/build',
	// 	name: 'build',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: 'ca7dfe9c-7580-4398-8750-0d205775c5d7'
	// },
	'/overview/projectStructure/overallDirectoryStructure/client/public': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/public',
		name: 'public',
		type: 'file',
		isOpen: false,
		id: '3033ce2e-9598-4d6c-9819-9666b49176f4'
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src',
		name: 'src',
		type: 'folder',
		isOpen: false,
		id: '7e34fce7-d704-4d24-9779-0ea55d5a6664',
		children: ['/overview/projectStructure/overallDirectoryStructure/client/src/Components',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/Datasets',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/GlobalStyles',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/Helpers',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/Redux']
							 // '/overview/projectStructure/overallDirectoryStructure/client/src/index.js']
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Components': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Components',
		name: 'Components',
		type: 'file',
		isOpen: false,
		id: '43b4e475-94f9-4674-840e-0e955238b2aa'
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Datasets': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Datasets',
		name: 'Datasets',
		type: 'file',
		isOpen: false,
		id: '1722e2d5-8cb7-48d9-bcf2-333ea54de0ce'
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/GlobalStyles': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/GlobalStyles',
		name: 'Global Styles',
		type: 'file',
		isOpen: false,
		id: '00bf3d83-f8eb-4dab-ba2d-1e6ffc40dc2c'
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Helpers': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Helpers',
		name: 'Helpers',
		type: 'file',
		isOpen: false,
		id: '0772ee70-a178-4be0-8db3-989ae5ca743f'
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Redux': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Redux',
		name: 'Redux',
		type: 'file',
		isOpen: false,
		id: 'bf059259-f7fa-4f97-8bb8-459eb3e2a805'
	},
	// '/overview/projectStructure/overallDirectoryStructure/client/src/index.js': {
	// 	path: '/overview/projectStructure/overallDirectoryStructure/client/src/index.js',
	// 	name: 'index.js',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: 'ca13322a-448f-427c-bdcf-cc16fd2c379f'
	// },
	'/overview/projectStructure/overallDirectoryStructure/Design': {
		path: '/overview/projectStructure/overallDirectoryStructure/Design',
		name: 'Design',
		type: 'file',
		isOpen: false,
		id: '28005464-9c1f-413e-952f-d422242ed0ff'
	},
	'/overview/projectStructure/internalComponentStructure': {
		path: '/overview/projectStructure/internalComponentStructure',
		name: 'Internal Directory Structure',
		type: 'folder',
		isOpen: false,
		id: '45631f67-11da-4a24-986a-7ba6dfb4a157',
		children: ['/overview/projectStructure/internalComponentStructure/mainComponentFile',
							 '/overview/projectStructure/internalComponentStructure/stylesheets',
							 '/overview/projectStructure/internalComponentStructure/HelpersAndResources',
							 '/overview/projectStructure/internalComponentStructure/tests',
							 '/overview/projectStructure/internalComponentStructure/nestedComponents']
	},
	'/overview/projectStructure/internalComponentStructure/mainComponentFile': {
		path: '/overview/projectStructure/internalComponentStructure/mainComponentFile',
		name: 'Main Component File',
		type: 'file',
		isOpen: false,
		id: '3b75a19f-9373-42d7-889a-47b30f0d2535'
	},
	'/overview/projectStructure/internalComponentStructure/stylesheets': {
		path: '/overview/projectStructure/internalComponentStructure/stylesheets',
		name: 'Stylesheets',
		type: 'file',
		isOpen: false,
		id: 'b535e44c-5ce5-4e18-9792-5067b7186c71'
	},
	'/overview/projectStructure/internalComponentStructure/HelpersAndResources': {
		path: '/overview/projectStructure/internalComponentStructure/HelpersAndResources',
		name: 'Helpers And Resources',
		type: 'file',
		isOpen: false,
		id: '070f43b1-72a0-4f64-9293-bd1bec17055c'
	},
	'/overview/projectStructure/internalComponentStructure/tests': {
		path: '/overview/projectStructure/internalComponentStructure/tests',
		name: 'Tests',
		type: 'file',
		isOpen: false,
		id: '4a1afd52-4735-4f21-a24f-33c112c511aa'
	},
	'/overview/projectStructure/internalComponentStructure/nestedComponents': {
		path: '/overview/projectStructure/internalComponentStructure/nestedComponents',
		name: 'Nested Components',
		type: 'file',
		isOpen: false,
		id: '1fd3e88d-cf43-4616-b115-f0bd390585a4'
	},
	'/frontEnd': {
		path: '/frontEnd',
		name: 'Front End',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: 'b7b2a049-cdcb-493f-aa24-29b2bed9ccf8',
		children: ['/frontEnd/React/', '/frontEnd/CSSModules',
							 '/frontEnd/GlobalStyles', '/frontEnd/colorThemes',
							 '/frontEnd/renderTimeComponentPrep', 
							 '/frontEnd/UIDesignPatterns']
	},
	'/frontEnd/React/': {
		path: '/frontEnd/React',
		name: 'React',
		type: 'file',
		isOpen: false,
		id: 'f472f77f-cc05-4e04-a779-53cdab8cf280'
	},
	'/frontEnd/CSSModules': {
		path: '/frontEnd/CSSModules',
		name: 'CSS Modules',
		type: 'file',
		isOpen: false,
		id: '8f90509c-c5f9-471c-b068-e616a9679e86'
	},	
	'/frontEnd/GlobalStyles': {
		path: '/frontEnd/GlobalStyles',
		name: 'Global Styles',
		type: 'file',
		isOpen: false,
		id: 'c49b19c1-16d1-4eff-9e92-f2ce76efb402'
	},
	'/frontEnd/colorThemes': {
		path: '/frontEnd/colorThemes',
		name: 'Color Themes',
		type: 'file',
		isOpen: false,
		id: '4d3daac5-29e2-4d96-b4bd-9e0ba7b8c133'
	},
	'/frontEnd/renderTimeComponentPrep': {
		path: '/frontEnd/renderTimeComponentPrep',
		name: 'Render-Time Component Preparation',
		type: 'file',
		isOpen: false,
		id: '5b0bb77c-efd2-491f-9ef7-9fab84fe4f42'
	},
	'/frontEnd/UIDesignPatterns': {
		path: '/frontEnd/UIDesignPatterns',
		name: 'Implemented Design Patterns',
		type: 'folder',
		isOpen: false,
		id: 'b1020f53-578b-4d6b-a112-1ee402e94ead',
		children: ['/frontEnd/UIDesignPatterns/buttons',
							 '/frontEnd/UIDesignPatterns/selectionIndicators',
							 '/frontEnd/UIDesignPatterns/dividers',
							 '/frontEnd/UIDesignPatterns/searchBar',
							 '/frontEnd/UIDesignPatterns/cradles',
							 '/frontEnd/UIDesignPatterns/profileCard', 
							 '/frontEnd/UIDesignPatterns/cardGallery',
							 '/frontEnd/UIDesignPatterns/graphVisualization',
							 '/frontEnd/UIDesignPatterns/map',
							 '/frontEnd/UIDesignPatterns/sideMenu',
							 '/frontEnd/UIDesignPatterns/table',
							 '/frontEnd/UIDesignPatterns/treeView',
							 '/frontEnd/UIDesignPatterns/futureComponents']
	},
	'/frontEnd/UIDesignPatterns/buttons': {
		path: '/frontEnd/UIDesignPatterns/buttons',
		name: 'Buttons',
		type: 'file',
		isOpen: false,
		id: 'ac20c586-039e-4ea4-9b20-8a41cdab3a38'
	},
	'/frontEnd/UIDesignPatterns/selectionIndicators': {
		path: '/frontEnd/UIDesignPatterns/selectionIndicators',
		name: 'Selection Indicators',
		type: 'file',
		isOpen: false,
		id: '80c14b29-aa22-40f8-9672-7314481f5d86'
	},
	'/frontEnd/UIDesignPatterns/dividers': {
		path: '/frontEnd/UIDesignPatterns/dividers',
		name: 'Dividers',
		type: 'file',
		isOpen: false,
		id: '21a57b18-8be9-45ca-9e79-66b6511e995f'
	},
	'/frontEnd/UIDesignPatterns/searchBar': {
		path: '/frontEnd/UIDesignPatterns/searchBar',
		name: 'Search Bar',
		type: 'file',
		isOpen: false,
		id: '0b78e43a-9b1f-4544-bb50-5f1772434f29'
	},
	'/frontEnd/UIDesignPatterns/cradles': {
		path: '/frontend/UIDesignPatterns/cradles',
		name: 'Cradles',
		type: 'file',
		isOpen: false,
		id: 'c212d863-a83b-451f-a7a3-93c979ec3d0a'
	},
	'/frontEnd/UIDesignPatterns/profileCard': {
		path: '/frontEnd/UIDesignPatterns/profileCard',
		name: 'Profile Card',
		type: 'file',
		isOpen: false,
		id: '5998402b-1e69-4095-b7a9-7800e17d0b47'
	},
	'/frontEnd/UIDesignPatterns/cardGallery': {
		path: '/frontEnd/UIDesignPatterns/cardGallery',
		name: 'Card Gallery',
		type: 'file',
		isOpen: false,
		id: '6061a33a-2168-4571-8aa7-cf516e0ef601'
	},
	'/frontEnd/UIDesignPatterns/graphVisualization': {
		path: '/frontEnd/UIDesignPatterns/graphVisualization',
		name: 'Graph Visualization',
		type: 'file',
		isOpen: false,
		id: '8f036fd9-596b-40eb-9f79-311e0e9afa79'
	},
	'/frontEnd/UIDesignPatterns/map': {
		path: '/frontEnd/UIDesignPatterns/map',
		name: 'Map',
		type: 'file',
		isOpen: false,
		id: 'fc2898d7-3deb-4816-b30e-1334e7f96ae6'
	},
	'/frontEnd/UIDesignPatterns/sideMenu': {
		path: '/frontEnd/UIDesignPatterns/sideMenu',
		name: 'Side Menu',
		type: 'file',
		isOpen: false,
		id: 'cf74736d-037c-45ab-a517-be63fbb05987'
	},
	'/frontEnd/UIDesignPatterns/table': {
		path: '/frontEnd/UIDesignPatterns/table',
		name: 'Table',
		type: 'file',
		isOpen: false,
		id: '167985c8-11a5-4b09-be7b-fa176dcef24e'
	},
	'/frontEnd/UIDesignPatterns/treeView': {
		path: '/frontEnd/UIDesignPatterns/table',
		name: 'Tree View',
		type: 'file',
		isOpen: false,
		id: '22e9e820-5b9c-4688-8f31-7b44a3afe6bd'
	},
	'/frontEnd/UIDesignPatterns/futureComponents': {
		path: '/frontEnd/UIDesignPatterns/futureComponents',
		name: 'Future Components',
		type: 'file',
		isOpen: false,
		id: 'a6405a7a-5467-4e28-a388-c48a47284850'
	},
	'/stateManagement': {
		path: '/stateManagement',
		name: 'State Management',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '9cb887d0-a6d6-4a68-985b-0d0fb4a6836b',
		children: ['/stateManagement/redux',
							 '/stateManagement/specialCasesComponentState',
							 '/stateManagement/thunkMiddleWare',
							 '/stateManagement/futureImprovements']
	},
	'/stateManagement/redux': {
		path: '/stateManagement/redux',
		name: 'Redux',
		type: 'folder',
		isOpen: false,
		id: 'c51a43be-2a4b-4fac-b40b-ec04e0d64a95',
		children: ['/stateManagement/redux/actionStrings',
						   '/stateManagement/redux/actionCreators',
						   '/stateManagement/redux/reducer',
						   '/stateManagement/redux/store',
						   '/stateManagement/redux/appContainer',
						   '/stateManagement/redux/provider']
	},
	'/stateManagement/redux/actionStrings': {
		path: '/stateManagement/redux/actionStrings',
		name: 'Action Strings',
		type: 'file',
		isOpen: false,
		id: '65220967-8409-48aa-9e1b-1d2e6336a89e'
	},
	'/stateManagement/redux/actionCreators': {
		path: '/stateManagement/redux/actionCreators',
		name: 'Action Creators',
		type: 'file',
		isOpen: false,
		id: 'b09aa2f2-47cf-4f4d-a429-cc06fe05efff'
	},
	'/stateManagement/redux/reducer': {
		path: '/stateManagement/redux/reducer',
		name: 'Reducer',
		type: 'file',
		isOpen: false,
		id: 'ce206855-3aa3-4e36-8a4a-786e90f1c594'
	},
	'/stateManagement/redux/store': {
		path: '/stateManagement/redux/store',
		name: 'Store',
		type: 'file',
		isOpen: false,
		id: 'e46c6933-0081-4811-98ac-c5be389c84b7'
	},
	'/stateManagement/redux/appContainer': {
		path: '/stateManagement/redux/appContainer',
		name: 'AppContainer',
		type: 'file',
		isOpen: false,
		id: '9f85f9a2-8521-484a-99b6-da43dad32dd2'
	},
	'/stateManagement/redux/provider': {
		path: '/stateManagement/redux/provider',
		name: 'Provider',
		type: 'file',
		isOpen: false,
		id: 'e0475963-b5b2-4dca-b47d-ac4ef640a65a'
	},
	'/stateManagement/specialCasesComponentState': {
		path: '/stateManagement/specialCasesComponentState',
		name: 'Local State In Some Components',
		type: 'file',
		isOpen: false,
		id: 'b9f85483-d91c-44b7-9723-f9a96632ac65'
	},
	'/stateManagement/thunkMiddleWare': {
		path: '/stateManagement/thunkMiddleWare',
		name: 'Thunk Middleware',
		type: 'file',
		isOpen: false,
		id: '65fab7ed-3225-4ca4-8a08-723406e431eb'
	},
	'/stateManagement/futureImprovements': {
		path: '/stateManagement/futureImprovements',
		name: 'Future Improvements',
		type: 'file',
		isOpen: false,
		id: '469a3266-ff6b-4879-948d-616af79f8e39'
	},
	'/backEnd': {
		path: '/backEnd',
		name: 'Back End',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '994199e8-5e34-4e9a-8ad7-ba84d1faa851',
		children: ['/backEnd/APIServer', '/backEnd/database', '/backEnd/futureImprovements']
	},
	'/backEnd/APIServer': {
		path: '/backEnd/APIServer',
		name: 'Server',
		type: 'file',
		isOpen: false,
		id: '25687c4e-20d3-4694-8846-b4a9fdc9e79a'
	},
	'/backEnd/database': {
		path: '/backEnd/database',
		name: 'Database',
		type: 'folder',
		isOpen: false,
		id: '27d03266-f7a4-453f-8c4a-9f4f08584f09',
		children: ['/backEnd/database/neo4JIntro', 
							 '/backEnd/database/dataModel']
							 // '/backEnd/database/plannedQueries']
	},
	'/backEnd/database/neo4JIntro': {
		path: '/backEnd/database/neo4JIntro',
		name: 'Introduction to Neo4J',
		type: 'folder',
		isOpen: false,
		id: '4d7135a5-91f6-4a70-945c-b4411891ca75',
		children: ['/backEnd/database/neo4JIntro/introToGraphs',
							 '/backEnd/database/neo4JIntro/neo4JImplementation',
							 '/backEnd/database/neo4JIntro/differentiation']
	},
	'/backEnd/database/neo4JIntro/introToGraphs': {
		path: '/backEnd/database/neo4JIntro/introToGraphs',
		name: 'Introduction to Graphs',
		type: 'file',
		isOpen: false,
		id: '70e2dbc6-f34f-4004-936d-f7a708ff76a4'
	},
	'/backEnd/database/neo4JIntro/neo4JImplementation': {
		path: '/backEnd/database/neo4JIntro/neo4JImplementation',
		name: 'Neo4J Implementation',
		type: 'file',
		isOpen: false,
		id: '399b8def-c5cc-4c6a-a9dd-309fe70c758b'
	},
	'/backEnd/database/neo4JIntro/differentiation': {
		path: '/backEnd/database/neo4JIntro/differentiation',
		name: 'Differentiation With Other Database Technologies',
		type: 'file',
		isOpen: false,
		id: '86b92487-31ec-49e9-9818-7919430888ee'
	},
	'/backEnd/database/dataModel': {
		path: '/backEnd/database/dataModel',
		name: 'Data Model',
		type: 'file',
		isOpen: false,
		id: '485dc30c-1e72-412e-9fc0-cf065a808c09'
	},
	// '/backEnd/database/plannedQueries': {
	// 	path: '/backEnd/database/plannedQueries',
	// 	name: 'Planned Queries',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: '1000295c-ddb1-4bd4-b0e5-a8ded2f605bd'
	// },
	'/backEnd/futureImprovements': {
		path: '/backEnd/futureImprovements',
		name: 'Future Improvements',
		type: 'file',
		isOpen: false,
		id: 'e24ccfb1-1db5-4543-b598-ade2e289bfd2'
	},
	'/design': {
		path: '/design',
		name: 'Design',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '8e113667-df9d-44ff-aa7c-6e2f16a96b80',
		children: ['/design/iconLibrary',
							 '/design/fonts',
							 '/design/colorScheme']
	},
	'/design/iconLibrary': {
		path: '/design/iconLibrary',
		name: 'Icon Library',
		type: 'file',
		isOpen: false,
		id: '29c796b7-4261-4ccc-b491-8036ac2e4b29'
	},
	'/design/fonts': {
		path: '/design/fonts',
		name: 'Fonts',
		type: 'file',
		isOpen: false,
		id: 'd722a88a-4631-435f-bd46-d6606074442a'
	},
	'/design/colorScheme': {
		path: '/design/colorScheme',
		name: 'Color Scheme',
		type: 'file',
		isOpen: false,
		id: '98448871-11a4-4c22-bb55-9d2d81ad880c'
	},
	'/routing': {
		path: '/routing',
		name: 'Routing',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '158df3a4-d696-458e-a710-93395dc90d9e',
		children: ['/routing/topLevelApplicationRouting', '/routing/dynamicRouting']
	},
	'/routing/topLevelApplicationRouting': {
		path: '/routing/topLevelApplicationRouting',
		name: 'Top-Level Application Routing',
		type: 'file',
		isOpen: false,
		id: '839458cc-bc5a-4c3d-b5e9-fecc3642ffd4'
	},
	'/routing/dynamicRouting': {
		path: '/routing/dynamicRouting',
		name: 'Dynamic Routing',
		type: 'file',
		isOpen: false,
		id: '1684177a-80e6-4e13-88a4-71e732e74196'
	},
	'/testing': {
		path: '/testing',
		name: 'Testing',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '2ddc812b-2390-4664-a2f0-d214dfe7b8ea',
		children: ['/testing/smokeTests', '/testing/futureImprovements']
	},
	'/testing/smokeTests': {
		path: '/testing/smokeTests',
		name: 'Smoke Tests',
		type: 'file',
		isOpen: false,
		id: 'bee814cf-7163-4252-b9f2-13630deadce1'
	},
	'/testing/futureImprovements': {
		path: '/testing/futureImprovements',
		name: 'Future Improvements',
		type: 'file',
		isOpen: false,
		id: '257a77f5-2601-4888-9fe2-1e0744f0d3cf'
	},
	'/accessibility': {
		path: '/accessibility',
		name: 'Accessibility',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '64b76bcd-455f-46e7-b2c1-9ced5dcda550',
		children: ['/accessibility/semanticHTML', '/accessibility/images', 
							 '/accessibility/colorContrast', '/accessibility/futureImprovements']
	},
	'/accessibility/semanticHTML': {
		path: '/accessibility/semanticHTML',
		name: 'Semantic Markup',
		type: 'file',
		isOpen: false,
		id: '04bb3ca7-1c19-4756-be58-6be49fb4c7b5'
	},
	'/accessibility/images': {
		path: '/accessibility/images',
		name: 'Images',
		type: 'file',
		isOpen: false,
		id: 'e6e90217-a2d8-4a63-9d89-0a8323959690'
	},
	'/accessibility/colorContrast': {
		path:' /accessibility/colorContrast',
		name: 'Color Contrast',
		type: 'file',
		isOpen: false,
		id: '7d79247b-6e16-4a67-a220-b4c482ff137f'
	},
	'/accessibility/futureImprovements': {
		path: '/accessibility/futureImprovements',
		name: 'Future Improvements',
		type: 'file',
		isOpen: false,
		id: 'c5e98afe-c86a-4406-afc1-6a62d24c7553'
	},
	'/security': {
		path: '/security',
		name: 'Security',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '6a91f5a4-03e4-43e2-8fee-34e8a51fcdfc',
		children: ['/security/featureScope',
							 '/security/anchorLinks']
	},
	'/security/featureScope': {
		path: '/security/featureScope',
		name: 'Feature Scope',
		type: 'file',
		isOpen: false,
		id: '5567a38b-c60c-46cb-9106-ca0efd5fedc7'
	},
	'/security/anchorLinks': {
		path: '/security/anchorLinks',
		name: 'Anchor Links',
		type: 'file',
		isOpen: false,
		id: 'ca34616f-e233-4cf6-a5cb-a50a2a00fa20'
	},
	'/futureImprovements': {
		path: '/futureImprovements',
		name: 'Future Improvements',
		isRoot: true,
		type: 'file',
		isOpen: false,
		id: 'f111f51d-4c5b-4bee-ada4-211d36359ce9'
	},
	'/activeProblemAreas': {
		path: '/activeProblemAreas',
		name: 'Active Problem Areas',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		id: '0443e5d2-3289-4fda-9086-8bf4779cc00a',
		children: ['/activeProblemAreas/reactRefs',
							 '/activeProblemAreas/SVGRendering',
							 '/activeProblemAreas/lintingIssues',
							 '/activeProblemAreas/cardGallery']
	},
	// '/activeProblemAreas/reactRefs': {
	// 	path: '/activeProblemAreas/reactRefs',
	// 	name: 'React Refs',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: 'e3f30382-9da2-4d08-a3b1-bb6899b34a86'
	// },
	'/activeProblemAreas/SVGRendering': {
		path: '/activeProblemAreas/SVGRendering',
		name: 'SVG Rendering',
		type: 'file',
		isOpen: false,
		id: '44e61326-d324-4563-9792-f481dc7ad1f4'
	},
	// '/activeProblemAreas/lintingIssues': {
	// 	path: '/activeProblemAreas/lintingIssues',
	// 	name: 'Linting Issues',
	// 	type: 'file',
	// 	isOpen: false,
	// 	id: '9ed15eea-a75b-4c78-9da2-d1bf0c3ab741'
	// },
	'/activeProblemAreas/cardGallery': {
		path: '/activeProblemAreas/cardGallery',
		name: 'Card Gallery',
		type: 'file',
		isOpen: false,
		id: 'e555a550-4c90-4d84-942b-d5afde3bbdf1'
	}
}
export default documentationTree;




















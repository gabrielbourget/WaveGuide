const documentationTree = {
	'/tableOfContents': {
		path: '/tableOfContents',
		name: 'Table of Contents',
		type: 'file',
		isRoot: true,
		isOpen: false
	},
	'/overview': {
		path: '/overview',
		name: 'Overview',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/overview/introToTheWaveCommunity',
							 '/overview/applicationOverview',
							 '/overview/applicationScope',
							 '/overview/techStack',
							 '/overview/projectStructure']
	},
	'/overview/introToTheWaveScene': {
		path: '/overview/introToTheWaveScene',
		name: 'Intro To The Wave Scene',
		type: '/file',
		isOpen: false
	},
	'/overview/applicationOverview': {
		path: '/overview/applicationOverview',
		name: 'Application Overview',
		type: 'file',
		isOpen: false
	},
	'/overview/applicationScope': {
		path: '/overview/applicationScope',
		name: 'Application Scope',
		type: 'folder',
		isOpen: false,
		children: ['/overview/applicationScope/technicalScope',
							 '/overview/applicationScope/featureScope']
	},
	'/overview/applicationScope/technicalScope': {
		path: '/overview/applicationScope/technicalScope',
		name: 'Technical Scope',
		type: 'file',
		isOpen: false
	},
	'/overview/applicationScope/featureScope': {
		path: '/overview/applicationScope/featureScope',
		name: 'Feature Scope',
		type: 'file',
		isOpen: false
	},
	'/overview/techStack': {
		path: '/overview/techStack',
		name: 'Tech Stack',
		type: 'folder',
		isOpen: false,
		children: ['/overview/techStack/react',
							 '/overview/techStack/redux',
							 '/overview/techStack/express',
							 '/overview/techStack/neo4J']
	},
	'/overview/techStack/react': {
		path: '/overview/techStack/react',
		name: 'React',
		type: 'file',
		isOpen: false
	},
	'/overview/techStack/redux': {
		path: '/overview/techStack/redux',
		name: 'Redux',
		type: 'file',
		isOpen: false
	},
	'/overview/techStack/express': {
		path: '/overview/techStack/express',
		name: 'Express',
		type: 'file',
		isOpen: false
	},
	'/overview/techStack/neo4J': {
		path: '/overview/techStack/neo4J',
		name: 'Neo4J',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure': {
		path: '/overview/projectStructure',
		name: 'Project Structure',
		type: 'folder',
		isOpen: false,
		children: ['/overview/projectStructure/overallDirectoryStructure',
							 '/overview/projectStructure/componentDirectoryStructure']
	},
	'/overview/projectStructure/overallDirectoryStructure': {
		path: '/overview/projectStructure/overallDirectoryStructure',
		name: 'Overall Directory Structure',
		type: 'folder',
		isOpen: false,
		children: ['/overview/projectStructure/overallDirectoryStructure/excludedItems',
							 '/overview/projectStructure/overallDirectoryStructure/client',
							 '/overview/projectStructure/overallDirectoryStructure/Design']
	},
	'/overview/projectStructure/overallDirectoryStructure/excludedItems': {
		path: '/overview/projectStructure/overallDirectoryStructure/excludedItems',
		name: 'Excluded Items',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client': {
		path: '/overview/projectStructure/overallDirectoryStructure/client',
		name: 'client',
		type: 'folder',
		isOpen: false,
		children: ['/overview/projectStructure/overallDirectoryStructure/client/build',
							 '/overview/projectStructure/overallDirectoryStructure/client/public',
							 '/overview/projectStructure/overallDirectoryStructure/client/src']
	},
	'/overview/projectStructure/overallDirectoryStructure/client/build': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/build',
		name: 'build',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client/public': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/public',
		name: 'public',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src',
		name: 'src',
		type: 'folder',
		isOpen: false,
		children: ['/overview/projectStructure/overallDirectoryStructure/client/src/Components',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/Datasets',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/GlobalStyles',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/Helpers',
							 '/overview/projectStructure/overallDirectoryStructure/client/src/Redux',
							 '/overview/projectStructure/overallDirectoryStructure/clinet/src/index.js']
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Components': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Components',
		name: 'Components',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Datasets': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Datasets',
		name: 'Datasets',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/GlobalStyles': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/GlobalStyles',
		name: 'Global Styles',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Helpers': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Helpers',
		name: 'Helpers',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/Redux': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/Redux',
		name: 'Redux',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/client/src/index.js': {
		path: '/overview/projectStructure/overallDirectoryStructure/client/src/index.js',
		name: 'index.js',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/overallDirectoryStructure/Design': {
		path: '/overview/projectStructure/overallDirectoryStructure/Design',
		name: 'Design',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/componentDirectoryStructure': {
		path: '/overview/projectStructure/componentDirectoryStructure',
		name: 'Component Directory Structure',
		type: 'folder',
		isOpen: false,
		children: ['/overview/projectStructure/componentDirectoryStructure/mainComponentFile',
							 '/overview/projectStructure/componentDirectoryStructure/stylesheets',
							 '/overview/projectStructure/componentDirectoryStructure/helpers',
							 '/overview/projectStructure/componentDirectoryStructure/tests',
							 '/overview/projectStructure/componentDirectoryStructure/nestedComponents']
	},
	'/overview/projectStructure/componentDirectoryStructure/mainComponentFile': {
		path: '/overview/projectStructure/componentDirectoryStructure/mainComponentFile',
		name: 'Main Component File',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/componentDirectoryStructure/stylesheets': {
		path: '/overview/projectStructure/componentDirectoryStructure/stylesheets',
		name: 'Stylesheets',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/componentDirectoryStructure/helpers': {
		path: '/overview/projectStructure/componentDirectoryStructure/helpers',
		name: 'Helpers',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/componentDirectoryStructure/tests': {
		path: '/overview/projectStructure/componentDirectoryStructure/tests',
		name: 'Tests',
		type: 'file',
		isOpen: false
	},
	'/overview/projectStructure/componentDirectoryStructure/nestedComponents': {
		path: '/overview/projectStructure/componentDirectoryStructure/nestedComponents',
		name: 'Nested Components',
		type: 'file',
		isOpen: false
	},
	'/frontEnd': {
		path: '/frontEnd',
		name: 'Front End',
		type: 'folder',
		isRoot: true,
		isOpen: false,
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
	},
	'/frontEnd/CSSModules': {
		path: '/frontEnd/CSSModules',
		name: 'CSS Modules',
		type: 'file',
		isOpen: false
	},	
	'/frontEnd/GlobalStyles': {
		path: '/frontEnd/GlobalStyles',
		name: 'Global Styles',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/colorThemes': {
		path: '/frontEnd/colorThemes',
		name: 'Color Themes',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/renderTimeComponentPrep': {
		path: '/frontEnd/renderTimeComponentPrep',
		name: 'Render-Time Component Preparation',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns': {
		path: '/frontEnd/UIDesignPatterns',
		name: 'Implemented Design Patterns',
		type: 'folder',
		isOpen: false,
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
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/selectionIndicators': {
		path: '/frontEnd/UIDesignPatterns/selectionIndicators',
		name: 'Selection Indicators',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/dividers': {
		path: '/frontEnd/UIDesignPatterns/dividers',
		name: 'Dividers',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/searchBar': {
		path: '/frontEnd/UIDesignPatterns/searchBar',
		name: 'Search Bar',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/cradles': {
		path: '/frontend/UIDesignPatterns/cradles',
		name: 'Cradles',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/profileCard': {
		path: '/frontEnd/UIDesignPatterns/profileCard',
		name: 'Profile Card',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/cardGallery': {
		path: '/frontEnd/UIDesignPatterns/cardGallery',
		name: 'Card Gallery',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/graphVisualization': {
		path: '/frontEnd/UIDesignPatterns/graphVisualization',
		name: 'Graph Visualization',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/map': {
		path: '/frontEnd/UIDesignPatterns/map',
		name: 'Map',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/sideMenu': {
		path: '/frontEnd/UIDesignPatterns/sideMenu',
		name: 'Side Menu',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/table': {
		path: '/frontEnd/UIDesignPatterns/table',
		name: 'Table',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/treeView': {
		path: '/frontEnd/UIDesignPatterns/table',
		name: 'Tree View',
		type: 'file',
		isOpen: false
	},
	'/frontEnd/UIDesignPatterns/futureComponents': {
		path: '/frontEnd/UIDesignPatterns/futureComponents',
		name: 'Future Components',
		type: 'file',
		isOpen: false
	},
	'/stateManagement': {
		path: '/stateManagement',
		name: 'State Management',
		type: 'folder',
		isRoot: true,
		isOpen: false,
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
		isOpen: false
	},
	'/stateManagement/redux/actionCreators': {
		path: '/stateManagement/redux/actionCreators',
		name: 'Action Creators',
		type: 'file',
		isOpen: false
	},
	'/stateManagement/redux/reducer': {
		path: '/stateManagement/redux/reducer',
		name: 'Reducer',
		type: 'file',
		isOpen: false
	},
	'/stateManagement/redux/store': {
		path: '/stateManagement/redux/store',
		name: 'Store',
		type: 'file',
		isOpen: false
	},
	'/stateManagement/redux/appContainer': {
		path: '/stateManagement/redux/appContainer',
		name: 'AppContainer',
		type: 'file',
		isOpen: false
	},
	'/stateManagement/redux/provider': {
		path: '/stateManagement/redux/provider',
		name: 'Provider',
		type: 'file',
		isOpen: false
	},
	'/stateManagement/specialCasesComponentState': {
		path: '/stateManagement/specialCasesComponentState',
		name: 'Local State In Some Components',
		type: 'file',
		isOpen: false
	},
	'/stateManagement/thunkMiddleWare': {
		path: '/stateManagement/thunkMiddleWare',
		name: 'Thunk Middleware',
		type: 'file',
		isOpen: false
	},
	'/stateManagement/futureImprovements': {
		path: '/stateManagement/futureImprovements',
		name: 'Future Improvements',
		type: 'file',
		isOpen: false
	},
	'/backEnd': {
		path: '/backEnd',
		name: 'Back End',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/backEnd/APIServer', '/backEnd/database', '/backEnd/futureImprovements']
	},
	'/backEnd/server': {
		path: '/backEnd/APIServer',
		name: 'Server',
		type: 'file',
		isOpen: false
	},
	'/backEnd/database': {
		path: '/backEnd/database',
		name: 'Neo4J Database',
		type: 'folder',
		isOpen: false,
		children: ['/backEnd/database/neo4JIntro', 
							 '/backEnd/database/dataModel',
							 '/backEnd/database/plannedQueries']
	},
	'/backEnd/database/neo4JIntro': {
		path: '/backEnd/database/neo4JIntro',
		name: 'Introduction to Neo4J',
		type: 'folder',
		isOpen: false,
		children: ['/backEnd/database/neo4JIntro/introToGraphs',
							 '/backEnd/database/neo4JIntro/neo4JImplementation',
							 '/backEnd/database/neo4JIntro/differentiation']
	},
	'/backEnd/database/neo4JIntro/introToGraphs': {
		path: '/backEnd/database/neo4JIntro/introToGraphs',
		name: 'Introduction to Graphs',
		type: 'file',
		isOpen: false
	},
	'/backEnd/database/neo4JIntro/neo4JImplementation': {
		path: '/backEnd/database/neo4JIntro/neo4JImplementation',
		name: 'Neo4J Implementation',
		type: 'file',
		isOpen: false
	},
	'/backEnd/database/neo4JIntro/differentiation': {
		path: '/backEnd/database/neo4JIntro/differentiation',
		name: 'Differentiation With Other Database Technologies',
		type: 'file',
		isOpen: false
	},
	'/backEnd/database/dataModel': {
		path: '/backEnd/database/dataModel',
		name: 'Data Model',
		type: 'file',
		isOpen: false
	},
	'/backEnd/database/plannedQueries': {
		path: '/backEnd/database/plannedQueries',
		name: 'Planned Queries',
		type: 'file',
		isOpen: false
	},
	'/backEnd/futureImprovements': {
		path: '/backEnd/futureImprovements',
		name: 'Future Improvements',
		type: 'file',
		isOpen: false
	},
	'/graphicDesign': {
		path: '/graphicDesign',
		name: 'Graphic Design',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/graphicDesign/iconLibrary',
							 '/graphicDesign/fonts',
							 '/graphicDesign/colorScheme']
	},
	'/graphicDesign/iconLibrary': {
		path: '/graphicDesign/iconLibrary',
		name: 'Icon Library',
		type: 'file',
		isOpen: false
	},
	'/graphicDesign/fonts': {
		path: '/graphicDesign/fonts',
		name: 'Fonts',
		type: 'file',
		isOpen: false
	},
	'/graphicDesign/colorScheme': {
		path: '/graphicDesign/colorScheme',
		name: 'Color Scheme',
		type: 'file',
		isOpen: false
	},
	'/routing': {
		path: '/routing',
		name: 'Routing',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/routing/topLevelRouting', '/routing/dynamicRouting']
	},
	'/routing/topLevelApplicationRouting': {
		path: '/routing/topLevelApplicationRouting',
		name: 'Top-Level Application Routing',
		type: 'file',
		isOpen: false
	},
	'/routing/dynamicRouting': {
		path: '/routing/dynamicRouting',
		name: 'Dynamic Routing',
		type: 'file',
		isOpen: false
	},
	'/testing': {
		path: '/testing',
		name: 'Testing',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/testing/smokeTests', '/testing/futureImprovements']
	},
	'/testing/smokeTests': {
		path: '/testing/smokeTests',
		name: 'Smoke Tests',
		type: 'file',
		isOpen: false
	},
	'/testing/futureImprovements': {
		path: '/testing/futureImprovements',
		name: 'Future Improvements',
		type: 'file',
		isOpen: false
	},
	'/accessiblity': {
		path: '/accessibility',
		name: 'Accessibility',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/accessibility/semanticHTML', '/accessibility/images', 
							 '/accessibility/colorContrast', '/accessibility/futureAdditions']
	},
	'/accessibility/semanticHTML': {
		path: '/accessibility/semanticHTML',
		name: 'Semantic Markup',
		type: 'file',
		isOpen: false
	},
	'/accessibility/images': {
		path: '/accessibility/images',
		name: 'Images',
		type: 'file',
		isOpen: false
	},
	'/accessibility/colorContrast': {
		path:' /accessibility/colorContrast',
		name: 'Color Contrast',
		type: 'file',
		isOpen: false
	},
	'/accessibility/futureAdditions': {
		path: '/accessibility/futureAdditions',
		name: 'Future Additions',
		type: 'file',
		isOpen: false
	},
	'/security': {
		path: '/security',
		name: 'Security',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/security/featureScope',
							 '/security/anchorLinks']
	},
	'/security/featureScope': {
		path: '/security/featureScope',
		name: 'Feature Scope',
		type: 'file',
		isOpen: false
	},
	'/security/anchorLinks': {
		path: '/security/anchorLinks',
		name: 'Anchor Links',
		type: 'file',
		isOpen: false
	},
	'/futureImprovements': {
		path: '/futureImprovements',
		name: 'Future Improvements',
		isRoot: true,
		type: 'file',
		isOpen: false,
	},
	'/activeProblemAreas': {
		path: '/activeProblemAreas',
		name: 'Active Problem Areas',
		type: 'folder',
		isRoot: true,
		isOpen: false,
		children: ['/activeProblemAreas/reactRefs',
							 '/activeProblemAreas/SVGRendering',
							 '/activeProblemAreas/lintingIssues',
							 '/activeProblemAreas/cardGallery']
	},
	'/activeProblemAreas/reactRefs': {
		path: '/activeProblemAreas/reactRefs',
		name: 'React Refs',
		type: 'file',
		isOpen: false
	},
	'/activeProblemAreas/SVGRendering': {
		path: '/activeProblemAreas/SVGRendering',
		name: 'SVG Rendering',
		type: 'file',
		isOpen: false
	},
	'/activeProblemAreas/lintingIssues': {
		path: '/activeProblemAreas/lintingIssues',
		name: 'Linting Issues',
		type: 'file',
		isOpen: false
	},
	'/activeProblemAreas/cardGallery': {
		path: '/activeProblemAreas/cardGallery',
		name: 'Card Gallery',
		type: 'file',
		isOpen: false
	}
}
export default documentationTree;




















const documentationTree = {
	'/tableOfContents': {
		path: '/tableOfContents',
		name: 'Table of Contents'
		type: 'file',
		isOpen: false
	},
	'/overview': {
		path: '/overview',
		name: 'Overview',
		type: 'folder',
		isOpen: false,
		children: [/* PUT CHILDREN HERE */]
	},
	'/frontEnd': {
		path: '/frontEnd',
		name: 'Front End',
		type: 'folder',
		isOpen: false,
		children: ['/frontEnd/React/', '/frontEnd/CSSModules']
	},
	'/stateManagement': {
		path: '/stateManagement',
		name: 'State Management',
		type: 'folder',
		isOpen: false,
		children: [/* PUT CHILDREN HERE */]
	},
	'/backEnd': {
		path: '/backEnd',
		name: 'Back End',
		type: 'folder',
		isOpen: false,
		children: [/* PUT CHILDREN HERE */]
	},
	'accessibility': {
		path: '/accessibility',
		name: 'Accessibility',
		type: 'folder',
		isOpen: false,
		children: [/* PUT CHILDREN HERE */]
	},
	'/routing': {
		path: '/routing',
		name: 'Routing',
		type: 'folder',
		isOpen: false,
		children: [/* PUT CHILDREN HERE */]
	},
	'/testing': {
		path: '/testing',
		name: 'Testing',
		type: 'folder',
		isOpen: false,
		children: [/* PUT CHILDREN HERE */]
	}
	'/security': {
		path: '/security',
		name: 'Security',
		type: 'folder',
		isOpen: false,
		children: [/* PUT CHILDREN HERE */]
	}
}

export default documentationTree;

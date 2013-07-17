require.config({
	paths: {
		angular: 		'lib/angular/angular',
		backbone: 	'lib/backbone/backbone',
		text: 			'lib/require/text',
		underscore: 'lib/underscore/underscore',
		jquery: 		'lib/jquery/jquery'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' 		: {'exports' : 'angular'},
		'backbone' 		: {'exports' : 'Backbone', 'deps': ['underscore', 'jquery'],},
		'underscore'	: {'exports' : '_'},
		'jquery'			: {'exports' : '$'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
	},
	priority: [
		"angular"
	]
});

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	'use strict';
		angular.bootstrap(document, [app['name']]);
});

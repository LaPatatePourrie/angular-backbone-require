define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/threads', {
			templateUrl: 'app/partials/threads.html',
			controller: 'threads'
		});

		$routeProvider.when('/threads/:id', {
			templateUrl: 'app/partials/thread.html',
			controller: 'thread'
		});

		$routeProvider.otherwise({redirectTo: '/threads'});
	}]);

});
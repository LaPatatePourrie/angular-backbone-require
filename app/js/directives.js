define(['angular', 'services'], function(angular, services) {
	'use strict';

	angular.module('threads.directives', ['threads.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});
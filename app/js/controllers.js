define(['angular', 'services', 'underscore'], function (angular, services, _) {
	'use strict';

	var appControllers = angular.module('threads.controllers', ['threads.services'])

	var controllers = ['threads']

	_(controllers).each(function (ctrl) {
		appControllers.controller(ctrl, ['$scope', '$injector', function ($scope, $injector) {
			require(['controllers/'+ctrl+'Ctrl'], function(controller) {
				$injector.invoke(controller, this, {'$scope': $scope});
			});
		}])
	});

	return appControllers;
});
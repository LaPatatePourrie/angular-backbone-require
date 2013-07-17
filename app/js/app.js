define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers'
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		return angular.module('threads', ['threads.controllers', 'threads.filters', 'threads.services', 'threads.directives']);
});

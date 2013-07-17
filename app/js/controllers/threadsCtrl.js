define(['backbone'], function(Backbone) {
	return ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

		var Thread = Backbone.Model.extend({
			defaults: {
				title: '',
				date: new Date()
			},
			alert: function () { alert('wow') }
		})

		var Threads = Backbone.Collection.extend({
			model: Thread,
			alert: function () { alert('wows') }
		})

		var threads = $scope.threads = new Threads();
		
		threads.add([
			{
				'id': 2,
				'title': 'Second thread'
			},
			{
				'id': 4,
				'title': 'Troisième et dernier thread du forum'
			}
		]);

		$timeout(function () {
			threads.add({id:5, title:'I come and add'})
		}, 500)

		
		// console.log($scope)
		$scope.$apply();
	}];
});
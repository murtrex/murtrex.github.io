$(document).foundation();

var murtrexBlog = angular.module('murtrexBlog', ['hc.marked', 'ngRoute'])

.controller('feedController', function($scope){
	$scope.blogs = [
		{ url: "blogs/one.md" },
		{ url: "blogs/two.md" },
	]
})

.controller('blogController', function($scope, $routeParams){
	$scope.params = $routeParams;
})

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/chunks/feed.html',
			controller: 'feedController'
		})
		.when('/blog/:blogID', {
			templateUrl: '/chunks/blog.html',
			controller: 'blogController'
		})
		.when('/oops', {
			templateUrl: '/chunks/oops.html'	
		})
		.otherwise({
			redirectTo: '/oops'
		});
});
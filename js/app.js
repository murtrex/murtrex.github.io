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

.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'feed.html',
			controller: 'feedController'
		})
		.when('/blog/:blogID', {
			templateUrl: 'blog.html',
			controller: 'blogController'
		});
});
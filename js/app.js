$(document).foundation();

var murtrexBlog = angular.module('murtrexBlog', ['hc.marked']);

murtrexBlog.controller('feedController', ['$scope', function($scope){
	$scope.blogs = [
		{ url: "blogs/one.md" },
		{ url: "blogs/two.md" },
	]
}]);
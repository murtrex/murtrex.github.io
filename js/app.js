$(document).foundation();

var murtrexBlog = angular.module('murtrexBlog', []);

murtrexBlog.controller('feedController', ['$scope', function($scope){
	$scope.blogs = [
		{ url: "blogs/one.html" },
	]
}]);
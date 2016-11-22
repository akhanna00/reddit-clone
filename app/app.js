// Create module
angular.module("myApp", [])

// Create main controller
.controller("mainController", ['$scope', function($scope) {
  // Create an JSON array of all posts(to be changed later)
  $scope.posts = [
    {title: 'post 1', upvotes: 6},
    {title: 'post 2', upvotes: 34},
    {title: 'post 3', upvotes: 21},
    {title: 'post 4', upvotes: 43},
    {title: 'post 5', upvotes: 12},
  ];
  // Create a function to add posts
  $scope.addPost = function() {
    if (!$sope.title || $scope.title === '') { return; }
    $scope.posts.push({title: 'A new post', upvotes: 0});
  }

  // Create a function to add upvotes
  $scope.upvote = function(post) {
    post.upvotes += 1;
  }
}]);
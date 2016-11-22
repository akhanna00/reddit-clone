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
    // Make sure title is not empty
    if (!$scope.title || $scope.title === '') { return; }
    // Add post with title and link from view
    $scope.posts.push(
      {title: $scope.title, link: $scope.link, upvotes: 0});
    // Clear out title and link
    $scope.title = '';
    $scope.link = '';

  }

  // Create a function to add upvotes
  $scope.upvote = function(post) {
    post.upvotes += 1;
  }
}]);
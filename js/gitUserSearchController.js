GithubUserSearch.controller('GitUserSearchController', function($scope, $resource){
  
  var searchResource = $resource('https://api.github.com/search/users?access_token=1e9bc970163f5ec8631a526231cb16088f8b1ea6');

  $scope.doSearch = function (){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm
    });
  };
});
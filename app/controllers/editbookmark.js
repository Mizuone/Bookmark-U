app.controller('Editbookmark', [ '$scope', '$routeParams', '$location', 'vaservice', function($scope, $routeParams, $location, $vaservice) {
    console.log($routeParams.id);
    if (!$routeParams.id) {
        $scope.bookItem = {name: "", description: "", siteurl: "", category: "angular" };
    } else {
        $scope.bookItem = $vaservice.vaCollection[$routeParams.id];
    }
    $scope.saveBookmark = function(id) {
        
    }
}]);
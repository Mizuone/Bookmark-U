app.controller('Editbookmark', [ '$scope', '$routeParams', '$location', 'vaservice', function($scope, $routeParams, $location, $vaservice) {
    if (!$routeParams.id) {
        $scope.bookItem = {name: "", description: "", siteurl: "", category: "angular" };
    } else {
        var bookMarkObject = $vaservice.vaCollection[$routeParams.id];
        var bookMarkClone = Object.assign({}, bookMarkObject);
        
        $scope.bookItem = bookMarkClone;
    }

    $scope.saveBookmark = function(bookItem) {
        for (var i = 0; i < $vaservice.vaCollection.length; i++) {
            if ($vaservice.vaCollection[i].id === Number($routeParams.id)) {
                $vaservice.vaCollection[i].name = bookItem.name;
                $vaservice.vaCollection[i].description = bookItem.description;
                $vaservice.vaCollection[i].siteurl = bookItem.siteurl;
                $vaservice.vaCollection[i].category = bookItem.category;
                $location.path("/");
            }
        }
    }
}]);
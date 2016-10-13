app.controller('Addbookmark', ['$scope', 'vaservice', '$location', function($scope, $vaservice, $location) {
    
    $scope.bookMark = {};
    $scope.bookMark.name = "s";
    $scope.bookMark.description = "";
    $scope.bookMark.siteurl = "";
    $scope.bookMark.category = "";
    console.log($vaservice.vaCollection);
    
    $scope.addBookItem = function() {
        let giveId = 0;
        if ($scope.bookMark.category === "") {
            alert("Pick a category");
            return;
        }
        for (let i = 0; i <= $vaservice.vaCollection.length; i++) {
            giveId++;
            if (giveId === $vaservice.vaCollection.length) {
                $scope.bookMark.id = giveId; 
            }
        }
        $vaservice.vaCollection.push($scope.bookMark);
        $location.path("/");
    }
}]);
app.controller('HomeController', ['$scope','vaservice', 'angularservice', 'ionicservice', 'readingservice', 'programmingservice', 'customservice', function($scope, $vaservice, $angularservice, $ionicservice, $readingservice, $programmingservice, $customservice) {
    
    $scope.vaCollection = $vaservice.vaCollection;
    $scope.angularCollection = $angularservice.angularCollection;
    $scope.ionicCollection = $ionicservice.ionicCollection;
    $scope.readingCollection = $readingservice.readingCollection;
    $scope.programmingCollection = $programmingservice.programmingCollection;
    $scope.customCollection = $customservice.customCollection;
    
    $scope.removeMark = function(id) {
        $vaservice.removeMark(id);
    }
    
    
    
    $scope.$watch(function() { return $vaservice.vaCollection }, function(vaCollection) {
        $scope.vaCollection = vaCollection;
    })
}])
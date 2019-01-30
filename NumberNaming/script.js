
var endpoint = 'http://localhost:5000/api/NumWord/';

var app = angular.module('MyStart', []);
app.controller('MainController', function($scope, $http){

        $scope.NumToWord = function(){
        
        var url = endpoint + this.mynumber;
        
        var onUserComplete = function (response){
           
            $scope.user = response.data;
            $scope.showflag = true;
        };
    
        var onError = function(reason)
        {
            $scope.error ="Could not found"
        }; 

        $http.get(url)
             .then(onUserComplete,onError);
            
    }

    $scope.InputChanged = function(){
        $scope.showflag = false;
    }

});
// CONTROLLERS
weatherApp.controller('homeController', ['$scope','$location', 'cityService', function($scope,$location,cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',
                                             'weaherService', function($scope, $resource, $routeParams, cityService,weaherService) {    
    
    $scope.pageSize = 2;
                                                 
    $scope.currentPage = 1;
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weaherService.getWeather($scope.city, $scope.days);
                                                 
    //PAGINATION
                                                
                                                 
    
    $scope.convertToCelsius = function(degK) {
        
        return Math.round(degK - 273.15);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);
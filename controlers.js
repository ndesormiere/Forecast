// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    // need the service
    $scope.city = cityService.city;
    
    // watcher on the textfield 
    $scope.$watch('city', function() {
        cityService.city = $scope.city; 
    });
    
    // when we click the submit button redirect us on the result page
    // as we submit a form angular allow us to press ENTER as well
    $scope.submit = function (){
        $location.path("/forecast");
    }
    
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    
    // need the service
    $scope.city = cityService.city;
    
    // number of days 7 by default
    $scope.days = $routeParams.days || '7';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    // console.log($scope.weatherResult); 
    
    // convert to degrees
    $scope.convertToDegrees = function(degK){ 
        return Math.round( degK - 273 );
    }
    
    // convert to fahrenheit
    $scope.convertToFahrenheit = function(degK){ 
        return Math.round( 1.8 * ( degK - 273 ) - 32 );
    }
    
    // convert date to readable
    $scope.convertToDate = function(dt){
        // return in milliseconds ==> * 1000
        return new Date(dt * 1000); 
    }
    
}]);
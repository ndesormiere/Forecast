// SERVICES

// allow to share data between home page and forecast page
weatherApp.service('cityService', function() {
   
    this.city = "Hong Kong";
    
});

// getting weather forcast from the internet
weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days){
        
        // get data from the internet ==> JSON_CALLBACK using JSONP means the API is fine being used from another website
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9859ea018df28acc329934f3e0f49fa4", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});
        
        // get results from API based on q(city) and cnt(number of days) and return them
        return weatherAPI.get({ q: city, cnt: days });
    
    };
    
}]);
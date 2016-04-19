// DIRECTIVES
weatherApp.directive("weatherReport", function(){
    return {
        restrict: 'E', //restrict to element
        templateUrl: 'directives/weatherReport.htm',
        replace: true,
        // isolate the scope
        scope: {
            weatherDay: "=", // object
            convertToStandard: "&", // function
            convertToDate: "&", // function
            dateFormat: "@" // text
        }
        
    }
});
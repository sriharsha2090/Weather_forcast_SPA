// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource','ui.bootstrap']);

weatherApp.filter('startFrom', function(){
    return function(data,start){
          if (!data || !data.length) { return; }
        start = 0+start;
        return data.slice(start);
    }
});





































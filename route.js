// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/whower',{
        templateUrl:'pages/wwer.html',
        controller:'homeController'
    })
    .when('/contact',{
        templateUrl:'pages/contact.html',
        controller :'homeController'
    })
    
});

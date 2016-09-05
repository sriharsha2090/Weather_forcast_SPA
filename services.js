// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weaherService',['$resource',function($resource){
    
    this.getWeather = function(city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=55869d0241cd709f04c14212937ec416", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
        
        return   weatherAPI.get({ q:city, cnt:days });
        
    };
    
}])
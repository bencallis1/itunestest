angular.module('myApp.services', [])
  .factory('httpRequest', ['$resource', function( $http, theUrl){
    return $http('https://itunes.apple.com/:action', 
      {action: 'search', callback: 'JSON_CALLBACK'}, 
      {get: {method: 'JSONP'}});
  }]);
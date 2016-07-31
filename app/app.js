(function(){

angular.module('angp',['ngAnimate','ui.router','ngMaterial'])

.config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('home',{
       url:'/',
         templateUrl:'app/home/home.html',

     });



})

}());

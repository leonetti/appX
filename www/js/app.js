// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('appX', ['ionic', 'firebase', 'appX.controllers', 'appX.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // state to represent login screen
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl as vm'
    })

    // state to represent signup screen
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl as vm'
    })

    // state for the home page
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl as vm'
    })

    // state for creating events
    .state('create', {
      url: '/create',
      templateUrl: 'templates/create-event.html',
      controller: 'CreateEventCtrl as vm'
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});

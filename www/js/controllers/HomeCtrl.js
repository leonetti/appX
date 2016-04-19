(function() {
  'use strict';
  app.controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', '$state'];

  function HomeCtrl($scope, $state) {
    console.log('Initialized HomeCtrl');
  }
})();

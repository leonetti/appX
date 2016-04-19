(function() {
  'use strict';
  app.controller('CreateEventCtrl', CreateEventCtrl);

  CreateEventCtrl.$inject = ['$scope', '$state'];

  function CreateEventCtrl($scope, $state) {
    console.log('Initialized CreateEventCtrl');
  }
})();

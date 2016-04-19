(function() {
  'use strict';
  app.controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$state'];

  function LoginCtrl($scope, $state) {
    console.log('Initialized LoginCtrl');

    $scope.user = {};

    $scope.login = function(email, password){
      var ref = new Firebase("https://app-x.firebaseio.com");
      ref.authWithPassword({
        email    : email,
        password : password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $state.go('home');
        }
      });
    }
  }
})();

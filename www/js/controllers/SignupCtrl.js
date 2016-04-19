(function() {
  'use strict';
  app.controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$scope', '$state'];

  function SignupCtrl($scope, $state) {
    console.log('Initialized SignupCtrl');
    var ref = new Firebase("https://app-x.firebaseio.com/");
    $scope.user = {
      gender: "Male"
    };

    $scope.signup = function() {
      if($scope.user.teleNum && $scope.user.firstName && $scope.user.lastName && $scope.user.age && $scope.user.gender && $scope.user.email && $scope.user.password && $scope.user.passwordConfirm) {
        if($scope.user.password === $scope.user.passwordConfirm) {
          ref.createUser({
            email: $scope.user.email,
            password: $scope.user.password
          }, function(error, userData) {
            if(error) {
              console.log('Error creating user: ', error);
            } else {
              console.log('Successfully created user account with uid: ', userData.uid);

              var ref = new Firebase("https://app-x.firebaseio.com/users/" + userData.uid);
              ref.set({
                email: $scope.user.email,
                first_name: $scope.user.firstName,
                last_name: $scope.user.lastName,
                age: $scope.user.age,
                telephone_number: $scope.user.teleNum,
                gender: $scope.user.gender
              })

              $state.go('home');
            }
          })
        }
      } else {
        console.log('incomplete')
      }
    }
  }
})();

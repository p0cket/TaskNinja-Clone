'user strict';

app.controller('AuthController', function($scope, $location, Auth){


  $scope.register =  function(user) {
    Auth.register(user).then(function() {
      console.log("registered Successfully!");
      $location.path('/');
    }, function(err) {
      console.log("Erorr.....");
    });
  };

  $scope.login = function(user) {

    Auth.login(user)
      .then(function() {
        console.log("Logged in successfully!");
        $location.path('/');
      }, function(err) {
        console.log("Error...");
      });
  };

  $scope.changePassword = function(user) {

    Auth.changePassword(user)
      .then(function() {

        //reset form
        $scope.user.email = "";
        $scope.user.oldpass = "";
        $scope.user.newPass = "";

        console.log("Password changed successfuully!");
      }, function(err) {
        console.log("Error..");
      });
  };

});

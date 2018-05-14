App.controller('mfaEnterCodePhoneTextController', function ($scope, $rootScope, $compile, $http, $location) {


  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $scope.confirm = function () {
    var userId = localStorage.getItem("userId");
    var token = localStorage.getItem("token");
    console.log(userId);
    var temp = { "userId": userId, "password": $scope.values.mfaTextPassword, "mfaEmailCode": $scope.values.mfaTextTemporaryIdentificationCode };
    var data = JSON.stringify(temp);
    $http({
      method: 'post',
      url: 'http://localhost:6060/users/mfa',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'token':token
      }
    }).then(function successCallback(response) {
      // console.log(JSON.stringify(response));
      if (response.data != "") {
        $location.path("/externalSystems");
      }
    }, function errorCallback(response) {
      console.log(response.statusText);
    });

  }


});


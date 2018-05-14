App.controller('companyInfoController', ['$scope','$rootScope','$compile','$http','$location', function($scope,$rootScope,$compile,$http,$location) {
    $scope.values = {};
    $scope.onSaveClose = function(redirectTo){
        console.log(redirectTo);
        var formdata = {
            "legalBusinessName":$scope.values.legalBusinessName,
            "doingBusinessAsName":$scope.values.doingBusinessAs,
            "corporateStructureDescription":$scope.values.userMessage,
            "mailingAddress":$scope.values.mailingAddress,
            "zip_code":$scope.values.zip,
            "state":$scope.values.state,
            "countryOfIncorporation":$scope.values.country,
            "expirationDate":"",
            "pscCodes":$scope.values.pscCode,
            "duns":$scope.values.duns,
            "cage":$scope.values.cage
        }
        
        var apiData = {
            info : formdata,
            userId : (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
        };

        $http({
            method: 'post',
            url: 'http://localhost:6060/users/Profile/company',
            data: apiData
        }).then(function successCallback(response) {
            console.log(response);
            $location.path('/'+redirectTo);
        }).catch(function(error){
            console.log(error);
        });
        
    }


    function populateCompanyDetails() {
        var token =  localStorage.getItem("token");
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/profile/details',
            data: {
                'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            },
            headers: {
                'Content-Type': 'application/json',
                'token' : token
            }
        
        }).then(function successCallback(response) {
            
            var populateObject = response.data.data;
            $scope.values.legalBusinessName = populateObject.legalBusinessName;
            $scope.values.doingBusinessAs = populateObject.doingBusinessAsName;
            $scope.values.userMessage = populateObject.corporateStructureDescription;
            $scope.values.mailingAddress = populateObject.mailingAddress;
            $scope.values.zip = populateObject.zip_code;
            $scope.values.state = populateObject.state;
            $scope.values.country = populateObject.countryOfIncorporation;
            $scope.values.enddate = populateObject.expirationDate;
            $scope.values.pscCode = populateObject.pscCodes;
            $scope.values.duns = populateObject.duns;
            $scope.values.cage = populateObject.cage;
           
        });
    }

    if (typeof localStorage.userId != "undefined") {
        populateCompanyDetails();
    }


}]);

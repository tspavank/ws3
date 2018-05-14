App.controller('profileController',['$scope', '$rootScope', '$compile', '$http', function ($scope, $rootScope, $compile, $http) {

    $scope.values = {};
    $scope.values.email_address= "";
    $scope.values.companylogo= "";
    $scope.values.legalBusinessName = "";
    $scope.values.corporateStructureDescription = "";
    $scope.values.licences = {
        'fflLicense': false,
        'atfLicence': false,
        'itarLicence': false,
        'businessTaxLicence': false
    };

    fetch_info();
    function fetch_info() {
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/profile/details',
            data: { 
                'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            }
        }).then(function successCallback(response) {
            console.log(response);
            if (response.status) {
                var details = response.data;
                var info = details.data;
                $scope.values.email_address = info.email_address;
                $scope.values.companylogo = 'http://localhost:6060/'+info.logo;
                $('#companyLogo').attr('src',$scope.values.companylogo);
                $scope.values.legalBusinessName = info.legalBusinessName;
                $scope.values.corporateStructureDescription = info.corporateStructureDescription;

                if(typeof info.ffl_license_no != "undefined" && info.ffl_license_no != ''){
                    $scope.values.licences.fflLicense = true;
                }

                if(typeof info.atf_license_no != "undefined" && info.atf_license_no != ''){
                    $scope.values.licences.atfLicence = true;
                }

                if(typeof info.itar_license_no != "undefined" && info.itar_license_no != ''){
                    $scope.values.licences.itarLicence = true;
                }

                if(typeof info.businesstax_license_no != "undefined" && info.businesstax_license_no != ''){
                    $scope.values.licences.businessTaxLicence = true;
                }
            }
        });
    }

    


}]);

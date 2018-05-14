App.controller('externalSystemsController', function ($scope, $rootScope, $compile, $http) {
	$scope.values = {};
	$scope.connectAccount = function (duns) {
		var url = 'https://api.data.gov:443/sam/v1/registrations/' + duns + '?api_key=fXnWNftp2tniBzwxcht5zzVnSOks3NPdplQSLNr3';
		
		// 'https://api.data.gov:443/sam/v1/registrations/0636039550000?api_key=fXnWNftp2tniBzwxcht5zzVnSOks3NPdplQSLNr3'
		// 0636039550000

		$http({
			method: 'get',
			url: url,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log(response.data);
				if (response.data != "undefined") {	
				$scope.customSamData(response.data.sam_data.registration);
					var data =  {['userId'] : localStorage.getItem("userId") , ['duns'] : duns , 'samsDetails' : response.data}
					// data.samsDetails =  response.data;
					$http({
						method: 'put',
						data: data,
						url: 'http://localhost:6060/users/account',
						headers: {
							'Content-Type': 'application/json'
						}
					}).then(function successCallback(response) {
						console.log(JSON.stringify(response.data));
						if (response.data.duns == data.duns) {
							$('#myModal').modal({ show: false });
							window.location = "http://" + window.location.host + "/#/externalSystemsSelected";
						}
					}, function errorCallback(response) {
						callback(false);
					});
			}
		}, function errorCallback(response) {
			console.log(response.statusText);
			$('#myModal').modal({ show: false });
		});

	};
	$scope.createCustomSamData = function(samData){
		var customSamData = {};
		customSamData.businessTypes = samData.businessTypes ; 
		customSamData.duns = samData.duns; 
		customSamData.duns4 = samData.dunsPlus4;
		customSamData.cage = samData.cage; 
		customSamData.purposeOfRegistration = samData.purposeOfRegistration;
		customSamData.registrationDate = samData.registrationDate;
		customSamData.expirationDate = samData.expirationDate;
		customSamData.activationDate = samData.activationDate;
		customSamData.lastUpdatedDate = samData.lastUpdateDate;
		customSamData.legalBusinessName = samData.legalBusinessName;
		customSamData.doingBusinessAsName = samData.doingBusinessAsName;
		customSamData.companyDivision = samData.companyDivision;
		customSamData.samAddress = samData.samAddress;
		customSamData.congressionalDistrict = samData.congressionalDistrict;
		customSamData.businessStartDate = samData.businessStartDate;
		customSamData.fiscalYearCloseDay = samData.fiscalYearEndCloseDate;
		customSamData.corporateUrl = samData.corporateUrl;
		customSamData.corporateStructureCode = samData.corporateStructureCode;
		customSamData.mailingAddress = samData.mailingAddress;
		customSamData.stateOfIncorporation = samData.stateOfIncorporation;
		customSamData.countryOfIncorporation = samData.countryOfIncorporation;
		customSamData.altGovtBusinessPoc = samData.altGovtBusinessPoc;
		customSamData.electronicBusinessPoc = samData.electronicBusinessPoc;
		customSamData.altElectronicBusinessPoc = samData.altElectronicBusinessPoc;
		customSamData.creditCardUsage = samData.creditCardUsage;
		customSamData.hasDelinquentFederalDebt = samData.hasDelinquentFederalDebt;
		customSamData.hasKnownExclusion = samData.hasKnownExclusion;
		customSamData.statusMessage = samData.statusMessage;
		customSamData.disasterRelief = samData.disasterRelief;	
	} 
	return customSamData;
	
});

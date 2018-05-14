App.controller('intakeFormController', ['$scope', '$http', function ($scope, $http) {


	$scope.selectAll_type = function (type) {

		if (type == "PurCompType") {
			var chngAmmo = $scope.values.purchasingPreferencesComponentsSelectAll;
			$scope.values.purchasingPreferencesComponentsCase = chngAmmo;
			$scope.values.purchasingPreferencesComponentsProjectile = chngAmmo;
			$scope.values.purchasingPreferencesComponentsGunpowder = chngAmmo;
			$scope.values.purchasingPreferencesComponentsPrimer = chngAmmo;
		}
		if (type == "PurAmmoType") {
			var chngAmmo = $scope.values.purchasingPreferencesAmmoTypeSelectAll;
			$scope.values.purchasingPreferencesAmmoTypeHandgun = chngAmmo;
			$scope.values.purchasingPreferencesAmmoTypeShotgun = chngAmmo;
			$scope.values.purchasingPreferencesAmmoTypeRifle = chngAmmo;
			$scope.values.purchasingPreferencesAmmoTypeRimfire = chngAmmo;
		}
		if (type == "PurBrand") {
			var chngAmmo = $scope.values.purchasingPreferencesBrandSelectAll;
			$scope.values.purchasingPreferencesBrandWinchester = chngAmmo;
			$scope.values.purchasingPreferencesBrandRemington = chngAmmo;
			$scope.values.purchasingPreferencesBrandFederal = chngAmmo;
			$scope.values.purchasingPreferencesBrandFiocchi = chngAmmo;
			$scope.values.purchasingPreferencesBrandHornday = chngAmmo;
		} if (type == "PurTradePart") {
			var chngAmmo = $scope.values.purchasingPreferencesTradePartnersSelectAll;
			$scope.values.purchasingPreferencesTradePartnersUSGoverntment = chngAmmo;
			$scope.values.purchasingPreferencesTradePartnersInternationalGovernment = chngAmmo;
			$scope.values.purchasingPreferencesTradePartnersUSCommercial = chngAmmo;
			$scope.values.purchasingPreferencesTradePartnersInternationalCommercial = chngAmmo;
		} if (type == "PurTimeOfSale") {
			var chngAmmo = $scope.values.purchasingPreferencesTermsOfSaleSelectAll;
			$scope.values.purchasingPreferencesTermsOfSaleImmediate = chngAmmo;
			$scope.values.purchasingPreferencesTermsOfSaleWithinthirtyDays = chngAmmo;
			$scope.values.purchasingPreferencesTermsOfSalethirtyDaysOrMore = chngAmmo;
		} if (type == "SellCompType") {
			var chngAmmo = $scope.values.sellingPreferencesComponentsSelectAll;
			$scope.values.sellingPreferencesComponentsCase = chngAmmo;
			$scope.values.sellingPreferencesComponentsProjectile = chngAmmo;
			$scope.values.sellingPreferencesComponentsGunpowder = chngAmmo;
			$scope.values.sellingPreferencesComponentsPrimer = chngAmmo;
		}
		if (type == "SellAmmoType") {
			var chngAmmo = $scope.values.sellingPreferencesAmmoTypeSelectAll;
			$scope.values.sellingPreferencesAmmoTypeHandgun = chngAmmo;
			$scope.values.sellingPreferencesAmmoTypeShotgun = chngAmmo;
			$scope.values.sellingPreferencesAmmoTypeRifle = chngAmmo;
			$scope.values.sellingPreferencesAmmoTypeRimfire = chngAmmo;
		}
		if (type == "SellBrand") {
			var chngAmmo = $scope.values.sellingPreferencesBrandSelectAll;
			$scope.values.sellingPreferencesBrandWinchester = chngAmmo;
			$scope.values.sellingPreferencesBrandRemington = chngAmmo;
			$scope.values.sellingPreferencesBrandFederal = chngAmmo;
			$scope.values.sellingPreferencesBrandFiocchi = chngAmmo;
			$scope.values.sellingPreferencesBrandHornday = chngAmmo;
		} if (type == "SellTradePart") {
			var chngAmmo = $scope.values.sellingPreferencesTradePartnersSelectAll;
			$scope.values.sellingPreferencesTradePartnersUSGoverntment = chngAmmo;
			$scope.values.sellingPreferencesTradePartnersInternationalGovernment = chngAmmo;
			$scope.values.sellingPreferencesTradePartnersUSCommercial = chngAmmo;
			$scope.values.sellingPreferencesTradePartnersInternationalcommercial = chngAmmo;
		} if (type == "SellTermOfSale") {
			var chngAmmo = $scope.values.sellingPreferencesTermsOfSaleSelectAll;
			$scope.values.sellingPreferencesTermsOfSaleImmediate = chngAmmo;
			$scope.values.sellingPreferencesTermsOfSaleWithinthirtyDays = chngAmmo;
			$scope.values.sellingPreferencesTermsOfSalethirtyDaysOrMore = chngAmmo;
		}


	}



	$scope.values = {};
	$scope.values.transactionType = {};
	$scope.values.transactionType.buy = false;
	$scope.values.transactionType.sell = false;
	$scope.phoneNumbr = /^\+?\d{3}[- ]?\d{3}[- ]?\d{4}$/;
	$scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

	$scope.values.businessType = {};
	$scope.values.businessType.Supplier = false;
	$scope.values.businessType.Retailer = false;
	$scope.values.businessType.Manufacturer = false;
	$scope.values.businessType.Consumer = false;
	$scope.values.businessType.Distributor = false;
	$scope.values.businessType.Government = false;

	$scope.hostname = "http://" + window.location.host;
	$scope.myFunc = function (val) {
		var obj = $scope.values.businessType;
		$scope.chkName = obj.Supplier + ',' + obj.Retailer + ',' + obj.Manufacturer + ',' + obj.Consumer + ',' + obj.Distributor + ',' + obj.Government;

	}



	$scope.buyintcheck = function () {
		var buy = document.getElementsByName("buyint");
		var hasChecked = false;
		for (var i = 0; i < buy.length; i++) {
			if (buy[i].checked) {
				hasChecked = true;
				$scope.values.transactionType.buy = true;
				break;
			} else {
				$scope.values.transactionType.buy = false;
			}
		}


	}

	$scope.sellintcheck = function () {
		var sell = document.getElementsByName("sellint");
		var hasChecked = false;
		for (var i = 0; i < sell.length; i++) {
			if (sell[i].checked) {
				hasChecked = true;
				$scope.values.transactionType.sell = true;
				break;
			} else {
				$scope.values.transactionType.sell = false;
			}
		}


	}
	$scope.buy_sell=function (buy, sell) {
		var obj = { ['buy']: buy, ['sell']: sell };
		return obj;
	  }

	  $scope.values.purchasingPreferencesComponentsCase = false;
	  $scope.values.sellingPreferencesComponentsCase = false;
	  $scope.values.purchasingPreferencesComponentsProjectile = false;
	  $scope.values.sellingPreferencesComponentsProjectile = false;
	  $scope.values.purchasingPreferencesComponentsGunpowder = false;
	  $scope.values.sellingPreferencesComponentsGunpowder = false;
	  $scope.values.purchasingPreferencesComponentsPrimer = false;
	  $scope.values.sellingPreferencesComponentsPrimer = false;
	  $scope.values.purchasingPreferencesAmmoTypeHandgun = false;
	  $scope.values.sellingPreferencesAmmoTypeHandgun = false;
	  $scope.values.purchasingPreferencesAmmoTypeShotgun= false;
	  $scope.values.sellingPreferencesAmmoTypeShotgun= false;
	  $scope.values.purchasingPreferencesAmmoTypeRifle= false;
	  $scope.values.sellingPreferencesAmmoTypeRifle= false;
	  $scope.values.purchasingPreferencesAmmoTypeRimfire= false;
	  $scope.values.sellingPreferencesAmmoTypeRimfire= false;
	  $scope.values.purchasingPreferencesBrandWinchester= false;
	  $scope.values.sellingPreferencesBrandWinchester= false;
	  $scope.values.purchasingPreferencesBrandRemington= false;
	  $scope.values.sellingPreferencesBrandRemington= false;
	  $scope.values.purchasingPreferencesBrandFederal= false;
	  $scope.values.sellingPreferencesBrandFederal= false;
	  $scope.values.purchasingPreferencesBrandFiocchi= false;
	  $scope.values.sellingPreferencesBrandFiocchi= false;
	  $scope.values.purchasingPreferencesTradePartnersUSGoverntment= false;
	  $scope.values.sellingPreferencesTradePartnersUSGoverntment= false;
	  $scope.values.purchasingPreferencesTradePartnersInternational= false;
	  $scope.values.sellingPreferencesTradePartnersInternational= false;
	  $scope.values.purchasingPreferencesTermsOfSaleImmediate= false;
	  $scope.values.sellingPreferencesTermsOfSaleImmediate= false;
	  $scope.values.purchasingPreferencesTermsOfSaleWithinthirtyDays= false;
	  $scope.values.sellingPreferencesTermsOfSaleWithinthirtyDays= false;
	  $scope.values.purchasingPreferencesTermsOfSalethirtyDaysOrMore= false;
	  $scope.values.sellingPreferencesTermsOfSalethirtyDaysOrMore= false;
	  
	  $scope.submit = function () {
	   
		var formdata = {
			"compCase": $scope.buy_sell($scope.values.purchasingPreferencesComponentsCase, $scope.values.sellingPreferencesComponentsCase),
			"compProjectile": $scope.buy_sell($scope.values.purchasingPreferencesComponentsProjectile, $scope.values.sellingPreferencesComponentsProjectile),
			"compGunpowder": $scope.buy_sell($scope.values.purchasingPreferencesComponentsGunpowder, $scope.values.sellingPreferencesComponentsGunpowder),
			"compPrimer": $scope.buy_sell($scope.values.purchasingPreferencesComponentsPrimer, $scope.values.sellingPreferencesComponentsPrimer),
			"ammoHandgun": $scope.buy_sell($scope.values.purchasingPreferencesAmmoTypeHandgun, $scope.values.sellingPreferencesAmmoTypeHandgun),
			"ammoShortgun": $scope.buy_sell($scope.values.purchasingPreferencesAmmoTypeShotgun, $scope.values.sellingPreferencesAmmoTypeShotgun),
			"ammoRifle": $scope.buy_sell($scope.values.purchasingPreferencesAmmoTypeRifle, $scope.values.sellingPreferencesAmmoTypeRifle),
			"ammoRimfire": $scope.buy_sell($scope.values.purchasingPreferencesAmmoTypeRimfire, $scope.values.sellingPreferencesAmmoTypeRimfire),
			"brandWinchester": $scope.buy_sell($scope.values.purchasingPreferencesBrandWinchester, $scope.values.purchasingPreferencesBrandWinchester),
			"brandRemington": $scope.buy_sell($scope.values.purchasingPreferencesBrandRemington, $scope.values.sellingPreferencesBrandRemington),
			"brandFederal": $scope.buy_sell($scope.values.purchasingPreferencesBrandFederal, $scope.values.sellingPreferencesBrandFederal),
			"brandFiocchi": $scope.buy_sell($scope.values.purchasingPreferencesBrandFiocchi, $scope.values.sellingPreferencesBrandFiocchi),
			"tpUsGovt": $scope.buy_sell($scope.values.purchasingPreferencesTradePartnersUSGoverntment, $scope.values.sellingPreferencesTradePartnersUSGoverntment),
			"tpIntGovt": $scope.buy_sell($scope.values.purchasingPreferencesTradePartnersInternational, $scope.values.sellingPreferencesTradePartnersInternational),
			"saletermImmediate": $scope.buy_sell($scope.values.purchasingPreferencesTermsOfSaleImmediate, $scope.values.sellingPreferencesTermsOfSaleImmediate),
			"saletermLt30days": $scope.buy_sell($scope.values.purchasingPreferencesTermsOfSaleWithinthirtyDays, $scope.values.sellingPreferencesTermsOfSaleWithinthirtyDays),
			"saletermGt30days": $scope.buy_sell($scope.values.purchasingPreferencesTermsOfSalethirtyDaysOrMore, $scope.values.sellingPreferencesTermsOfSalethirtyDaysOrMore),
            "legalBusinessName": $scope.values.legalBusinessName,
            "description": $scope.values.description,
            "businessTypeSupplier": $scope.values.businessType.Supplier,
            "businessTypeRetailer": $scope.values.businessType.Retailer,
            "businessTypeManufacturer": $scope.values.businessType.Manufacturer,
            "businessTypeConsumer": $scope.values.businessType.Consumer,
            "businessTypeDistributor": $scope.values.businessType.Distributor,
            "businessTypeGovernment": $scope.values.businessType.Government,
            "country": $scope.values.country,
            "address": $scope.values.address,
            "zip": $scope.values.zip,
            "state": $scope.values.state,
            "city": $scope.values.city,
            "emailId": $scope.values.email,
			"phoneCode": $scope.values.phoneCode,
			"phoneNumber": $scope.values.phoneNumber
        };

		$scope.sellintcheck();
		$scope.buyintcheck();
		var data = JSON.stringify(formdata);
		$http({
			method: 'post',
			url: 'http://localhost:6060/users/intake',
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log(JSON.stringify(response));
			// if(response.data == true){
			window.location = $scope.hostname + "#/accountInformation";
			// }
		}, function errorCallback(response) {
			console.log(response.statusText);
		});
	}
}
]);

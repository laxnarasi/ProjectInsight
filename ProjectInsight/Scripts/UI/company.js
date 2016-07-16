
function Viewmodel() {

}



var app = angular.module("companyApp", ['ui.bootstrap']);
 

app.controller("companyCtrl", function ($scope, $uibModal) {
    $scope.Code = "";
    $scope.Name = "";
    $scope.ContactPerson = "";
    $scope.ContactNo = "";
    $scope.EmailAddress = "";
    $scope.PAN = "";
    $scope.TAN = "";
    $scope.ContractSigned = [];
    $scope.ContractStartDate = "";
    $scope.ContractEndDate = "";

    $scope.AddressDetails = [];
    $scope.AccountDetails = [];
     
    
    $scope.NewAddress = function () {
        $scope.newAddress = new Address();
        var modalInstance = $uibModal.open({
            animation: false,
            backdrop: 'static',
            size: 'lg',
            templateUrl: '/templates/company.html',
              controller: 'customerModalCtrl',
            resolve: {
                address: function () {
                    return $scope.newAddress;
                }
            }
        });
        
        modalInstance.result.then(function (response) {
            $scope.AddressDetails.push(response);            
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
         

    }
    $scope.NewAccount = function () {        
        $scope.newAccount = new Account();
        var modalInstance = $uibModal.open({
            animation: false,
            backdrop: 'static',
            size: 'lg',
            templateUrl: '/templates/account.html',
            controller: 'AccountModalCtrl',
            resolve: {
                account: function () {
                    return new Account();
                }
            }
        });

        modalInstance.result.then(function (response) {
            $scope.AccountDetails.push(response);
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });


    }



    function Address() {
        var self = this;
        self.AddressType = "";
        self.AddressLine1 = "";
        self.AddressLine2 = "";
        self.AddressLine3 = "";
        self.Address = function ()
        {
            var result = "";
            if (self.AddressLine1 != null && self.AddressLine1!="")
            {
                result = result + self.AddressLine1 + "|";
            }
            if (self.AddressLine2 != null && self.AddressLine2 != "") {
                result = result + self.AddressLine2 + "|";
            }
            if (self.AddressLine3 != null && self.AddressLine3 != "") {
                result = result + self.AddressLine3 + "|";
            }
            return result;
        }
        self.Place = "";
        self.City = "";
        self.State = "";
        self.Pincode = "";
        self.Country = "";
        self.LanNo1 = "";
        self.LanNo2 = "";
        self.Telex = "";
        self.Mobile = "";
        self.Contact = function ()
        {
            var result = "";
            if (self.LanNo1 != null && self.LanNo1 != "")
            {
                result = result + self.LanNo1 + "|";
            }
            if (self.LanNo2 != null && self.LanNo2 != "") {
                result = result + self.LanNo2 + "|";
            }
            if (self.Mobile != null && self.Mobile != "") {
                result = result + self.Mobile + "|";
            }
            return result;
        }
        self.Pager = "";
        self.Email = "";
        self.Web = "";
        self.Remove = function (data) {
            var index = $scope.AddressDetails.indexOf(data);
            $scope.AddressDetails.splice(index, 1);
        }
    }
     
    function Account()
    {
        var self = this;
        self.AccountType ="";
        self.Bank ="";
        self.AccountNo ="";
        self.IFSCCODE ="";
        self.MICRNO ="";
        self.PinCode = "";
        self.Remove = function (data) {
            var index = $scope.AccountDetails.indexOf(data);
            $scope.AccountDetails.splice(index, 1);
        }
    }
});

app.controller('customerModalCtrl', ['$scope', '$uibModalInstance', 'address',  function ($scope, $modalInstance, address) {
     $scope.address = address;

     $scope.AddAddress = function () {
         //debugger;
         $modalInstance.close($scope.address);
         //Customer.Save($scope.customer).then(function (response) {
         //    $modalInstance.close(response.data);
         //})
     };
     $scope.cancel = function () {
         $modalInstance.dismiss('cancel');
     };
}]);

app.controller('AccountModalCtrl', ['$scope', '$uibModalInstance', 'account', function ($scope, $modalInstance, account) {

    $scope.account = account;
    $scope.AddAccount = function () {        
        $modalInstance.close($scope.account);        
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

 
/*(function () {
    'use strict';

    angular
        .module('starter.services')
        .service('loginservice', loginservice);

    loginservice.$inject = ['$http', '$q'];

    function loginservice($http, $q) {
       var vm = this;
        //vm.poldata = false;
        vm.poldata = false;
        vm.GetData = function(policy, zip) {//getData(policy,zip);

       // function getData(policy, zip) {
            /*var def = $q.defer();

            $http.get("./albums.ms")
                .success(function(data) {
                    vm.poldata = data;
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to get albums");
                });
            return def.promise;*/

/*            if (policy == 'A12345' & zip == '54115'  )
            {
                vm.poldata = true;
                return vm.poldata;
            }
            else {
                vm.poldata =  false;
                return vm.poldata;
            }
          }

    return {
        poldata : vm.poldata;
        GetData : vm.GetData;
    }
        }
})();*/
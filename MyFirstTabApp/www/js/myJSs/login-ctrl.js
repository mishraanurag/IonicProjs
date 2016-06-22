/*(function () {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('loginctrl', loginctrl);

    loginctrl.$inject = ['loginservice']; 

    function loginctrl(loginservice) {
        /* jshint validthis:true */
      /*  var vm = this;
       // vm.title = 'Login Controller';
       vm.CanActivate = false;
       vm.AreUsers = '';
       vm.polnum = '';
       vm.zip = '';
       vm.login = login;
       vm.Message = '';

       activate();

        function activate() {        
            loginservice.GetData(vm.polnum, vm.zip).then(function(data){
                vm.CanActivate = data;
                vm.AreUsers = 'YES';

            });
        }

        function login(){
            if (vm.CanActivate & vm.AreUsers == 'YES')
            {
                vm.Message = 'Policy holder of policy number: ' + vm.polnum + ' is succesfully logged into this App.';
            }
        }
    }
})();*/
angular.module('starter.controllers', [])

//.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('loginctrl', function($scope, $ionicPopup, Chats, $state, $ionicLoading, $timeout){

      $scope.example = {
        polnum: '',
        zip: ''
      };
       /*$scope.CanActivate;
       $scope.AreUsers;   
       //$scope.polnum;
       //$scope.zip;
       $scope.Message;*/
       $scope.login = function(){        

          if ( $scope.example.polnum == 'A12345' &  $scope.example.zip == '54115')
          {
            $ionicLoading.show({
          content: 'Loading...<br/><i class="icon ion-looping"></i>',
          //animation: 'fade-out',
          showBackdrop: false,
          maxWidth: 200,
          showDelay: 4
               });
               /*$ionicloading.show({
                template : 'Loading...',
                duration: 3000
                });*/
                /* $scope.CanActivate = true;
                 $scope.AreUsers = 'YES';           
                 $scope.message = 'Policy holder of policy : ' +  $scope.polnum + ' is succesfully logged into this App.';*/
                 //$scope.example.polnum = '';
                 //$scope.example.zip='';
                 /*var mysuccessPopup = $ionicPopup.show({
                  template: '<div><font color="blue">Logged in...</font></div>',
                  title: 'Policy Login Succesful',
                  //subTitle: 'Please click OK to proceede',
                  scope: $scope,
                  buttons: [
            { text: 'OK' },
            ]
            });*/            
                 // $ionicloading.hide(); 
                 $timeout(function() {
                  $ionicLoading.hide();
                  $state.go('tab.dash-detail');
                    }, 4000);                       
               }
            else 
            {
                 $scope.CanActivate = false;
                 $scope.AreUsers = 'NO';           
                 $scope.Message = 'Sorry! Please check provided information.';
                 $scope.example.polnum = '';
                 $scope.example.zip='';
                 var myfailedPopup = $ionicPopup.show({
                  template: '<div><font color="red">Please provide valid information !</font></div>',
                  title: 'Policy Login failed',
                  //subTitle: 'Please click OK to proceede',
                  scope: $scope,
                  buttons: [
            { text: 'OK' },
            ]
            });
            }    

            //$state.go('tab.dash-detail');
        };              

})

.controller('PolCntrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.policy = Chats.getPol();
  $scope.Vehical = Chats.vehicalforterm();
  /*$scope.remove = function(chat) {
    Chats.remove(chat);
  };*/
});

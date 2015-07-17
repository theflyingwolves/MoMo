angular.module('starter.controllers', [])

.controller('ExploreCtrl', function ($scope, $ionicPopover, Missions) {
    $scope.missions = Missions.all();
    $scope.remove = function (mission) {
        Missions.remove(mission);
    }

    // .fromTemplate() method
    var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });

    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('templates/offer-popover.html', {
        scope: $scope
    }).then(function(popover) {
        console.log(popover)
        $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action
    });
})

.controller('MissionDetailCtrl', function ($scope, $stateParams, Missions) {
    $scope.mission = Missions.get($stateParams.missionId);
})

.controller('ChatsCtrl', function ($scope, Missions) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.missions = Missions.all();

    $scope.remove = function (mission) {
        Missions.remove(mission);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams,$ionicModal, Missions) {
    $scope.mission = Missions.get($stateParams.missionId);

    $ionicModal.fromTemplateUrl('templates/chat-info.html',{
      scope:$scope,
      animation:'slide-in-up'
    }).then(function(modal){
      $scope.orderInfoModal = modal;
    });

    $scope.viewDetails = function(){
      $scope.orderInfoModal.show();
    };

    $scope.hideDetails = function(){
      $scope.orderInfoModal.hide();
    };
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('ProfileCtrl',function($scope,Profiles){
  $scope.profile = Profiles.all();
  $scope.loadDetail = function(id){
    
  };
})

.controller('ProfileEditCtrl',function($scope,$stateParams,Profiles){
  $scope.profile = Profiles.all();
})

.controller('SettingsCtrl',function($scope,Profiles){
  $scope.profile = Profiles.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

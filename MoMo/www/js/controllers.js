var DEFAULT = 0;
var ONGOING = 1;
var COMPLETED = 2;
var ABORTED = 3;

angular.module('starter.controllers', [])

.controller('ExploreCtrl', function ($scope, $ionicPopover, Missions, Profiles) {
    $scope.missions = Missions.all();
    $scope.likeFlag = false;
    $scope.remove = function (mission) {
        Missions.remove(mission);
    }

    $scope.isLiked = function(id) {
        return Profiles.isLiked(id);

    }

    $scope.triggerLikeFlag = function () {
        $scope.likeFlag = !$scope.likeFlag;
    }



    $scope.openOfferPopover = function($event, missionId ) {
        $ionicPopover.fromTemplateUrl('templates/offer-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
            $scope.popover.show($event);
            console.log($scope.popover);
            console.log(document.getElementById('btn-accept').onclick);
            console.log(missionId);
            document.getElementById('btn-accept').onclick = function(){
                console.log("clicked");
                Missions.updateStatus(missionId, ONGOING);
                $scope.closePopover()

            }
        });
    };
    $scope.closePopover = function() {
        $scope.popover.remove();
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

.controller('ExploreProfileCtrl', function($scope, $stateParams, Missions, Profiles) {
    $scope.profileId = $stateParams.missionId
    $scope.profile = Missions.get($scope.profileId);

    $scope.addToListList = function() {
        Profiles.addToListList($scope.profileId)
    }

    $scope.removeFromLikeList = function() {
        Profiles.removeFromLikeList($scope.profileId)
    }

    $scope.isLiked = function() {
        return Profiles.isLiked($scope.profileId);
    }

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

.controller('ChatDetailCtrl', function ($scope,  $timeout, $ionicScrollDelegate, $stateParams, Missions) {
    $scope.mission = Missions.get($stateParams.missionId);
    $scope.hideTime = true;

    var alternate,
        isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

    $scope.sendMessage = function() {
        alternate = !alternate;

        var d = new Date();
        d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

        $scope.messages.push({
            userId: alternate ? '12345' : '54321',
            text: $scope.data.message,
            time: d
        });

        delete $scope.data.message;
        $ionicScrollDelegate.scrollBottom(true);

    };


    $scope.inputUp = function() {
        if (isIOS) $scope.data.keyboardHeight = 216;
        $timeout(function() {
            $ionicScrollDelegate.scrollBottom(true);
        }, 300);

    };

    $scope.inputDown = function() {
        if (isIOS) $scope.data.keyboardHeight = 0;
        $ionicScrollDelegate.resize();
    };

    $scope.closeKeyboard = function() {
        // cordova.plugins.Keyboard.close();
    };


    $scope.data = {};
    $scope.myId = '12345';
    $scope.messages = [];

})

.controller('RequestCtrl', function ($scope, $ionicPopover) {
    $scope.requestList = [
    {   restaurant:"McDonald's",
        time:"6:00pm",
        tips:"$2",
        comment:"an upsize double cheeseburger meal with fries and normal coke ",
        status:2}
    ]



    $scope.openRequestPopover = function($event) {
        $ionicPopover.fromTemplateUrl('templates/new-request.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
            $scope.popover.show($event);
            console.log($scope.popover)
        });
    }
    $scope.newRequestDetail = {};
    $scope.resetNewRequestDetail = function(){
        $scope.newRequestDetail = {
        restaurant:"",
        time:"",
        tips:"",
        comment:"",
        status:0 //0:uninit, 1:pending, 2:alert, 3:confirmed
        }
    }
    $scope.confirmAddRequest = function(){
        // console.log($scope.newRequestDetail)
        $scope.newRequestDetail.status = 1;
        $scope.requestList.push($scope.newRequestDetail)
        $scope.resetNewRequestDetail()
        $scope.popover.hide()
    }

    // handle status of the request list
    $scope.is_request_pending = function(index){
        return $scope.requestList[index].status == 1
    }
    $scope.is_request_alerted = function(index){
        return $scope.requestList[index].status == 2
    }
    $scope.is_request_confirmed = function(index){
        return $scope.requestList[index].status == 3
    }

    // get a short comment as item note
    $scope.get_request_comment_short = function(index){
        if ($scope.requestList[index].comment.length > 20) {
            return $scope.requestList[index].comment.substring(0,15)+"..."
        } else{
            return $scope.requestList[index].comment
        }
    }
    
    $scope.currentRequestOpened = {}
    $scope.openAcceptPopover = function(index) {
        if ($scope.is_request_alerted(index)) {
            $scope.currentRequestOpened = $scope.requestList[index]
            $ionicPopover.fromTemplateUrl('templates/accept-popover.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
                $scope.popover.show();
            });
        }            
    };
    $scope.closePopover = function() {
        if ($scope.popover) {
            $scope.popover.remove();
        };
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
})


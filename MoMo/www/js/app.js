// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.explore', {
    url: '/explore',
    views: {
      'tab-explore': {
        templateUrl: 'templates/tab-explore.html',
        controller: 'ExploreCtrl'
      }
    }
  })

  .state('tab.explore-profile', {
      url: '/explore/:missionId',
      views: {
          'tab-explore': {
              templateUrl: 'templates/tab-explore-profile.html',
              controller: 'ExploreProfileCtrl'
          }
      }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
  })

  .state('tab.chat-detail', {
      url: '/chats/:missionId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
  })

  .state('tab.chat-detail-info',{
      url:'/chats/info/:missionId',
      views:{
        'tab-chats':{
          templateUrl:'templates/chat-info.html',
          controller:'ChatDetailCtrl'
        }
      }
  })

  .state('tab.profile',{
    url:'/profile',
    views:{
      'tab-profile':{
        templateUrl:'templates/tab-profile.html',
        controller:'ProfileCtrl'
      }
    }
  })

  .state('tab.edit-address',{
    url:'/profile/:id/addresses',
    views:{
      'tab-profile':{
        templateUrl:'templates/tab-profile-edit-address.html',
        controller:'ProfileEditCtrl'
      }
    }
  })

  .state('tab.edit-contact',{
    url:'/profile/:id/contacts',
    views:{
      'tab-profile':{
        templateUrl:'templates/tab-profile-edit-contact.html',
        controller:'ProfileEditCtrl'
      }
    }
  })

  .state('tab.settings',{
    url:'/profile/:id/settings',
    views:{
      'tab-profile':{
        templateUrl:'templates/settings.html',
        controller:'SettingsCtrl'
      }
    }
  })

  .state('tab.request', {
    url: '/request',
    views: {
      'tab-request': {
        templateUrl: 'templates/tab-request.html',
        controller: 'RequestCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/explore');


})

// All this does is allow the message
// to be sent when you tap return
.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
})




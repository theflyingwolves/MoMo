angular.module('starter.services', [])

.factory('Missions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var missions = [{
        id: 0,
        name: 'Ben Sparrow',
        location: 'Temasek',
        time: 'one hour',
        message: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        location: 'PGP',
        message: 'Hey, it\'s me',
        time: 'one hour',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        location: 'KE',
        message: 'I should buy a boat',
        time: 'one hour',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 3,
        name: 'Perry Governor',
        location: 'RH',
        time: 'one hour',
        message: 'Look at my mukluks!',
        face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        location: 'Shears',
        time: 'one hour',
        message: 'This is wicked good ice cream.',
        face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];


  return {
    all: function() {
      return missions;
    },
    remove: function(mission) {
      missions.splice(missions.indexOf(mission), 1);
    },
    get: function(missionId) {
      for (var i = 0; i < missions.length; i++) {
        if (missions[i].id === parseInt(missionId)) {
          return missions[i];
        }
      }
      return null;
    }
  };
});

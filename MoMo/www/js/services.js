angular.module('starter.services', [])

.factory('Missions', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var missions = [{
        id: 0,
        name: 'Ben Sparrow',
        location: 'Temasek',
        time: 'one hour',
        message: '肉夹馍 金德来',
        price: 4,
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        location: 'PGP',
        message: '凉皮 黄土地',
        time: 'one hour',
        price: 3,
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        location: 'KE',
        time: 'one hour',
        price: 5.5,
        message: '番茄鸡蛋面 香港小厨',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 3,
        name: 'Perry Governor',
        location: 'RH',
        time: 'one hour',
        price: 3.5,
        message: '刀削面 清香小菜',
        face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        location: 'Shears',
        time: 'one hour',
        price: 3,
        message:  '九里香 PGP',
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
})

.factory('Profiles',function(){
  var profile = {
    id:0,
    name:'MoMo',
    description:'Hi~ This is MoMo~',
    addresses:[
                '12 Kent Ridge Drive, Singapore(119243)',
                '13 Kent Ridge Drive, Singapore(119243)',
                '14 Kent Ridge Drive, Singapore(119243)',
              ],
    contact:'+65 82124118',
    face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    facebook:'theflyingwolves@163.com',
    wechat:'theflyingwolves'
  };

  return {
    all: function(){
      return profile;
    }
  };

})


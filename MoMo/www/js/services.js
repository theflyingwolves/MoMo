angular.module('starter.services', [])

.factory('Missions', function() {
    // Might use a resource here that returns a JSON array

    var DEFAULT = 0;
    var ONGOING = 1;
    var COMPLETED = 2;
    var ABORTED = 3;


    // Some fake testing data
    var missions = [{
        id: 0,
        name: 'Ben Sparrow',
        location: 'Temasek',
        time: 'one hour',
        message: '肉夹馍 金德来',
        price: 4,
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        status: DEFAULT

    }, {
        id: 1,
        name: 'Max Lynx',
        location: 'PGP',
        message: '凉皮 黄土地',
        time: 'one hour',
        price: 3,
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
        status: DEFAULT

    }, {
        id: 2,
        name: 'Adam Bradleyson',
        location: 'KE',
        time: 'one hour',
        price: 5.5,
        message: '番茄鸡蛋面 香港小厨',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
        status: DEFAULT

    }, {
        id: 3,
        name: 'Perry Governor',
        location: 'RH',
        time: 'one hour',
        price: 3.5,
        message: '刀削面 清香小菜',
        face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png',
        status: ONGOING
    }, {
        id: 4,
        name: 'Mike Harrington',
        location: 'Shears',
        time: 'one hour',
        price: 3,
        message:  '九里香 PGP',
        face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
        status: COMPLETED
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
        },
        add: function(mission) {
            missions.push(mission)
        },
        updateStatus: function(missionId, status) {
            for (var i = 0; i < missions.length; i++) {
                if (missions[i].id === parseInt(missionId)) {
                    missions[i].status = status
                }
            }
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

    var likeList = [2];

    return {
        all: function(){
          return profile;
        },

        addToListList: function(id) {
            likeList.push(parseInt(id))
            console.log(id)
        },

        removeFromLikeList: function(id) {
            idx = likeList.indexOf(parseInt(id));
            likeList.splice(idx, 1)
        },

        allLikes: function(){
            return likeList
        },

        isLiked: function(id) {
            return likeList.indexOf(parseInt(id)) != -1
        }


    };

})


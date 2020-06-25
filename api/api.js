var request = require('request');
var search = {};

//사용자 정보 api
search.userInfo = function(name){
    return new Promise(function(resolve,reject){
        request({
            uri : 'http://localhost:5000/api/userinfo/mark',
            method: 'GET'
        },function(err,res,body){
            resolve(JSON.parse(body).ppuid);
        });
    });
};

//ppuid를 이용한 게임링크 api
search.ppuidInfo = function(ppuid){
    return new Promise(function(resolve,reject){
        request({
            uri : 'http://localhost:5000/api/gameInfo/'+ppuid,
            method: 'GET'
        },function(err,res,body){
           // console.log(JSON.parse(body).link);
            resolve(JSON.parse(body).link);
        });
    });
};

search.gameInfo = function(){
    return "";
}

module.exports = search;
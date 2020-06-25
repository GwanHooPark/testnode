var nock = require('nock');
var mock = {};

//사용자 정보와 ppuid에 따른 게임 링크?? response를 가지고 있는 mock 이예요.

mock.setApi = function(){
    const mock = {
        username : 'mark',
        id : 'markId',
        ppuid : [0,1,2,3,4]
    };
    nock('http://localhost:5000')
        .get('/api/userinfo/mark')
        .reply(200,mock);


    const gamelink = [
        {
            link : "link0"
        },
        {
            link : "link1"
        },
        {
            link : "link2"
        },
        {
            link : "link3"
        },
        {
            link : "link4"
        }
    ];

    for(let i=0 ; i < 5 ; i++) {
        nock('http://localhost:5000')
            .get('/api/gameInfo/'+i)
            .reply(200, gamelink[i]);
    }

};
module.exports = mock;
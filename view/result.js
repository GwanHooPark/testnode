const searchGameInfo = require('../api/api');
var result = {};
result.userInfo = function(req,res) {
    searchGameInfo.userInfo(req.params.username).then(data => {
        async function loop(array) {
            let gameLink = []
            for(var ppuidIndex = 0 ; ppuidIndex < data.length ; ppuidIndex++ ){
                    await searchGameInfo.ppuidInfo(data[ppuidIndex]).then(data =>{
                        gameLink.push(data);
                    })
            }
            return gameLink;
        }
        return loop(data);
    }).then(data => {
        console.log('request 모두 수행하고 반환받은 데이터로 다음 로직을 수행하면 되지 않을까요?')
        console.log(data);
        
    });
    res.end("done");
};
module.exports = result;
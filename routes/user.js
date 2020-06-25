const express = require('express');
const router = express.Router();
const mockTest = require('../mock/mock');
const result = require('../view/result');

//mock데이터를 세팅합니다.
mockTest.setApi();

//http://locahost:5000/usr/search/mark 같은 url로 호출
router.get('/search/:username',function(req,res) {
    result.userInfo(req,res);
});

module.exports = router;
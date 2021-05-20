const user = require('./schema');
const router = require('express').Router();

function insert(account, password) {
    new user({
        account: account,
        password: password
    }).save();

}

router.get('/', (req, res) => {
    // 輸入一筆測資進入資料庫
    insert('我有李享', '12345678');
    insert('我想畢業', '7654321');

    res.send({'msg': '應該有輸入成功吧'});
});


module.exports = router;
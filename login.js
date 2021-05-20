const user = require('./schema');
const router = require('express').Router();


router.get('/', (req, res) => {
    // 從資料庫找資料 req.qurey.id -> 我有李享
    user.findOne({
        account: '我有李享'
    }, (err, result) => {
        if (err) {
            console.err(err);
        } else {
            res.send({
                msg: 'Success',
                account: result.account,
                password: result.password
            })
        }
    });
});

module.exports = router;
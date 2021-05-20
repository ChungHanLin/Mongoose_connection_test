const express = require('express');
const mongo = require('mongoose');
const app = express();

url = 'mongodb://127.0.0.1:27017/testdb';

// Check mongo connection
mongo.connect(url, (err) => {
    if (err) throw err;

    console.log("Connect to Mongo DB");
});

app.get('/', (req, res) => {
    res.send("執行 localhost:9527/signup 輸入資料 -> 執行 localhost:9527/login 看結果");
});

app.use('/signup', require('./signup'));
app.use('/login', require('./login'));

app.listen(9527, () => {
    console.log("跑起來跑起來");
})
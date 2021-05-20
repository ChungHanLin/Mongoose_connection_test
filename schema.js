const mongo = require('mongoose');
const schema = mongo.Schema;

const userSchema = new schema({
    account: String,
    password: String
});

const user = mongo.model('users', userSchema);

module.exports = user;

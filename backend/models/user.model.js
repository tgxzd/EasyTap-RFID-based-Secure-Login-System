const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        name: { tpye: String, required: true},
        email: { type: String, required: true},
        password: { type: String, required: true},
        quota: { tpye: String},
    },
    { collection: 'user-data'}
)

const model = mongoose.model('UserData' ,User)
module.exports = model
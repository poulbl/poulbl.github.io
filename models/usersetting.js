const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersettingSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    theme: {
        type: String
    },
    hometown: {
        type: String
    }
}, { timestamps: true })

const UserSetting = mongoose.model('Usersetting', usersettingSchema) // first parameter gets pluralized and mongoose looks for a collection with that name automatically

module.exports = UserSetting
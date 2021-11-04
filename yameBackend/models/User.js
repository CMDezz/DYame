const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Account: { type: String, required: true },
    Password: { type: String, required: true },
    Name: { type: String, required: true },
    Address: { type: String },
    Mail: { type: String, required: true },
})

const User = mongoose.model("User", UserSchema, "User");

module.exports = {
    UserSchema, User
}
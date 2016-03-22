'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proverbDB = require('../config-db').proverbDB;

const UserSchema = new Schema({
    email : {
        type: String,
        unique: true
    },
    first_name: String,
    last_name: String,
    created: {
        type: Date,
        default: Date.now,
    }
    updated: Date,
    profile: {
        avatar_url: String,
        bio: String
    }
});

module.exports = proverbDB.model('User', UserSchema);


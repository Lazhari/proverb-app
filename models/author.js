'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const ProverbDB = require('../config-db').ProverbDB;

const AuthorSchema = new Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    created: Date,
    about: String
});

module.exports = ProverbDB.model('Author', AuthorSchema);

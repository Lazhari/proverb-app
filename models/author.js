'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proverbDB = require('../config-db').proverbDB;

const AuthorSchema = new Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    created: Date,
    about: String
});

module.exports = proverbDB.model('Author', AuthorSchema);

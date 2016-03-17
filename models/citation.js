'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proverbDB = require('../config-db').proverbDB;

const CitationSchema = new Schema({
    author: String,
    quote: String
});

module.exports = proverbDB.model('Citation', CitationSchema);

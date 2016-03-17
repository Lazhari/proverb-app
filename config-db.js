'use strict';

const mongoose = require('mongoose');

const proverbDB = mongoose.connect("mongodb://localhost/proverbs", (err) => {
    if(err) console.log(err);

    console.log(`The connection has been established on mongodb://localhost/proverbs`);
});

exports.proverbDB = proverbDB;

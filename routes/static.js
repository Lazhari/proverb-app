'use strict';

const express = require('express');
const route = express.Router();
const path = require('path');

// The Angular application Route
route.get('/app-citations', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/apps/citation/index.html'));
});

module.exports = route;

'use strict';

const express = require('express');
const route = express.Router();

const citationController = require('./citation.controller');

route.get('/citations/', citationController.getCitations);

route.get('/citations/:id', citationController.getCitationById);

route.post('/citations/', citationController.newCitation);

route.put('/citations/:id', citationController.updateCitation);


module.exports = route;

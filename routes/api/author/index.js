'use strict';

const express = require('express');
const route = express.Router();

const authorController = require('./author.controller');

route.get('/authors/', authorController.getAuthors);

route.get('/authors/:id', authorController.getAuthorById);

route.post('/authors/', authorController.newAuthor);

route.put('/authors/:id', authorController.updateAuthor);

route.delete('/authors/:id', authorController.deleteAuthor);


module.exports = route;
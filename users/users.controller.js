const express = require('express');
const router = express.Router();
const userService = require('./users.service.js');

// routes
router.post('/authenticate', authenticate);
router.get('/', getAll);
router.put('/:userId', updateUser);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function updateUser(req, res) {
    console.log("updateUser function");
    userService.updateUser(req.params.userId, req.body)
        .then(user => res.json(user))
        //.catch(next);
}
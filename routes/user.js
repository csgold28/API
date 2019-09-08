const express = require('express');
const router = require('express-promise-router')();

const { validateBody, schema } = require('../helpers/validation');
const UserController = require('../controllers/userController');

router.route('/register')
 .post(validateBody(schema.authSchema), UserController.register);

router.route('/login')
 .post(validateBody(schema.authSchema), UserController.login);

router.route('/secret')
 .get(validateBody(schema.authSchema), UserController.secret);

module.exports = router;
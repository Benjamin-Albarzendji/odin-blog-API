const express = require('express');
const userController = require('../controller/userController');
const passport = require('passport');

const router = express.Router();

/* GET home page. */
router.get('/', userController.index);

// GET Sign-up page
router.get('/signup', userController.signup_get);

// POST Sign-up page
router.post('/signup', userController.signup_post);

// Get login page
router.get('/login', userController.login_get);

// POST login page
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login-failure',
    successRedirect: 'login-success',
  })
);

// GET Create Post page
router.get('/create-post', userController.create_post_get);

// POST Create Post page
router.post('/create-post', userController.create_post_post);

// GET All Posts page
router.get('/posts', userController.posts_get);

// GET Specific Post page
router.get('/posts/:id', userController.post_get);

module.exports = router;

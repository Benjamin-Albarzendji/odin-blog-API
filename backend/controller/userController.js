const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const Post = require('../models/post');
const { genPassword } = require('../utils/passwordUtils');

// Home page GET
exports.index = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find({}).populate('author').exec();

  res.render('index', {
    title: 'Odin Blog',
    allPosts,
  });
});

// Sign-up page GET
exports.signup_get = (req, res, next) => {
  res.render('signup', { title: 'Sign Up' });
};

// Sign-up page POST
exports.signup_post = [
  body('first_name', 'First Name must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('family_name', 'Family Name must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('username', 'Username must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('password', 'Password must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('passwordConf').custom((value, { req }) => {
    return req.body.passwordConf === req.body.password;
  }),
  body('passwordConf', 'Confirm Password must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('passwordConf', 'Confirm Password must match Password.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json(errors);

      // res.send('signup', {
      //   title: 'Sign Up',
      //   first_name: req.body.first_name,
      //   family_name: req.body.family_name,
      //   username: req.body.username,
      //   errors: errors.array(),
      // });
    } else {
      const saltHash = genPassword(req.body.password);
      const { salt } = saltHash;
      const { hash } = saltHash;

      const user = new User({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        username: req.body.username,
        password: hash,
        salt,
      });

      await user.save();

      res.json('Success!, user crea');
    }
  }),
];

// Login page GET
exports.login_get = (req, res, next) => {
  res.render('login', { title: 'Log In' });
};

// Create post page GET (DO IN NEED THIS?)
exports.create_post_get = (req, res, next) => {
  res.render('create-post', { title: 'Create Post' });
};

// Create post page POST
exports.create_post_post = [
  body('title', 'Title must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('body', 'Body must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('author', 'Author must be a valid user.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('published', 'Publish Date must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Fix this later
      res.json(errors);
    } else {
      const post = new Post({
        title: req.body.title,
        body: req.body.body,
        author: req.user._id,
        published: req.body.published,
      });

      await post.save();

      res.json('Success!, post created');
    }
  }),
];

// All posts page GET
exports.posts_get = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find({})
    .populate('author', 'first_name family_name')
    .exec();

  res.json('posts', {
    title: 'All Posts',
    allPosts,
  });
});

// Specific post page GET
exports.post_get = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id)
    .populate('author', 'first_name family_name')
    .exec();

  res.json('post', {
    title: post.title,
    post,
  });
});

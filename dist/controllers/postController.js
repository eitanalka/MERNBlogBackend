'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postController = {};

postController.getAll = function (req, res) {
  _models2.default.Post.find({}, '_id title category').limit(40).then(function (posts) {
    return res.status(200).json({
      success: true,
      data: posts
    });
  }).catch(function (err) {
    return res.status(500).json({
      message: err
    });
  });
};

postController.get = function (req, res) {
  _models2.default.Post.findById({ _id: req.params.id }).then(function (post) {
    return res.status(200).json({
      success: true,
      data: post
    });
  }).catch(function (err) {
    return res.status(500).json({
      message: err
    });
  });
};

postController.post = function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      category = _req$body.category,
      content = _req$body.content;


  var post = new _models2.default.Post({
    title: title,
    category: category,
    content: content
  });

  post.save().then(function (newPost) {
    return res.status(200).json({
      success: true,
      data: newPost
    });
  }).catch(function (err) {
    return res.status(500).json({
      message: err
    });
  });
};

postController.delete = function (req, res) {
  _models2.default.Post.findByIdAndRemove(req.params.id).then(function (post) {
    return res.status(200).json({
      success: true,
      data: post
    });
  }).catch(function (err) {
    return res.status(500).json({
      message: err
    });
  });
};

exports.default = postController;
//# sourceMappingURL=postController.js.map
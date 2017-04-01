'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupController = {};

setupController.get = function (req, res) {
  var starterPosts = [{
    title: 'Test',
    category: 'Test',
    content: 'apoghepoagh'
  }, {
    title: 'Test',
    category: 'Test',
    content: 'apoghepoagh'
  }, {
    title: 'Test',
    category: 'Test',
    content: 'apoghepoagh'
  }];
  _models2.default.Post.create(starterPosts).then(function (posts) {
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

exports.default = setupController;
//# sourceMappingURL=setupController.js.map
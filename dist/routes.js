'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _postController = require('./controllers/postController');

var _postController2 = _interopRequireDefault(_postController);

var _setupController = require('./controllers/setupController');

var _setupController2 = _interopRequireDefault(_setupController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Controller Imports

var routes = (0, _express2.default)();

routes.get('/setupPosts', _setupController2.default.get);

routes.get('/posts', _postController2.default.getAll);
routes.get('/posts/:id', _postController2.default.get);
routes.post('/posts', _postController2.default.post);
routes.delete('/posts/:id', _postController2.default.delete);

exports.default = routes;
//# sourceMappingURL=routes.js.map
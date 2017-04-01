'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = global.Promise;

var postSchema = new Schema({
  title: String,
  category: String,
  content: String
});

var Post = _mongoose2.default.model('Post', postSchema);
exports.default = Post;
//# sourceMappingURL=Post.js.map
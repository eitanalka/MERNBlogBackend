'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

_app2.default.listen(port);
console.log('Running on port ' + port);
//# sourceMappingURL=index.js.map
module.exports = (function () {
  "use strict"
  var vaild = require('../');

  vaild.some([
    'http://www.baidu.com',
    'http://www.google.com',
    'http://www.nothissite.com',
    'http://www.cnblogs.com',
    'http://www.sohu.com',
    'http://www.sina.com',
    'http://www.yeeyan.org',
    'http://github.com'
  ], function (err, data) {
    err && console.log(err);
    console.log(data);
  });
})();
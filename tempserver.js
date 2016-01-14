
var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

/*
* 将服务器根目录设置为执行当前脚本的目录
*/

app.use('/', express.static(path.join(process.cwd())));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

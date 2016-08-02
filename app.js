var app = require('koa')();

var serve = require('koa-static');
var route = require('koa-route');
var xlsx = require('node-xlsx');
var moment = require('moment');
var parse = require('co-body');
var fs = require('fs');

app.use(serve(__dirname + '/downloads'));
app.use(require('koa-cors')());//enable cross-origin request
app.use(route.post('/createExcel', createXls));

function *createXls() {
    var body = yield parse(this);
    var fileName = body.fileName;
    var _buffer = xlsx.build([{name: 'sheet1', data: body.data}]);
    fs.writeFileSync('./downloads/' + fileName + '.xlsx', _buffer);
    this.body = { "success": true, file: fileName };
}

app.use(function *(){
    this.body = 'Hello';
});

app.listen(3001);
console.log('listening on port 3001');
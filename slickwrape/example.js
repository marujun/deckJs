/**
 * Created by JetBrains WebStorm.
 * User: mrj
 * Date: 12-7-18
 * Time: 上午9:53
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('中国\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');

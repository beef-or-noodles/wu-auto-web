/**
 * Created by HIAPAD on 2020/4/17.
 */
console.time("");
var http = require('http')
var url = require('url')
var router = require('./public/router')
var fs = require('fs')
http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    if(pathname!=="/favicon.ico"){
        let file = './view/'+pathname.substr(1)
        fs.readFile(file,function(err,data){
            if(err){
                console.log(err);
                response.writeHead(404,{'Content-Type': 'text/plain'})
            }else{
                router.router(pathname)
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString(),'utf-8')
            }
            // 发送响应数据 "Hello World"
            response.end();
        })
    }
}).listen(8000);
console.log("运行成功8000",__filename,__dirname,process.platform,process.arch);
console.timeEnd("");
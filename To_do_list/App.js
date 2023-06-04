// hello http server 
const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{
        //'Content-Type':'text/plain'
        'Content-Type':'text/html'
    });
    res.writeHead('<h1>Hello, Node app!</h1>');
    res.end()
}).listen(3000)
const http = require("http");

const myServer = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello Pawan!!!!'
    }));
});

myServer.listen(2598,()=>{
    console.log("I am at 2598")
});

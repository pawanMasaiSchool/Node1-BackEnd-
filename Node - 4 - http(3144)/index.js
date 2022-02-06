const http = require("http");
const {allUsers, addUser} = require("./Utils/Users");
const port = 4000;
const server = http.createServer((req,res)=>{
    try {
        console.log("Query", req.url);
        res.writeHead(200,{ 'Content-Type': 'application/json' });
        
        if(req.url === "/users"){
            const arr = [];
            for(let i = 0; i < allUsers.length; i++){
                arr.push(allUsers[i].username);
            }
            res.end(JSON.stringify(
                arr
            ))
        }
        else if(req.url.startsWith("/user/")){
            const id = req.url.split("/")[2];
            const currentUser = allUsers[id];
            res.end(JSON.stringify({
                ...currentUser
            }))
        }
        else if(req.url.startsWith("/users?") && req.method === "POST"){
            
            const name = req.url.split("name=")[1];
            addUser(name);
            const arr = [];
            for(let i = 0; i < allUsers.length; i++){
                arr.push(allUsers[i].username);
            }
            res.writeHead(201,{ 'Content-Type': 'application/json' });
            res.end(JSON.stringify(
                arr
            ))
        }
        else if(req.url === "/"){
            res.end(JSON.stringify({
                data: 'Hello Pawan!!!!'
            }))
        }
        
    }
    catch(err){
        res.end(JSON.stringify({
            Error: 'Error in code'
        }))
    }
})

server.listen(port,()=>{
    console.log(`listening at ${port}`);
})
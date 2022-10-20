const http = require ('http');
const fs = require('fs');
const path = require('path');
var request = require("request");
const { ifError } = require('assert');

const port = 5500; 
const hostname = "localhost"; 

const server =http.createServer((req, resp)=>{
    //console.log(req,resp)
    if(req.url === '/'){
        resp.write('Hello from the home side');
        resp.end();
    } 
    else if(req.url === '/about'){
        resp.write('Know more about us');
        resp.end();
    } 
    else if(req.url === '/contact'){
        resp.end('You can contact us on below:');

    }else if (req.url === '/userapi'){
        
        fs.readFile(`${__dirname}/userapi.json`, 'utf-8',(error,data)=>{
        //textData = JSON.stringify(data)
        resp.end(data)
                
        });
        
        
    }else{
        resp.writeHeade(404, {'Content-Type':'text/html'});
        resp.end('<h1> 404 error page. Pages doesntexist')
    }
    

})
server.listen(port)

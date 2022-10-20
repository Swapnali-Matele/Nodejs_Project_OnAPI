const http = require ('http');
const fs = require('fs');
const path = require('path');
var request = require("request");
const { ifError } = require('assert');

const port = 5501; 
const hostname = "localhost"; 

const server = http.createServer((req, resp)=>{

    // const data = fs.readFileSync(`${__dirname}/userapi.json`, 'utf-8')
    //     const objData =JSON.parse(data)

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
        resp.writeHead(200,{'content-Type':'application/json'})
        const chunks = [];
        var stringData = "";
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });
        req.on("end", () => {
            const data = Buffer.concat(chunks);
            stringData = data.toString();
            //console.log(stringData);
            //Write the file
            fs.writeFileSync(`${__dirname}/userapi.json`, stringData, {encoding: "utf8", flag: "a+"});
        });
    //     readFile(filePath, "utf8",(err, data) => {
    //         if (err) {
    //             console.log("Error is " + err);
    //         }
    //         //console.log(data);
    //         resp.write(`${data}`);
    //         resp.end();
    //    //resp.end(objData)        
    //     })
    }
    else{
        resp.writeHead(404, {'Content-Type':'text/json'})
        resp.end('<h1> 404 error page. Pages doesntexist')
    }
    

})
server.listen(port)

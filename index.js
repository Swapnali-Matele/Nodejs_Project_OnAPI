const http = require ('http')
const fs = require('fs');
const path = require( 'path' );

const hostname = "localhost"; 
const port = 3000; 

const server = http.createServer((req,resp)=>{

    // to check we received req from which url and in what method
    console.log('request for'+ req.url+'by method'+req.method);

    if(re.method == GET){
        var fileURL;
        if(req.url == '/'){
            fileURL = '/index.html'
        }else{ fileURL = req.url}

        var filePath = path.resolve('./public'+ fileURL);

        //for to know what is file extension
        const fileExt = path.extname(filePath);

        if (fileExt =='.html'){
            fs.existsSync(filepath,(existsSync)=>{
                if(!existsSync){
                    resp.statusCode = 404;
                    resp.setHeader ('Contet-Type','text/html');
                    resp.end('<html> <body> <h1> erro 404:'+fileURL+'does not exist </h1> </body> </html>');

                }

                resp.statusCode = 404;
                resp.setHeader ('Contet-Type','text/html');
                fs.createReadStream(filePath).pipe(resp);
            })
        }else{

            resp.statusCode = 404;
            resp.setHeader ('Contet-Type','text/html');
            resp.end('<html> <body> <h1> erro 404:'+fileURL+'does not exist </h1> </body> </html>');


        }
        
    }
    
});
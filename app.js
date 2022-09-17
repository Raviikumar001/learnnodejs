
const { readFileSync } = require('fs');
const http = require('http');
 
const reader = readFileSync('./index.html','utf-8')
const server = http.createServer( (req,res)=>{

    
    const url = req.url;
    if(url === '/')
    {
        res.writeHead(200,{"content-type": "text/html"});
    
        res.write(reader);
        res.end();

    } else if(url ==="/about")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h2>About page</h2>");
        res.end(); 
        
    }else {
        res.writeHead(404,{"content-type" :"text/html"});
        res.write("<h3>Cannot find the page you're looking for</h3>")
        res.end();

    }
           
})

server.listen(5000);







const { readFileSync } = require('fs');
const http = require('http');
   
const reader = readFileSync('./navbar-app/index.html');
const homeStyles= readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');
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
        
    }else if(url === '/styles.css')
    {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    } 
    else if(url ==='/logo.svg')
    { 
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end();

    }
    else if(url === '/browser-app.js')
    {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic);
        res.end();

    }else
    {
        res.writeHead(404,{"content-type" :"text/html"});
        res.write("<h3>Cannot find the page you're looking for</h3>")
        res.end();

    }
           
})

server.listen(5000);






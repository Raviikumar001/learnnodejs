const http = require('http');
    
const server = http.createServer( (req,res)=>{
if(req.url === '/')
{
    res.end('welcome to the homepage')
}
if(req.url === '/about')
{
    res.end('about page')
}
res.end('noth ')

});

server.listen(5000);
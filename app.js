
// const http = require('http');

// const server =http.createServer( (req, res)=> {
//     console.log('request event');
//     res.end('Hello world');
// })

// server.listen (5000,  ()=>{
//     console.log('server running on port 3000');
// })

const http = require('http');

const server = http.createServer( (req, res )=> {
    if(req.url === '/')
    {
        res.end('Home');
    }
    if(req.url === '/about')
    {
        for(let i=0; i<1000; i++)
        {
            
        }
        res.end('About page');
    }
    res.end('Error Page');
})

server.listen(5000, ()=>{
    console.log('SERver started on port 5000');
})

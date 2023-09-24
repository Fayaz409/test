const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/error'){
        res.end('Move to the home page')
    }
    if(req.yrl==='/'){
        res.end('Welcome to home page')
    }
    if(req.url==='/about'){
        res.end('Welcome to About page')
    }
    
})

server.listen(port=3000)
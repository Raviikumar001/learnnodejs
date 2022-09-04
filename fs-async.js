const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf-8', (err, resut)=>{
    if(err)
    {
        return null
    }
    else{
        console.log(resut)
    }
})
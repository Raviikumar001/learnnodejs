const authorized = (req,res, next)=>{
    const {user }= req.query;
    if(user === 'ravi'){
        req.user= {name : 'ravi', id:3};
        next();
    }
    else{
        res.status(401).send('Unauthorized');
    }
    
}

module.exports= authorized;
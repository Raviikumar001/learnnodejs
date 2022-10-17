
const express = require('express');

const app = express();

const people = require('./routes/auth')
const login = require('./routes/people');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/people',people);

app.use('/login', login);

app.listen(5000, ()=>{
    console.log('App is listening on port 5000');
})





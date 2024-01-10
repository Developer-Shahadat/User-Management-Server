const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

const cors = require('cors');

// Express Middleware
app.use(cors());

// DAta Pathano
app.use(express.json());

// HardCore Data
const users = [
    {id:1, name:"John Doe", email:"john@gmail.com"},
    {id:2, name:"Shahadat", email:"shahadat@gmail.com"},
    {id:3, name:"Hossain", email:"hossain@gmail.com"},
    {id:4, name:"Programmer", email:"Programmer@gmail.com"},
    {id:5, name:"Sakib", email:"sakib@gmail.com"},
    {id:6, name:"Tamim", email:"tamim@gmail.com"}
]

app.get('/', (req,res) => {
    res.send('User Management Server Running')
});
app.get('/users', (req,res) => {
    res.send(users);
});

app.post('/users', (req,res) =>{
    console.log('api hitting');
    console.log(req.body);
    
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)

})

app.listen(port , () => {
    console.log(`Server is running on PORT : ${port}`);
})
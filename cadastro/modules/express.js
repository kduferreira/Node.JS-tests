const express = require('express')
const UserModel = require('../src/models/users.model')

const app =  express()


app.get('/home', (req, res) => {
    res.contentType("application/html");
    res.status(200).send('<h1>Hello word</h1>')
});


app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Donnie Darko',
            email: 'Darkobunny@email.com',

        },
        {
            name: 'Jane Darko',
            email: 'jane@email.com'
        },
        {
            name: 'Messi anao',
            email: 'Messi@email.com'
        },
        {
            name: 'Neymar calvicis',
            email: 'brunaMarquezineloveu@email.com'
        },
        {
            name: 'Cr7 o Mior',
            email: 'cr7thebeast@email.com'
        },
        {
            name: 'Alexandre',
            email: 'xande@email.com'
        },
    ];
 
    res.status(200).json(users);
})

app.post("/users", async (req, res) => {
 try{
    const user = await UserModel.create(req.body);

    res.status(201).send.json(user);
 }catch(error){
    res.status(500).send(error.message);
 }
})
const port = 8080;
app.listen(port,() => console.log(`rodando com Express na porta ${port}!`));
const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Reinaldo Couto", "e-mail: reijunior1@hotmail.com"}

// CRUD = Create, Read, Update, Delete.


/// (continuar no video = 10- Middlewares)

server.use(express.json());

const users = ['Reinaldo','Patricia','Christian'];

server.get('/users', (req,res) => {
  return res.json(users);
})

server.get('/users/:index', (req, res) => {
  const {index} = req.params;

  return res.json(users[index]);

})

server.post('/users',(req,res) => {
  const {name} = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:index', (req,res) => {
  const {index} = req.params;
  const {name}  = req.body;

  users[index] =name;

  return res.json(users);
});

server.delete('/users/:index', (req,res) => {
  const {index} = req.params;
  users.splice(index,1);
  return res.send ();
});

server.listen(3000)
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());


const users = JSON.parse(fs.readFileSync('./users.json'));


app.get('/usuarios', (req, res) => {
  res.json(users);
});

app.get('/dados/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

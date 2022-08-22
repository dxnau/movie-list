const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const models = require('./models.js');

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/movielistmongo', (req, res) => {
  console.log('Calling models');
  return models.fetchMovies();
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
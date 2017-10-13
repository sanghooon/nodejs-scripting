const express = require('express');
const app = express();

const chefs = require('./controllers/chefs');
app.use('/chefs', chefs);

app.get('/', (req, res) => {
  res.send('GET to homepage');
});

app.post('/', (req, res) => {
  res.send('POST to homepage');
});


app.listen(3000, () => {
  console.log('Server running at 3000...');
});

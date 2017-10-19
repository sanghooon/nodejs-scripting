const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test', {useMongoClient: true});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//const Chef = require('./models/chef');
const chefs = require('./controllers/chefs');
app.use('/chefs', chefs);

var Cat = mongoose.model('Cat', { name: String });
var kitty = new Cat({ name: 'meow2' });
kitty.save(function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('meow');
  }
})

app.get('/', (req, res) => {
  //res.render('home');
  Cat.find({}, function(err, cats) {
    res.send(cats);
  });
});

app.post('/', (req, res) => {
  res.send('POST to homepage');
});


app.listen(3000, () => {
  console.log('Server running at 3000...');
});

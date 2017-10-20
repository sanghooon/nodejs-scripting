const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

mongoose.connect('mongodb://localhost/myChefApp', {useMongoClient: true});
mongoose.Promise = global.Promise;



const Chef = require('./models/chef');
const chefs = require('./controllers/chefs');
app.use('/chefs', chefs);

//var Cat = mongoose.model('Cat', { name: String });
/*var kitty = new Cat({ name: 'meow2' });
kitty.save(function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('meow');
  }
})
*/

app.get('/', (req, res) => {
  Chef.find({}, function(err, chefs) {
    if(err) console.log(err);
    res.send(chefs);
  });
  /*Chef.find({}, function(err, chefs) {
    if(err) console.log(err);
    res.render('chefs/list', {chefs:chefs});
  });*/
});

app.post('/', (req, res) => {
  res.send('POST to homepage');
});


app.listen(3000, () => {
  console.log('Server running at 3000...');
});

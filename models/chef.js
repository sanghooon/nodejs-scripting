const mongoose = require('mongoose');
var chefSchema = mongoose.Schema({
  name: String
});

mongoose.model('Chef', chefSchema);
mongoose.connect('mongodb://localhost/myUberApp');

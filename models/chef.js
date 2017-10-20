const mongoose = require('mongoose');

var chefSchema = mongoose.Schema({
  userId: String,
  displayName: String,
  phone: String,
  email: String,
  earnedRatings: Number,
  totalRatings: Number,
  location: {
      type: Array,
      address: String,
      coordinates: [Number, Number]
  }
});

var Chef = mongoose.model('Chef', chefSchema);

var chef1 = new Chef({
    userId: "03",
    displayName: "Chef 3",
    phone: "03",
    email: "chef03@gmail.com",
    earnedRatings: 35,
    totalRatings: 39,
    location: {
        type: "Point",
        address: "SS Environs, Chellikere, 1st block, Chelekare, Kalyan Nagar, Bengaluru, Karnataka 560043, India",
        coordinates: [
            70.63997110000003,
            15.0280047
        ]
    }
});
chef1.save(function(err) {
  if(err) console.log(err);
  console.log('created!');
})
module.exports = Chef;

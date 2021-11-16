const mongoose = require('mongoose');
// Connecting Mongoose to MongoDB and also specify the Database Name
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'CONNECTION ERROR'));
db.once('open', () => {
  console.log('Connected MongoDB');
});

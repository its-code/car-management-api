const mongoose = require('mongoose');
// Connecting Mongoose to MongoDB and also specify the Database Name
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'CONNECTION ERROR'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Connected MongoDB');
});

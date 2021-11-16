const app = require('./src/app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Running up on the port: ', port);
});

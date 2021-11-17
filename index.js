const app = require('./src/app');

const port = process.env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Running up on the port: ', port);
});

const express = require('express');
require('./db/mongoose');
const carRouter = require('./routers/car');

const app = express();

app.use(express.json());
app.use(carRouter);

module.exports = app;

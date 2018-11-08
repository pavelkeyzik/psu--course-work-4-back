require('dotenv').config();

const APP_PORT = process.env.PORT || process.env.APP_PORT;

const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/api', routes);

app.listen(APP_PORT, () => {
  console.log(`===> API runned on port ${APP_PORT}...`);
});

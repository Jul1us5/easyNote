const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    logger.info("connected to mongoDb atlas");
  })
  .catch((error) => {
    logger.error(error.message);
  });

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// listen for requests
//start the server
app.listen(PORT, () => {
    logger.info(`Server started at PORT ${PORT}`);
  });
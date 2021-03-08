const express = require("express");
const mongoose = require("mongoose");
const winston = require('winston');
const app = express();
require("dotenv").config();

require('./app/routes/note.routes')(app);

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//create a logger
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format:winston.format.combine(
        winston.format.colorize({all:true})
      )
    }),
    new winston.transports.File({ filename: 'error.log' ,level:'error'})
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' })
  ]
});

mongoose.connect("mongodb+srv://new1:new1@cluster0.emzrs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//connect to mongodb atlas
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    logger.info("connected to mongoDb atlas");
  })
  .catch((error) => {
    logger.error(error.message);
  });


//start the server
app.listen(PORT, () => {
  logger.info(`Server started at PORT ${PORT}`);
});

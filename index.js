const express = require("express");
const mongoose = require("mongoose");
const winston = require('winston');
const app = express();
require("dotenv").config();
const noteRoute = require('./app/routes/note.routes');

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//create a logger
const logger = winston.createLogger({
  level: 'Lets go! Beast mode on.!',
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

//routes
// app.use('/notes', noteRoute);
require('./app/routes/note.routes')(app);

app.get('/', (req, res) => {
  res.json({"message": "Welcome to EasyNotes application! Take notes quickly. Organize and keep track of all your notes."});
});


mongoose.connect("mongodb+srv://jul1u51:jul1u51@cluster0.gtnmz.mongodb.net/easyNotes?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
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
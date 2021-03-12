const express = require("express");
const mongoose = require("mongoose");
const winston = require('winston');
const app = express();
require("dotenv").config();
const noteRoute = require('./app/routes/note.routes');
let path = require('path');

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/'));


//create a logger
const logger = winston.createLogger({
    level: 'Lets go! Beast mode on.!',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({ all: true })
            )
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
    ]
});

//routes
// app.use('/notes', noteRoute);
require('./app/routes/note.routes')(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
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
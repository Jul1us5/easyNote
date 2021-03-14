const express = require("express");
const mongoose = require("mongoose");
const winston = require('winston');
const app = express();
require("dotenv").config();
const noteRoute = require('./app/routes/note.routes');
let path = require('path');
cors = require("cors");
app.use(cors());
const request = require('request');


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.get('/api', (req, res) => {
//     request({ url: req.query.url },
//         (error, response, body) => {
//             if (error || response.statusCode !== 200) {
//                 return res.status(500).send('error');
//             }
//             res.send(body);
//         }
//     )
// });

const PORT = process.env.PORT || 3000;
// Add Access Control Allow Origin headers

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
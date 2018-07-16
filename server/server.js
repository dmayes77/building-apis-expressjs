const express = require('express');
const cors = require('cors');
const port = 3000;
const apiRouter = require('./routes');

let app = express();

//middleware
app.use(cors());
app.use(express.json());

//router
app.use('/api', apiRouter);

//port
app.listen(port);

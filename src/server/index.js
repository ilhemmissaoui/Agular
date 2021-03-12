require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerIndex = require('./routes/index.router');
const http = require('http');

var server_port = process.env.PORT || 8080;

var app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());
app.use('/api', routerIndex);
app.set('port', server_port);

const server = http.createServer(app);
// Starting server
server.listen(server_port, () => console.log(`Server Started at port: ${server_port}`));

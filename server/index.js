const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const db = require('../db/index');

const app = express();

const port = process.env.PORT || 8000;

const clientFolder = path.join(__dirname, '../client/dist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(clientFolder));
// ALL END POINTS MUST GO HERE!! (if we put after, it'll fail)
app.use('/', routes);
app.use('/*', express.static(`${clientFolder}/index.html`));

const server = app.listen(port, () => console.log(`server running on port ${port}`));

module.exports.server = server;
module.exports.app = app;
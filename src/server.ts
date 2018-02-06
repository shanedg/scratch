// const express = require('express')
// const app = express()
//
// app.get('/', (req, res) => res.send('Hello World!'))
//
// app.listen(3000, () => console.log('Example app listening on port 3000!'))
// let express = require('express');

import * as express from 'express';
import * as path from 'path';
import * as ctrl from 'r/controller'

console.log('duuuh');

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
  next();
});

/**
 * Primary app routes.
 */
// app.get('/', ctrl.index);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(app.get('port'), () => console.log('listening on', app.get('port')));

module.exports = app;

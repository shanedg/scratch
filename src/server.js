import express from 'express';
import * as path from 'path';
import * as ctrl from 'r/controller';

// Require app redirect config
const appRedirects = require('r/app-redirects.json');

// Create Express server
let app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
  let url = req.originalUrl;
  if (appRedirects.permanent.hasOwnProperty(url)) {
    res.redirect(301, appRedirects.permanent[url]);
  } else if (appRedirects.temporary.hasOwnProperty(url)) {
    res.redirect(302, appRedirects.temporary[url]);
  }
  next();
});

/**
 * Primary app routes.
 */
app.get('/', ctrl.index);

app.listen(app.get('port'), () => console.log('scratch listening on', app.get('port')));

module.exports = app;

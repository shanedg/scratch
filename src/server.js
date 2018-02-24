import express from 'express';
import * as path from 'path';
import * as ctrl from 'r/controller';
import appRedirects from 'r/app-redirects.json';

// Create Express server
const app = express();

/*
 * Express config
 */
console.log('set port!');
app.set('port', process.env.PORT || 3000);

/*
 * Middleware
 */
app.use((req, res, next) => {
  let url = req.originalUrl;

  // Enforce no-trailing-slash comparison on redirect keys
  if (url.length > 1 && url.charAt(url.length - 1) === '/') {
    url = url.replace(/\/$/, '');
  }

  /*
   * Redirect handling
   * TODO: (shane) streamline 301/302 w/ config
   */
  if (appRedirects.permanent.hasOwnProperty(url)) {
    res.redirect(301, appRedirects.permanent[url]);
  } else if (appRedirects.temporary.hasOwnProperty(url)) {
    res.redirect(302, appRedirects.temporary[url]);
  }
  next();
});

/*
 * Primary app routes
 */
app.get('/', ctrl.index);

/*
 * 404 Error handling
 */
app.get('*', ctrl.error404);

app.listen(app.get('port'), () => {
  console.log('scratch listening on', app.get('port'))
});

module.exports = app;

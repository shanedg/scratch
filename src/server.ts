import * as express from 'express';
import * as path from 'path';
import * as ctrl from 'r/controller'

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
app.get('/', ctrl.index);

app.listen(app.get('port'), () => console.log('scratch listening on', app.get('port')));

module.exports = app;

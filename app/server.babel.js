import express from 'express';
import nunjucks from 'nunjucks';
import home from './routes/home';

;(function(exports){
  "use strict";

  const app = express(),
        port = process.env.PORT || 4000;

  app.set('view engine', 'njk');

  nunjucks.configure(__dirname + '/views', {
    watch: true,
    express: app
  });

  app.use(express.static('./app/public'));

  app.use('/', home);

  app.get('*', (req, res) => {
    res.redirect('/');
  });

  app.listen(port, () => {
    console.log("\x1b[36mOne Minute Training App\x1b[0m\nhttp://localhost:" + port + "\n");
  });

  module.exports = app;

})(this);

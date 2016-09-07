import express from 'express';

(function(exports) {
  'use strict';

  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('home/index', {
    });
  });

  module.exports = router;

})(this);

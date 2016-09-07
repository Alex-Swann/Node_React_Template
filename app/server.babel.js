"use strict";
import express from 'express';

const app = express(),
      port = process.env.PORT;

app.listen(port, function(){
  console.log("\x1b[36mOne Minute Training App\x1b[0m\nhttp://localhost:" + port + "\n");
});

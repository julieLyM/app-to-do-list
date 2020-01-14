const express = require('express');
function middlewares(app) {
  app.use(express.json());
}

exports.module = middlewares;

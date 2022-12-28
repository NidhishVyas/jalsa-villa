const dotenv = require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path")

const initMiddleware = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: false, limit: "2mb" }));

  app.use(logger("dev"));
  app.use(express.static(path.join(__dirname, '../public')));
};

module.exports = initMiddleware;
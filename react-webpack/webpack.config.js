"use strict";

const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
};

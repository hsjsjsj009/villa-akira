/* eslint-disable */
const fs = require("fs");
const path = require("path");
const componentGenerator = require("./component/index.js");
const containerGenerator = require("./container/index.js");
const routeGenerator = require("./route/index.js");

module.exports = plop => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("container", containerGenerator);
  plop.setGenerator("route", routeGenerator);
  plop.addHelper("directory", comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../src/containers/${comp}`),
        fs.F_OK
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
};

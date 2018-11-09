var glob = require("glob");
var path = require("path");

module.exports = {
  entry: {
     js: glob.sync("./src/js/*.js"),  
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'api-plugin.js'
  }
}
/**
 * USAGE
 * setApiPort(webServicePort: number)
 * setIOEndpoint(input: string, output: string)
 */
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

/**
 * @param {number} webServicePort
 * @returns running express app
 */
function setApiPort(webServicePort) {
  this.webServicePort = (webServicePort || 3000);
  app.listen(webServicePort, function () {
    console.log(`Node server running on http://localhost:${webServicePort}/`);
  });
}

/**
 * @param {string} input 
 * @param {string} output
 * @returns {string} contents in http://localhost:${webServicePort}/input
 */
function setIOEndpoint(input, output) {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  var router = express.Router();
  app.use(router);

  input = (input || '');
  output = (output || 'Hello World');
  router.get('/' + input, function (req, res) {
    var ip = req.ip.substring(2);
    console.log(`{"event":"new query","user_ip":"${ip}"}`);
    res.send(output);
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

if (require.main === module) {
  setApiPort(4000);
  setIOEndpoint(process.argv[2], process.argv[3]);
}

module.exports.setApiPort = setApiPort;
module.exports.setIOEndpoint = setIOEndpoint;

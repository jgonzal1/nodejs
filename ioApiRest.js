var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var webServicePort = 3000;

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

app.listen(webServicePort, function () {
  console.log(`Node server running on http://localhost:${webServicePort}/`);
});

if (require.main === module) {
  setIOEndpoint(process.argv[2], process.argv[3]);
}

module.exports = setIOEndpoint;

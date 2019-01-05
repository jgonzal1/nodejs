var Client = require('node-rest-client').Client;
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var client = new Client();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * @param {string} endpoint url
 * @returns {function} callback with string contents in endpoint url
 */
function fromEndpointUnscapedQuery(endpoint, callback) {
  client.get( // post also available with exact syntax
    endpoint,
    function (apiContents) {
      console.log(`Cargada llamada a la API externa`);
      callback(apiContents);
    }
  );
}

if (require.main === module) {
  fromEndpointUnscapedQuery(process.argv[2]);
  // https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/a1824845-0fc1-440e-bc4d-7c5d3d3e46d8?subscription-key=a019fe1742d6487dad3787006cb2b967&verbose=true&timezoneOffset=0&q=la+bolsa
}

module.exports = fromEndpointUnscapedQuery;

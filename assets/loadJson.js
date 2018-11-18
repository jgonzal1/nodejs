//"use strict";
const fs = require("fs");

function jsonFileKeyRecogniser(jsonFile,requiredKey) {
  const stringJsonified = fs.readFileSync(jsonFile);
  const json = JSON.parse(stringJsonified, function (key, value) {
    if (key === requiredKey) {
      return new Date(value);
    } else {
      return value;
    }
  });
  console.log(json[requiredKey]);
  return json[requiredKey];
}

/**
 * @async /!\ syncronicity in NodeJS, may cause large files
 * to be loaded after following functions.
 * @param {string} fileName 
 * @returns {JSON} textoJson
 */
function jsonLoader(fileName) {
  const buffer = fs.readFileSync(fileName);
  const textoJson = JSON.parse(buffer);
  return textoJson;
}

if (require.main === module) {
    jsonLoader(process.argv[2]);
}

module.exports = jsonLoader;
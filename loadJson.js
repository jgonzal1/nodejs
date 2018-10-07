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
 * @returns {JSON} textoJson[0]
 */
function jsonLoader(fileName) {
  const json = fs.readFileSync(fileName);
  const textoJson = JSON.parse(json);
  // for (let k = 0; k < textoJson.length; k++) { textoJson[k]==1; }
  /*console.log(
    `${JSON
      .stringify(textoJson)
      .substring(
        0, // from start of the JSON ...
        JSON
          .stringify(textoJson)
          .indexOf(" ")
        // ... to first space
      )
    } ...` //then add suspension points
  );*/
  return textoJson;
}

if (require.main === module) {
  if (process.argv[3]) {
    //quiere sacar una key
    jsonFileKeyRecogniser(process.argv[2], process.argv[3]);
  } else if (process.argv[2]) {
    //quiere leer un json
    jsonLoader(process.argv[2]);
  } else {
    //quiere ver si tira con la configuración estándar
    jsonLoader('./database_handlers/cosmosdbConfig.json');
  }
}

module.exports = jsonLoader;
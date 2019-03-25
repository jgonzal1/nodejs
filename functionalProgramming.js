random = require("random");

// High order function
function makeAdjectifier(adjective) {
  return function (string) {
    return adjective + " " + string;
  };
}
var coolifier = makeAdjectifier("cool");
var thought = coolifier("conference");
console.log(thought); // "cool conference";

// http://underscorejs.org/
// https://lodash.com/
// http://ramdajs.com/

// Avoid loops

// Avoid mutability in data (changing)
var rooms = ["H1", "H2", "H3"];
var newRooms = rooms.map(function (rm) {
  if (rm == "H3") { return "H4"; }
  else { return rm;}
});
console.log(newRooms);

// var names = ['Mary', 'Isla', 'Sam']
// var secretNames = map(
//   lambda x: random.choice(
//     ['Mr. Pink'
//     ,'Mr. Orange'
//     ,'Mr. Blonde'
//     ]
//   ),
//   names
// );
// console.log(secretNames);

// https://facebook.github.io/inmutable-js/

// Structural sharing by Anjana Vakil https://youtu.be/e-5obm1G_FY
// file:///e%3A/nodejs/structural-sharing.PNG
// file:///C%3A/Users/67456814/nodejs/structural-sharing.PNG
// mory library (http://swannodette.github.io/mori/)

// https://reactjs.org/
// https://graphql.org/
// https://webpack.js.org/
// https://jestjs.io/
// https://facebook.github.io/react-native/
// son tendencia, junto a integración de JS con Python.

// prototype -> classes

// Reduce
//<!DOCTYPE html>
//<html>
//<body>
//
//<p>Click the button to get the sum of the rounded numbers in the array.</p>
//<button onclick="myFunction()">Try it</button>
//
//<p>Sum of numbers in array: <span id="demo"></span></p>
//
//<script>
var numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}
//function myFunction(item) {
//  document.getElementById("demo").innerHTML =
numbers.reduce(getSum, 0);
//}
//</script>
//
//</body>
//</html>

// Filter
// <!DOCTYPE html>
// <html>
// <body>
// 
// <p>Click the button to get every element in the array that has a value of 18 or more.</p>
// 
// <button onclick="myFunction()">Try it</button>
// 
// <p id="demo"></p>
// 
// <script>
// var ages = [32, 33, 16, 40];
// 
// function checkAdult(age) {
//   return age >= 18;
// }
// 
// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.filter(checkAdult);
// }
// </script>
// 
// </body>
// </html>


// map, reduce y filter, mejores que loops
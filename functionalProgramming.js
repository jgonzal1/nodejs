//high order function
function makeAdjectifier(adjective) {
  return function (string) {
    return adjective + " " + string;
  };
}
var coolifier = makeAdjectifier("cool");
var thought = coolifier("conference");
console.log(thought); // "cool conference";

//map, reduce y filter, mejor que loops

//avoid mutability

//https://youtu.be/e-5obm1G_FY?t=794
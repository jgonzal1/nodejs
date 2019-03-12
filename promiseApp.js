console.log("This is the first line code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
const sunglassesOrderExecutor = (resolve, reject) => {
  if (inventory["sunglasses"] > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};
function orderSunglasses() {
  return new Promise(sunglassesOrderExecutor);
}
const orderPromise = orderSunglasses();
console.log(orderPromise);

const usingSTO = () => {
  console.log("Delayed print");
};
setTimeout(usingSTO, 2999);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
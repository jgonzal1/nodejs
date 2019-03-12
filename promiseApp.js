console.log("This is the first line code in app.js.");

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 500);
  });
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
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
const order = [['sunglasses', 1], ['bags', 2]];
checkInventory(order).then(handleSuccess,handleFailure);

const promiseExample2 = new Promise(
  (resolve, reject) => {
    const num = Math.random();
    if (num > .5 ){
      resolve('onResolvePrint after ".then" when random > .5');
    } else {
      reject('onRejectPrint after ".then" when random < .5');
    }
  }
);
promiseExample2
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
// Prints: 'onResolvePrint after ".then"' if resolve

const usingSTO = () => {
  console.log("Delayed print");
};
setTimeout(usingSTO, 1000); // 1s

console.log("This is the last line of synchronous code in app.js.");
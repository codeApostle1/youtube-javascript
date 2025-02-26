let owner = {
    name: "joel",
    age: 29,
    month: "june",
    state: "lagos"
}

/*for (let key in owner) {
    console.log(key + ":", owner[key])
}
*/

/*

function human() {
    const name = "joel";
    function sayHi() {
        console.log("Hi", name);
    }

    sayHi()
}

human();
*/

/*
function createSafe(password) {
    return function () {
      console.log("The password is: " + password);
    };
  }
  
  const mySafe = createSafe("1234"); // The password is stored inside
  mySafe(); // ✅ Still remembers and prints: The password is 1234
}

*/

function orderFood(food, callback) {
    console.log(`Ordering ${food}...`);
    setTimeout(() => {
      console.log(`${food} is ready!`);
      callback();
    }, 2000); // Simulates 2-second delay
  }
  
  function eatFood() {
    console.log("Eating food now!");
  }
  
  // Order pizza and eat when it's ready
  orderFood("Pizza", eatFood);

  eatFood(); // ✅ Prints: Eating food now!
  
setTimeout(() => {
for (let key in owner) {
    console.log(key + ":", owner[key])
}
}, 2000); // Simulates 2-second delay


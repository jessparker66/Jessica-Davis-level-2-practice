// Day 1 — Variables, arrays, objects, functions
// Read each Example, then write YOUR truck's version under the TODOs.
// See the results in the console (right-click the page → Inspect → Console).

// ---------- Step 1: Variables ----------
// Example:
// Create 3 variables using "let" or "const"
// Log variables


// TODO: Make 3 variables for YOUR truck: a name, a number, and a true/false.
// TODO: console.log them, and log the typeof each one.
const myTruckName = "Perfect Patties";
const menuCount = 4;
const isOpen = true;

console.log(myTruckName, menuCount, isOpen);
console.log(typeof myTruckName);
console.log(typeof menuCount);
console.log(typeof isOpen);
// ---------- Step 2: An array (a list) ----------
// Example:


// TODO: Make an array of 3 or more things YOUR truck sells.
// TODO: Log the first item, the last item, and how many items there are.
const myMenu = ["Savory Patty", "Vegan Patty", "Dessert Patty", "Special Patty"];
console.log(myMenu[0]);         // Savory Patty
console.log(myMenu[myMenu.length - 1]); // Special Patty
console.log(myMenu.length);     // 4

// ---------- Step 3: An object (one thing with details) ----------
// Example:

// TODO: Make an object for one of YOUR menu items (name, price, spicy).
// TODO: Log one property with dot notation and one with bracket notation.
const item = { name: "Savory Patty", price: 6.5, spicy: false };
console.log(item.name);       // dot notation
console.log(item["price"]);   // bracket notation

const item2 = { name: "Vegan Patty", price: 5, spicy: false };
console.log(item2.name);       // dot notation
console.log(item2["price"]);   // bracket notation

const item3 = { name: "Dessert Patty", price: 4, spicy: false };
console.log(item3.name);       // dot notation
console.log(item3["price"]);   // bracket notation

const item4 = { name: "Special Patty", price: 7, spicy: true };
console.log(item4.name);       // dot notation
console.log(item4["price"]);   // bracket notation

// ---------- Step 4: A function ----------
// Example:
function addTip(price, tip) {
  return price + tip;
}
console.log(addTip(10, 2));          // 12

// TODO: Write a function orderTotal(price, quantity) that RETURNS price * quantity.
// TODO: Before you run it, guess what orderTotal(4.5, 3) gives. Then log it.
function orderTotal(price, quantity) {
  return price * quantity;
}
console.log(orderTotal(6.5, 3));

// ---------- Extra practice (if you finish early) ----------
// 1. Change your menu item's price AFTER you made the object, then log it again.
// 2. Write isCheap(price): return "cheap!" if price is under 5, otherwise "fancy".
function isCheap(price) {
  if (price < 5) {
    return "cheap!";
  } else {
    return "fancy";
  }
}
console.log(isCheap(3));
console.log(isCheap(8));

const myTruck = { 
  name: "Perfect Patties",
  describe: function() {
    return "Welcome to " + this.name + "!";
  }
};

console.log(myTruck.describe());

const itemText = '{"name": "Savory Patty", "price": 6.5, "spicy": false }';
const item = JSON.parse(itemText);
console.log(item.name);       // dot notation
console.log(item["price"]);   // bracket notation

const itemText2 = '{"name": "Vegan Patty", "price": 5, "spicy": false }';
const item2 = JSON.parse(itemText2);
console.log(item2.name);       // dot notation
console.log(item2["price"]);   // bracket notation

const itemText3 = '{"name": "Dessert Patty", "price": 4, "spicy": false }';
const item3 = JSON.parse(itemText3);
console.log(item3.name);       // dot notation
console.log(item3["price"]);   // bracket notation

const itemText4 = '{"name": "Special Patty", "price": 7, "spicy": true }';
const item4 = JSON.parse(itemText4);
console.log(item4.name);       // dot notation
console.log(item4["price"]);   // bracket notation

const backToText = JSON.stringify(item);
console.log(backToText, typeof backToText);

const backToText2 = JSON.stringify(item2);
console.log(backToText2, typeof backToText2);

const backToText3 = JSON.stringify(item3);
console.log(backToText3, typeof backToText3);

const backToText4 = JSON.stringify(item4);
console.log(backToText4, typeof backToText4);

//array push() method example
let items = ['item1', 'item2', 'item3'];
items.push('item4', 'item5'); // Adds 'item4' to the end of the array
console.log(items); // Output: ['item1', 'item2', 'item3', 'item4', 'item5']

//array pop() method example
let fruits = ['apple', 'banana', 'cherry'];
console.log(`Before pop: ${fruits}`);
let removedFruit = fruits.pop(); // Removes the last element 'cherry'
console.log(`After pop: ${fruits}`);
console.log(`Removed fruit: ${removedFruit}`); // Output: 'cherry'
let allItems = items.concat(fruits);
console.log(`All items: ${allItems}`);
let index = allItems.unshift('newItem1', 'newItem2'); // Adds 'newItem1' and 'newItem2' to the start of the array
console.log(`After unshift: ${allItems}`);
let remove = allItems.shift(); // Removes the first element 'newItem1'
console.log(`After shift: ${allItems}`);
console.log(`Removed item: ${remove}`); // Output: 'newItem1'
console.log(allItems.slice(1, 4)); // Output: elements from index 1 to 3
let splicedItems = allItems.splice(2, 3, 'replacedItem2', 'replacedItem3', 'replacedItem4',); // Removes 3 elements from index 2 and adds two new items
console.log(`After splice: ${allItems}`);
console.log(`Spliced items: ${splicedItems}`); // Output: removed elements
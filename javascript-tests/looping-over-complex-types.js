function divider (){
    console.log
}
const myArray = [];

const numbers =[1, 2, 3, 5, 7];

console.log(numbers);

console.log('Fourth Item:', numbers[3]);
console.log(numbers[0]);
console.log('Length:', numbers.length[3]);
console.log('Number 3:', numbers[numbers.length - 3]);
numbers.push(25);
console.log(numbers);
numbers.pop();
console.log(numbers);

const cloudy = true;
const items = [1, 'two', [3, 4], cloudy, null];
console.log(items);

for (let i = 0; i < items.length; i++) {
    //console.log('value of i: ', i);
    console.log('Item: ', items[i]);
}
divider();

for (let item of items) {
    console.log('Item: ', item);
}

divider();

function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}


arrayToString(["bundle.js", "*.js.map", ".c9"]);

stringToArray("bundle.js, *.js.map, .c9");

const fileNames = "bundle.js, *.js.map, *.c9"

divider();

const myObject = {
    one: 5,
    two: 2,
    three: 3, 
};            

myObject.newItem = 'This is a new item in my object:',
console.log(myObject, smallNumbers);
console.log('values in our object:', smallNumbers.one, smallNumbers.two, smallNumbers.three);
console.log(myObject.newItem);

divider();
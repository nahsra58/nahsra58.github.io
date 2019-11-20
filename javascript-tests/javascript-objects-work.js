

var person = {
    firstName: 'George',
    lastName: 'Washington',
    fullName: 'George Washington',
};

console.log(person);


var calculator = {
    operand01: -1,
    operand02: -1,

};

console.log(calculator);

let divider=(title) => {
    console.log("\n==================");
    console.log(title);
    console.log("==================");
};
divider('Calculator');
console.log('operand01 =', calculator.operand01);



var calculator = {
    add: function() {
        console.log(calculator.operand01 + calculator.operand02));
    },
    subtract: function() {
        console.log+(calculator.operand01 -calculator.operand02));

};
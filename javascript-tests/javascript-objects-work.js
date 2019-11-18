var person = {
    firstName: 'George',
    lastName: 'Washington',
    fullName: 'George Washington',
};

var calculator = {
    operand01: -1,
    operand02: -1,
};

console.log(person);
console.log(calculator);


var person = {
	firstName: "Susan",
	lastName: "Smith",
	fullName: function() { 'use strict';
		return this.firstName + ' ' + this.lastName;
	}
};

var calculator = {
	a: 1,
	b: 2,
	c: 'three',
	addMe: function() { return this.a + this.b; }
};

console.log(myObject01.firstName);
console.log(myObject01.lastName);
console.log(myObject02.fullName());
console.log(myObject03.addMe());

// Statements assign values;
/* Example of Assignment Operator statements: */
myName = "Bilbo Baggins";
x = 5;
y = 3;


// Expressions yield a result
/* Example of Comparison Operator expressions: */
y < x;
320 != 13;

/* Example of Arithmetic Operator expressions: */
++y;
// Notice the space between the operands and the modulus operator:
212 % 9;

// Assignments for use in the code found below here.
y = 5;
x = 2;

/* Example of Logical Operator: */
// Notice the spaces between the operators and the operands. This is important.
if (( x < 1 ) && ( 5 === y )) {
    console.log("PASSED: x is smaller than one pr 5 does not equal y")
} else {
    console.log("FAILED: x is not smaller than one or 5 does not equal y")
}

// Notice that each expression is wrapped in a parenthesis
// Notice that both expressions are wrapped in parenthesis
if ( (5 === y) || (x < 1) ) {
    console.log("PASSED: x is smaller than one or 5 equals y")
} else {
    console.log("FAILED: x is smaller than one or 5 does not equal y")
}

if (( x < 1 ) ||( 5 === y )) {
    console.log("PASSED: x is smaller than one or 5 equals y")
} else {
    console.log("FAILED: x is smaller than one or 5 does not equal y")
}

x = 0;

if (( x < 1 ) && ( 5 === y )) {
    console.log("PASSED: x is smaller than one and 5 equals y")
} else {
    console.log("FAILED: x is not smaller than one or 5 does not equal y")
}
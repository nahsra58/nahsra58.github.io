//window.onload = () => {
    
    //const simpleFunction = document.getElementById('simpleFunction');
    //const functionParameters = document.getElementById('functionParameters');
    //const functionReturn = document.getElementById('functionReturn');
    
    function simpleFunction() {
        console.log('Functions should consist of statements designed to perform a single task.');
        
        
    }

    function functionParameters(value) {
        console.log(value);
    }

    function functionReturn() {
        return "Many functions return values.";
    }

    simpleFunction();

    functionParameters("Many functions take paramerters.");

    const returnValue = functionReturn();
    console.log(returnValue)


//}
window.onload = () => {
    
    const simpleFunction = document.getElementById('simpleFunctionDisplay');
    const functionParameters = document.getElementById('functionParametersDisplay');
    const functionReturn = document.getElementById('functionReturnDisplay');

    functionCallsAction.onclick = simpleFunction;

    function simpleFunction() {
        console.log('Functions should consist of statements designed to perform a single task.');
        simpleFunctionDisplay.textContent = "simple";
    }
    function functionParameters(value) {
        console.log(value);
    }

    function functionReturn() {
        return "Many functions return values.";
    }

    //simpleFunction();

    functionParameters("Many functions take paramerters.");

    const returnValue = functionReturn();
    console.log(returnValue)
}


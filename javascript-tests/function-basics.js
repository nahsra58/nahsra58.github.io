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

    simpleFunction();

    functionParameters("Many functions take paramerters.");

    const returnValue = functionReturn();
    console.log(returnValue)

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    const functionCallsAction = document.getElementById('functionCallsAction');
    functionCallsAction.onclick = function(elfcode) {
    // Handle the onclick event in here.
    }
}


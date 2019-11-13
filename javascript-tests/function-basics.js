window.onload = () => {
    const simpleFunction = document.getElementById('simpleFunction');
    const functionParameters = document.getElementById('functionParameters');
    const functionReturn = document.getElementById('functionReturn');
    
    function simple() {
        console.log('simpleFuction');
        simpleFunction.textContent = "simpleFunction";
        
    }
    functionCallsAction.onclick = simple;

    const data = nameDisplay.value; 

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    const someAction = document.getElementById('someAction');
someAction.onclick = function() {
    // Handle the onclick event in here.
}
}
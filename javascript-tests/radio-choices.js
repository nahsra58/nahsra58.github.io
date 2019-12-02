window.onload=()=> {
    const myForm = document.getElementById('sort-type');
    
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'green') {
            setColor("greenBackground");
            showChoice(value);
        }else if (value.toLowerCase() === 'blue') {
            setColor("blueBackground");
            showChoice(value);
        }else if (value.toLowerCase() === 'red'){
            setColor("redBackground");
            showChoice(value);
        }else if (value.toLowerCase() === 'yellow'){
            setColor("yellowBackground");
            showChoice(value);
        } else  {
            setColor("purpleBackground");
            showChoice(value);
        }
    });
    
    let currentClass = null;
    
    const setColor = (className) => {
        console.log("SET CLASS TO", className);
        var element = document.getElementById("form-section");
        if (currentClass) {
            element.classList.remove(currentClass);        
        }
        currentClass = className;
        element.classList.add(className);
    };
    
    
}
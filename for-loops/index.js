window.onload = () => {
    const listButton = document.getElementById('runForLoopAction');
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };
    listButton.onclick = () => {
        const myList = document.getElementById('myList');
            // WRAP THE NEXT LINE IN A for-loop that iterates over a variable named i.
            // The loop should iterate 5 times (count from zero to five).
            for(i=0; i<=5;i++) {
            elfCode.appendToList(myList, i);
            };
            // END LOOP
    }
}
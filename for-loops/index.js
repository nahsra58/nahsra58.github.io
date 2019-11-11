window.onload = () => {
    const listButton = document.getElementById('runForLoop');

    listButton.onclick = () => {
        const myList = document.getElementById('myListt');
            // WRAP THE NEXT LINE IN A for-loop that iterates over a variable named i.
            // The loop should iterate 5 times (count from zero to five).
            elfCode.appendToList(myList, i);
            // END LOOP
    }
}
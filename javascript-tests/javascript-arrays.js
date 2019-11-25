window.onload = () => {
    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');


    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };      

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    //arrays.numbers.sort((a, b) => a - b);

    numbersAction.onclick = () => {
        for (let number of arrays.numbers) {
            console.log(number);
            elfCode.appendToList(numbersDisplay, number)
        }
    };



}
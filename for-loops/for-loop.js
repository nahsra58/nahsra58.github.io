window.onload = () => {
    
const listButton = document.getElementById('runForLoop');
const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
};

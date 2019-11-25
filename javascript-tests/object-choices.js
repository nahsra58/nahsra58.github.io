window.onload = () => {


    const simpleObject = {

        firstName: "James",
        lastName: "Watson",

        sayName: function () {

            const fullName= this.firstName + this.lastName;

            console.log(fullName);
        }
    };

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay')
    const functionObjectDisplay = document.getElementById('simpleObjectDisplay')
    const customClassDisplay = document.getElementById('customClassDisplay')

    simpleObjectAction.onclick = function() {
        simpleObject.sayName();
        simpleObjectDisplay.textContent=fullName;
    }

    simpleObject.dynamicMethod = () => {

        return("Dynamic Method");

    }

    function FunctionObject() {

        FunctionObject.prototype.sayName = function () {

            return("Function Object");
        }
    }

    
}
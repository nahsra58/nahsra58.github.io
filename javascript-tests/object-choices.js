window.onload = () => {

    const simpleObject = {
        firstName: 'James',
        middleName: 'Foo',
        lastName: 'Watson',
    
    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleOjectAction');
    
    

        sayName: function () {
            const fullName = "Get Full Name:   " + this.firstName + " " + this.middleName+ " " + this.lastName;

         
            simpleObjectDisplay.textContent = fullName;
            }
    };

    simpleObjectAction.onclick = function(){
        simpleObject.sayName();
    }

    simpleObject.dynamicMethod = () => {

        console.log('Dynamic Method');
    };

    function FunctionObject() {
        FunctionObject.prototype.sayName = function () {
    

             functionObjectDisplay.textContent = "Constructor Function Full Name : Rosalind Franklin";
        }
    };
    functionObjectAction.onclick = function(){
        functionObject.sayName();
    }

    class CustomClass {
        sayName() {

            console.log('Custom Class');

            customClassDisplay.textContent = "Custom Class Full Name: Francis Crick";
        }
    };

    customClassAction.onclick = function(){
        customClass.sayName();

    }

    const functionObject = new FunctionObject();
    const customClass = new CustomClass();

    simpleObject.dynamicMethod();





};
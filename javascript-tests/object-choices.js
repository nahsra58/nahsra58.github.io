const simpleObject = {
    sayName: function() {
        console.log("simple object");
    };

    simpleObject.dynamicMethod = () => {
        console.log("Dynamic Method");
    }
}

simpleObject.sayName();
simpleObject.dynamicMethod();
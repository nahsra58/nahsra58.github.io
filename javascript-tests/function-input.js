window.onload= ()=> {

    const feetToInchesAction = document.getElementById('feetToInchesAction');

    const milesToFeetAction=document.getElementById('milesToFeetAction');

    const areaOfTriangleAction=document.getElementById('areaOfTriangleAction');

    const areaOfCircleAction=document.getElementById('areaOfCircleAction')



feetToInchesAction.onclick = () => {
    const feetToInchesInput = document.getElementById('feetToInchesInput');

    const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

    feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
};



milesToFeetAction.onclick = () => {
    const milesToFeetInput=document.getElementById('milesToFeetInput');

    const milesToFeetIDisplay=document.getElementById('milesToFeetDisplay');

    milesToFeetIDisplay.textContent=milesToFeet(milesToFeetInput.value)
}



areaOfTriangleAction.onclick =() => {
    const areaOfTriangleInputBase=document.getElementById('areaOfTriangleInputBase');

    const areaOfTriangleInputHeight=document.getElementById('areaOfTriangleInputHeight');

    const areaOfTriangleDisplay=document.getElementById("areaOfTriangleDisplay");

    areaOfTriangleDisplay.textContent=areaOfTriangle(areaOfTriangleInputBase.value, areaOfTriangleInputHeight.value);
}



areaOfCircleAction.onclick= () => {
    const areaOfCircleInput=document.getElementById('areaOfCircleInput');

    const areaOfCircleDisplay=document.getElementById('areaOfCircleDisplay');
    
    areaOfCircleDisplay.textContent=areaOfCircle(areaOfCircleInput.value);
}


    const feetToInches = (feet) => {
        return feet *12;
    }



    const milesToFeet = (miles) => {
        return miles*5280;
    }



    const areaOfTriangle =(base, height) => {
        return (base * height/2);
    }



    const areaOfCircle =(radius) => {
        return Math.PI * Math.pow(radius,2);
    }

}
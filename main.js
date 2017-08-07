
let string = ""

let screen = document.getElementById("screen");


document.getElementById("clear").addEventListener("click", clearFunct)

document.getElementById("num1").addEventListener("click", oneFunct) //1 button

document.getElementById("num2").addEventListener("click", twoFunct) //2 button

document.getElementById("num3").addEventListener("click", threeFunct) //3 button

document.getElementById("num4").addEventListener("click", fourFunct) //4 button

document.getElementById("num5").addEventListener("click", fiveFunct) //5 button

document.getElementById("num6").addEventListener("click", sixFunct) //6 button

document.getElementById("num7").addEventListener("click", sevenFunct) //7 button

document.getElementById("num8").addEventListener("click", eightFunct) //8 button

document.getElementById("num9").addEventListener("click", nineFunct) //9 button

document.getElementById("num0").addEventListener("click", zeroFunct) //0 button

//ops docs are below

document.getElementById("opsDivide").addEventListener("click", divideFunct)

document.getElementById("opsAdd").addEventListener("click", plusFunct)

document.getElementById("opsMinus").addEventListener("click", minusFunct)

document.getElementById("opsMultiply").addEventListener("click", multiplyFunct)

// equals and decimal below

document.getElementById("numDot").addEventListener("click", dotFunct)

document.getElementById("equalsSymbol").addEventListener("click", equalsFunct)





// functions below

function clearFunct() { // clear button
    string = "";
    screen.innerHTML = '';
}

function oneFunct() { // 1 button 
     string += "1";
    screen.innerHTML = string;
}

function twoFunct() { //2 button
    string += "2";
    screen.innerHTML = string;
}

function threeFunct() { //3 button
     string += "3";
    screen.innerHTML = string
}

function fourFunct() { //4 button
     string += "4";
    screen.innerHTML = string;
}

function fiveFunct() { //5 button
     string += "5";
    screen.innerHTML = string;
}

function sixFunct() { //6 button
     string += "6";
    screen.innerHTML = string;
}

function sevenFunct() { //7 button
     string += "7";
    screen.innerHTML = string;
}

function eightFunct() { //8 button
     string += "8";
    screen.innerHTML = string;
}

function nineFunct() { //9 button
     string += "9";
    screen.innerHTML = string;
}

function zeroFunct() { //0 button
     string += "0";
    screen.innerHTML = string;
}

// below are operator functions

function minusFunct() { // -  minus button
     string += "-";
    screen.innerHTML = string;
}

function plusFunct() { // +  plus button
     string += "+";
    screen.innerHTML = string;
}

function multiplyFunct() { //  * multiplication button
     string += "*";
    screen.innerHTML = string;
}

function divideFunct() { //  / division button
     string += "/";
    screen.innerHTML = string;
}

// below are equals and dot functions

function dotFunct() { // clear button
     string += ".";
    screen.innerHTML = string;
}

function equalsFunct() { // clear button
    eval(string)
  
   console.log(eval(string));

    screen.innerHTML = eval(string);
    
};





// {
//   //buttonClick += button.textContent; 
//   //console.log("this worked");
// });




//  buttonClick += button.textContent; 
//   console.log("this worked");
//global variables...if you want to comment on the lack of security with global variables....just don't
let disp;
var num1, num2;
var num1Str = "",
  num2Str = "";
var num1InProg = true;
var operation = "";

//init disp on load
window.onload = function () {
  disp = document.getElementById("screen");
};


function main(btnPressed) {
  //switch case to call relevant function for each button that can be pressed
  switch (btnPressed) {
    case 0:
      zero();
      break;
    case 1:
      one();
      break;
    case 2:
      two();
      break;
    case 3:
      three();
      break;
    case 4:
      four();
      break;
    case 5:
      five();
      break;
    case 6:
      six();
      break;
    case 7:
      seven();
      break;
    case 8:
      eight();
      break;
    case 9:
      nine();
      break;
    case "*":
      multiply();
      break;
    case "-":
      minus();
      break;
    case "+":
      add();
      break;
    case "/":
      divide();
      break;
    case "=":
      equal();
      break;
    case "C":
      clear();
      break;
  }
}

//Not adding comments for each number nor operands, they are super self-explanatory
function zero() {
  if (disp.innerHTML != "0") {
    disp.innerHTML += "0";
  }
}
function one() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "1";
  } else {
    disp.innerHTML += "1";
  }
}
function two() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "2";
  } else {
    disp.innerHTML += "2";
  }
}
function three() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "3";
  } else {
    disp.innerHTML += "3";
  }
}
function four() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "4";
  } else {
    disp.innerHTML += "4";
  }
}
function five() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "5";
  } else {
    disp.innerHTML += "5";
  }
}
function six() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "6";
  } else {
    disp.innerHTML += "6";
  }
}
function seven() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "7";
  } else {
    disp.innerHTML += "7";
  }
}
function eight() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "8";
  } else {
    disp.innerHTML += "8";
  }
}
function nine() {
  if (disp.innerHTML == "0" || disp.innerHTML == num1) {
    disp.innerHTML = "9";
  } else {
    disp.innerHTML += "9";
  }
}
function multiply() {
  num1 = parseInt(disp.innerHTML);
  disp.innerHTML = num1;
  num1InProg = 0;
  operation = "*";
}
function divide() {
  num1 = parseInt(disp.innerHTML);
  disp.innerHTML = num1;
  num1InProg = false;
  operation = "/";
}
function minus() {
  num1 = parseInt(disp.innerHTML);
  disp.innerHTML = num1;
  num1InProg = false;
  operation = "-";
}
function add() {
  num1 = parseInt(disp.innerHTML);
  disp.innerHTML = num1;
  num1InProg = false;
  operation = "+";
}
function equal() {
  num2 = parseInt(disp.innerHTML);
  //switch to do match according to operand selected
  switch (operation) {
    case "/":
      disp.innerHTML = num1 / num2;
      break;
    case "*":
      disp.innerHTML = num1 * num2;
      break;
    case "-":
      disp.innerHTML = num1 - num2;
      break;
    case "+":
      disp.innerHTML = num1 + num2;
      break;
  }
  num1 = "";
  num2 = "";
}

//Clears the screen and numbers... what else would you expect???
function clear(){
    num1 ="";
    num2="";
    operation="";
    disp.innerHTML=0;
}
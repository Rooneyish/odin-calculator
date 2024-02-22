function add(firstNum,secondNum){
    return firstNum+secondNum;
}

function subtract(firstNum,secondNum){
    return firstNum-secondNum
}

function multiply(firstNum,secondNum){
    return firstNum*secondNum
}

function divide(firstNum,secondNum){
    if(firstNum<secondNum){
        return "Math ERROR"
    }
    else{
        return firstNum/secondNum
    }
}

function operate(operand,firstNum,secondNum){
    if(operand==="+"){
        add(firstNum,secondNum)
    }
    else if(operand==="-"){
        subtract(firstNum,secondNum)
    }
    else if(operand==="*"){
        multiply(firstNum,secondNum)
    }
    else if(operand==="/"){
        divide(firstNum,secondNum)
    }
}


function seven(){
    let seven=document.querySelector('#seven');
    let displays=document.querySelector('.display');
    seven.addEventListener("click", function(){
        displays.innerHTML=7;
    }
    )
}

function eight() {
  let seven = document.querySelector("#eight");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 8;
  });
}

function nine() {
  let seven = document.querySelector("#nine");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 9;
  });
}

function plus() {
  let seven = document.querySelector("#plus");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = "+";
  });
}
function four() {
  let seven = document.querySelector("#four");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 4;
  });
}
function five() {
  let seven = document.querySelector("#five");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 5;
  });
}
function six() {
  let seven = document.querySelector("#six");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 6;
  });
}
function minus() {
  let seven = document.querySelector("#minus");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = '-';
  });
}
function one() {
  let seven = document.querySelector("#one");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 1;
  });
}
function two() {
  let seven = document.querySelector("#two");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 2;
  });
}
function three() {
  let seven = document.querySelector("#three");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 3;
  });
}
function star() {
  let seven = document.querySelector("#star");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = '*';
  });
}
function zero() {
  let seven = document.querySelector("#zero");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 0;
  });
}
function clear() {
  let seven = document.querySelector("#clear");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = "";
  });
}
function equal() {
  let seven = document.querySelector("#equal");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = '=';
  });
}
function div() {
  let seven = document.querySelector("#div");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = '/';
  });
}
function eight() {
  let seven = document.querySelector("#eight");
  let displays = document.querySelector(".display");
  seven.addEventListener("click", function () {
    displays.innerHTML = 8;
  });
}
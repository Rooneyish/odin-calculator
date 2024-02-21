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

function seven(7){
    let seven=document.querySelector("#7");
    let display=document.querySelector(".display")
    seven.addEventListener("clicl", (displays)=>{
        display.innerHtml="<p>7</p>"
    })
}
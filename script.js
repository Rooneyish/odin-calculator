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

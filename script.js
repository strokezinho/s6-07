function add (num1, num2){
    return num1 + num2
}

function multiply(num1, num2){
    let result = 0
        for(let i = 0; i < num2; i++){
            result = add(num1, result);    
        }
    return result     
}
        
function power(num1, num2){
    let result = num1 
        for(let i = 1; i < num2; i++){
            result = multiply(num1, result);    
        }
    return result    
}

function factorial(num){
    let result = 1
        for(let i = num; i > 1; i--){
            result = multiply(i, result);    
        }
    return result    
}

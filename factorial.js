//Write a function factorial() which takes a single numeric argument and returns the factorial of that number.

//multiply the number inputed by each decending number
//e.g. input = 3
//3 x 2 x 1 

function factorial(input){
    var factorialResult = 1,
    num = parseInt(input);
    for(var i = 1; i <= num; i++){
      factorialResult *= i;
    }
    return factorialResult;
}

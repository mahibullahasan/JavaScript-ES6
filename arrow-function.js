// Using Normal Function::
function normalFunction(number){
    return number*3;
}
const result = normalFunction(5);
console.log(result);

// Using Function Expression::
const expressionFunction = function myFunction(number){
    return number*3;
}
const result2 = expressionFunction(10);
console.log(result2);

//Using Arrow Function::
const arrowFunction = (num) => (num*4);
const result3 = arrowFunction(15);
console.log(result3);

//using Arrow Function Double parameter::
const doubleParameter = (x,y) => (x*y);
const result4 = doubleParameter(10,12);
console.log(result4)

//using without parameter arrow function::
const withoutParameter = () => (5*5);
const result5 = withoutParameter();
console.log(result5);
//Using Multiple Parameter::
const doMath = (x,y) =>{
    const sum = x+y;
    const sub = x-y;
    const mul = sum * sub;
    return mul
}
const result6 = doMath(10,12);
console.log(result6);



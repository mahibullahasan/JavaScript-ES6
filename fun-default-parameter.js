function add (number1,number2,num3 = 10){
    //Using undefined::
    if(number1==undefined){
        number1=0;
    }
    //using OR:: 
    number2 = number2 || 0;

    return number1+number2+num3;
}
var total = add (15,20);
console.log(total);
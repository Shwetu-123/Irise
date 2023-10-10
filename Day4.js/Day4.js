// For loop

for(var i =0;i<=10;i++){
 console.log(i)
}

for(var i=10;i>=1;i--){
console.log(i)}

for (var i = 10; i <= 20; i++) {
    console.log(i)
}

// for (var i = 500; i <= 1000; i++) {
//     console.log(i)
// }

// Functions In javacript

function anyname(){
    console.log("Ram")
}
anyname();


function doubleIt(num){
    console.log(num*num)
}
doubleIt(5);

function arthmatic(num1,num2){
    console.log("Addition is" ,num1+num2)
    console.log("Subtraction is" ,num1-num2)
    console.log("Division is" ,num1/num2)
    console.log("Multiplication is" ,num1*num2)
}
arthmatic(20,40);

function divid(n1, n2) {
    var dividation = n1 / n2;
    console.log(dividation)
    console.log(Math.floor(dividation))
    console.log(Math.ceil(dividation))
}

divid(2345,123);
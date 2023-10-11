
var numbers =[23,67,12,3,6,8,9,]

function countevenodd(array){
    var evencount=0;
    var oddcount =0;
for(var i=0;i<array.length;i++)
{
    if(array[i]%2==0){
        console.log(`even numbers are ${array[i]}`)
        evencount++;
    }
    else{
        console.log(`odd numbers are ${array[i]}`)
        oddcount++;
    }
}
console.log(`Total even numbers in Array ${evencount}`)
console.log(`Total odd numbers in Array ${oddcount}`)
}
countevenodd(numbers);

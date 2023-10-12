var result = [4,3,2,5,6,7,1,9,8,4,2]

for (var i = 1; i < 11; i++) {
    console.log(i)
    // console.log(result.push(i));
    
}
// using push method addind the element to the Array.
console.log(result.push(i));

console.log(result)
console.log(result.join(" "))


const animals =['cow','cat','dog','Dear','Bear'];
console.log(animals);
const count= animals.push('goat','fox');
// console.log(count);
console.log("push: ",animals);
 

// using Pop method erase one element from last position.
 animals.pop();
 console.log("pop: ",animals);


//  shift method can used to remove initial value from array.

animals.shift();
console.log("Shift",animals)

// unshift can add the value to the Array.
animals.unshift('elephant');
console.log("unshift",animals)

// map method to perfom any functalities.

const array =[1,2,3,4,5,6]
console.log("using map:",array)
var multi = array.map((i)=>i*3)
var add = array.map((i)=>i+3)
var sub= array.map((i)=>i-3)
var div = array.map((i)=>i/3)
console.log("Multiplication is",multi)
console.log("Addition is ",add)
console.log("Subtraction is ",sub)
console.log("Division is ",div)








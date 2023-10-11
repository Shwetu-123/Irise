var numbers =[10,8,7,5,12,3,6,8,9,]
var target = 15;
for (var i = 0 ; i < numbers.length-1; i++)
{
    for(var j = i + 1 ; j < numbers.length; j++)
    {
        if(numbers[i]+numbers[j]==target)
        {
            console.log(`${numbers[i]} + ${numbers[j]} = ${target}`)
        }
    }
}

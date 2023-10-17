 var names =['Sita','Ram','Akash','Madhav','Priya']
 names.sort();
 console.log(names);

 var num =[2,6,98,123,765,342,1,90]
 num.sort();
 console.log(num);

 num.sort((a,b)=>(a-b))
 console.log(num);

 num.sort((a,b) =>(b-a));
 console.log(num);

 var myObj ={studentlist:20,studentnames:['ram','rohit','akash']}

 var result = JSON.stringify(myObj)
 console.log(result)
 console.log(result.studentlist)

 result = JSON.parse(result)
console.log(result)

localStorage.setItem("mydata" , JSON.stringify(myObj));
localStorage.getItem("mydata" , JSON.parse(myObj))









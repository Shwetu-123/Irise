function StoreData(){
var obj ={Studentlist:20,StudentNames:['Ram','Raghav','Kunal','Priya']}

 localStorage.setItem("myStudent",JSON.stringify(obj));
 alert("Data added to Ls successfully...")
 return
}
function RetriveData()
{
    const dataFromLs = JSON.parse(localStorage.getItem("myData"))
    console.log(dataFromLs,"- Data here")
    // alert(`${dataFromLs.obj} "- Studentlist."`)
    return
}

function DeleteData()
{
    localStorage.removeItem("myData")
    alert("Data Delete Successfully")
}
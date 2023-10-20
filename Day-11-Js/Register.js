function Register(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var passward = document.getElementById("password").value;

    var userData = { userName: name, userEmail:email, userNumber:number, userPassward:passward }
    console.log(userData , "-userdata")

    localStorage.setItem("user" , JSON.stringify(userData))

    var name = document.getElementById("name").value = '';
    var email = document.getElementById("email").value = '';
    var number = document.getElementById("number").value = '';
    var passward = document.getElementById("password").value = "";


    alert ("Data added to ls Successfully....")

    const A = JSON.parse(localStorage.getItem("user"))


}




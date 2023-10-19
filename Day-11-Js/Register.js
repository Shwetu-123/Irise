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
// function Register(event) {
//     event.preventDefault();
//     // alert("Function calling..")
//     // console.log(document.getElementById("name").value)

//     var name = document.getElementById("name").value;
//     var number = document.getElementById("number").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     // console.log(name, "- name", email, "- email", password, "- password", number, "- number")

//     var userData = { userName: name, userNumber: number, userEmail: email, userPassword: password };
//     console.log(userData, "-userdata")

//     localStorage.setItem("user", JSON.stringify(userData));


//     document.getElementById("name").value = '';
//     document.getElementById("number").value = '';
//     document.getElementById("email").value = '';
//     document.getElementById("password").value = "";

//     alert("Data stored in LS.")

// }

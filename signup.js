document.querySelector("button").addEventListener("click", SignUp);
var userArr = JSON.parse(localStorage.getItem("userDatastore")) || []

function SignUp() {
    var first = document.getElementById("first").value;
    if(first==""){
        document.getElementById("first").style.borderColor="red";
        alert("Please enter your first name");
        return false;
    } else{
        document.getElementById("first").style.borderColor="grey";
    }

    if(last==""){
        document.getElementById("last").style.borderColor="red";
        alert("Please enter your last name");
        return false;
    } else{
        document.getElementById("last").style.borderColor="grey";
    }
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if(pass.length<6){
        document.getElementById("pass").style.borderColor="red";
        alert("Password must be atleast 6 charecters.");
        return false;
    }
    else{
        document.getElementById("pass").style.borderColor="grey";
    }

    var dob = document.getElementById("dob").value;
    var mobile = document.getElementById("mobile").value;
    if(mobile==""){
        document.getElementById("mobile").style.borderColor="red";
        alert("Please enter a valid mobile");
        return false;
    }
    else{
        document.getElementById("mobile").style.borderColor="grey";
    }


    var userCredentials = {
        first:first,
        last:last,
        emailAddress: email,
        passWord: pass,
        dob:dob,
        mobileNo: mobile
    }


    userArr.push(userCredentials)
    localStorage.setItem("userDatastore", JSON.stringify(userArr))

    window.location.href = "signin.html"

}
document.querySelector("button").addEventListener("mouseenter",enterButton);
function enterButton(){
    document.querySelector("button").style.backgroundColor="#a71111";
}
document.querySelector("button").addEventListener("mouseleave",leaveButton);
function leaveButton(){
    document.querySelector("button").style.backgroundColor="#EB0000";
}
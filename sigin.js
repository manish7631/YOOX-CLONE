document.querySelector("button").addEventListener("click", signIn);
var regdUsers = JSON.parse(localStorage.getItem("userDatastore"));

function signIn() {
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    if (email == "admin" && pass == "admin") {
        window.location.href = "admin.html"
    } else {
        for (var i = 0; i < regdUsers.length; i++) {
            if (regdUsers[i].emailAddress == email && regdUsers[i].passWord == pass) {
               // alert("correct")
               window.location.href = "home.html"
            }else{
                alert("please fill correct details")
            }
        }
    }

}



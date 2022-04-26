

 document.getElementById("btn").addEventListener("click", myfun) 
 

 function myfun(){
      var x = document.getElementById("otp").value;
       if(x == 1234){
           alert("Payment successful")
       }else{
           alert("Worng otp")
       }
 }
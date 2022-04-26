 var data1 = [
     {
        image1:"https://www.yoox.com/images/yoox80/banners/6915_2_Giftguide_BagsAcc_W_Main.jpg?634485886869569819&impolicy=cropDefault&width=960&height=510",
     }
     
 ]

  

 var data2 = [
     {
         image:"https://www.yoox.com/images/items/15/15119060SR_14_f.jpg?impolicy=crop&width=306&height=390",
         name:"Long dress",
         price:"1708"
     },
     {
        image:"https://www.yoox.com/images/items/50/50252651AF_14_f.jpg?impolicy=crop&width=306&height=390",
       name:"Bracelet",
        price:"304"
    },
    {
        image:"https://www.yoox.com/images/items/50/50252784ET_14_f.jpg?impolicy=crop&width=306&height=390",
        name:"Necklace",
        price:"334"
    },
    
    
 ]

 //var productitems = JSON.parse(localStorage.getItem("pdetails")) || [] ;

 var productitems = []

 data1.map(function(elem){
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", elem.image1);
    imgtag.setAttribute("class", "image")

    var second_img = document.getElementById("second_img")
    second_img.append(imgtag)

      
     
})
 data2.map(function(elem){
     var productDiv = document.createElement("div")
     productDiv.setAttribute("class", "productDiv")

    

     var name = document.createElement("p")
     name.textContent = elem.name

     var price = document.createElement("p")
     price.textContent =  "$" +  elem.price

     var divp = document.createElement("div")
     divp.setAttribute("class", "producttext")
     var btnadd = document.createElement("button");
     btnadd.setAttribute("class", "btncart")
     btnadd.textContent = "Item Details"
     btnadd.addEventListener("click", function(){
        product(elem)
        window.location.href = "pdetails.html"
    })

     divp.append(name,price,btnadd)
     

     var imgtag = document.createElement("img");
     imgtag.setAttribute("src", elem.image)
     imgtag.setAttribute("class", "imgproduct")

     productDiv.append(imgtag, divp)

     var productinside= document.getElementById("product_inside")
    productinside.append(productDiv)

      

    
 })

 function product(elem){
     productitems.push(elem)
   
   localStorage.setItem("pdetails", JSON.stringify(productitems))
 }

 document.getElementById("cart").addEventListener("click", myfun)

 
 function myfun(){
     window.location.href = "cart.html"
 }
 

 function checkemail(){
    var email = document.getElementById("email").value;
    var ptag = document. getElementById("valid");
    console.log(email);
    if(email == ''){
        ptag.textContent = "Please enter a valid email address"
    }else{
        ptag.textContent = "Subscribed"
    }
    console.log(ptag)
 }
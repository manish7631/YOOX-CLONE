 

var cart = JSON.parse(localStorage.getItem("cart")) ||  [];

var product =  JSON.parse(localStorage.getItem("pdetails"))
 
 



console.log(product)
displayitems(product)
function displayitems(product){
product.map(function(elem){
 
    var div1 = document.createElement("div");
    div1.setAttribute("class", "pdeatilsimg")

    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", elem.image)
    imgtag.setAttribute("class", "pdetailsimg")

    div1.append(imgtag)

    

    var name = document.createElement("p")
    name.setAttribute("class", "name")
    name.textContent = elem.name

    var price = document.createElement("h4")
    price.setAttribute("class", "brand")
    price.textContent = "$" + elem.price;

    var btn1 = document.createElement("button")
    btn1.textContent = "ADD TO  SHOOPING BAG"
    btn1.addEventListener("click", function(){
        addtocart(elem)
    })
    btn1.setAttribute("class", "btn1")

    
    var btn2 = document.createElement("button")
    btn2.textContent = "ADD TO  DREAM BOX"
    btn2.setAttribute("class", "btn2")
    var hr = document.createElement("hr")

    var div3 = document.createElement("div")
    div3.setAttribute("class", "div3")
    div3.append(btn1,hr)

    var div2 = document.createElement("div")
    div2.setAttribute("class", "pdeatilstext")
    div2.append(name, price, div3)

    var x = document.getElementById("pdeatilsmain")
    x.append(div1, div2)

    
})
}


 function addtocart(elem){
     cart.push(elem);
   
 
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  document.getElementById("cart").addEventListener("click", myfun)
function myfun(){
    window.location.href = "cart.html"
}
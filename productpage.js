var data = [
    {
        image:"https://www.yoox.com/images/items/38/38996435rf_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        name:"shirt",
        price:"1300"

    },
    {
        image:" https://www.yoox.com/images/items/12/12639851MC_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"shirt",
        price:"648",
    },
    {
        image:" https://www.yoox.com/images/items/42/42848901IT_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"shirt",
        price:"540",
    },
    {
        image:"  https://www.yoox.com/images/items/12/12590836CT_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"Ti-shirt",
        price:"406",
    },
    {
        image:" https://www.yoox.com/images/items/12/12564384AD_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"Ti-shirt",
        price:"312",
    },
    {
        image:"https://www.yoox.com/images/items/13/13641606JS_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"Pants",
        price:"99",
    },
    {
        image:"https://www.yoox.com/images/items/13/13460172GU_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"Pants",
        price:"74"
    },
    {
        image:"https://www.yoox.com/images/items/13/13594949UW_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"pants",
        price:"242"
    },
    
     
    
]

var x =   [];

var cart = JSON.parse(localStorage.getItem("cart")) ||  [];

data.map(function(item){
    var obj = {
        image:item.image,
        name:item.name,
        price:item.price,
    }

     
    x.push(obj)

    localStorage.setItem("productdata", JSON.stringify(x))

    
    
})

var prod = JSON.parse(localStorage.getItem("productdata"))
displayitems(prod)

 

 

 function handlePriceSort() {
     var selected = document.getElementById("sortByPrice").value;
     console.log("selected", selected)
     if (selected == "low") {
     prod = prod.sort(function (a, b) {
             return Number(a.price) - Number(b.price);
         })
     }

    if (selected == "high") {
         prod = prod.sort(function (a, b) {
             return Number(b.price) - Number(a.price);
        })
     }
    // console.log(prod);
    displayitems(prod)
 }

  function handleNameSort() {
      var selected = document.getElementById("sortByName").value;
      if (selected == "asc") {
          prod = prod.sort(function (a, b) {
            return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
         })
      }

    if (selected == "dsc") {
        prod = prod.sort(function (a, b) {
            return a.name > b.name ? -1 : b.name > a.name ? 1 : 0;
        })
      }
      displayitems(prod)
  }



function displayitems(prod){
    document.querySelector("#product_info").textContent = " ";
    prod.map(function(elem){
        
         var div1 = document.createElement("div");
     div1.setAttribute("class", "div1")
      var img = document.createElement("img");
      img.setAttribute("src", elem.image)
      img.setAttribute("class", "imagetag")

      var name = document.createElement("h4")
      name.textContent = elem.name

    
     var price = document.createElement("p")
     var btnadd = document.createElement("button");
     btnadd.setAttribute("class", "btncart")
     btnadd.textContent = "ADD TO SHOPPING BAG"
     btnadd.addEventListener("click", function(){
         addtocart(elem)
     })
      price.textContent = "$" + elem.price
      var div2 = document.createElement("div")
      div2.setAttribute("class", "div2")

      div2.append(name, price,btnadd)

      div1.append(img,div2)

    var x = document.getElementById("product_info")
    x.append(div1)

 
    })
    
}
 

function addtocart(elem){
   cart.push(elem);
  // console.log(elem)

   localStorage.setItem("cart", JSON.stringify(cart))
}

document.getElementById("cart").addEventListener("click", myfun)
function myfun(){
    window.location.href = "cart.html"
}
console.log(cart)

  
//json.parse(localStorage.getItem("cart")) ||
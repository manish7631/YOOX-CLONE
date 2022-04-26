var cartitems = JSON.parse(localStorage.getItem("cart"))

   document.querySelector("button").textContent = "Total item is " + cartitems.length;
 
displayitems(cartitems)


function displayitems(product){
    product.map(function(item){
        var divmain = document.createElement("div")
        divmain.setAttribute("class", "divMain")

        var imagetag = document.createElement("img") 
        imagetag.setAttribute("src", item.image)
        imagetag.setAttribute("class", "imagetag")
        var name = document.createElement("p")
        name.setAttribute("class", "ptag")
        name.textContent = item.name

        var price = document.createElement("p")
        name.setAttribute("class", "ptag")
        price.textContent = "$" + item.price;
        
        var div1 = document.createElement("div")
        div1.setAttribute("class", "Div")
        var div2 = document.createElement("div")
        div2.setAttribute("class", "Div")
        var div3 = document.createElement("div")
        div3.setAttribute("class", "Div")
        div1.append(imagetag)
        div2.append(name)
        div3.append(price)


        divmain.append(div1, div2, div3)

        var x = document.getElementById("cartitems")
        x.append(divmain)

    })
}

var total = cartitems.reduce(function (acc, cv) {
    return acc + Number(cv.price)
}, 0);

document.querySelector("#total").innerHTML = `<h1>Total cost is ${ "$" + total}</h1><button onclick = "goToCheckout()">Checkout</button>`

function goToCheckout() {
    window.location.href = "checkout.html"
}

console.log(total)

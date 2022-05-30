// On clicking remove button the item should be removed from DOM as well as localstorage.

let arr = JSON.parse(localStorage.getItem("coffee"))  || []
 
arr.map(function(e){
   let box = document.getElementById("show");
   let div = document.createElement("div");
   let img = document.createElement("img");
   img.src = e.img;
   img.setAttribute("id", "img")
   let title = document.createElement("p")
   title.innerText = e.title;
   let price = document.createElement("p")
   price.innerText = e.price;
   let button = document.createElement('button')
   button.innerText = "remove coffee"
   button.setAttribute("id", "remove_coffee")
   div.append(img,title,price,button)
   box.append(div)

})

function check(){
    window.location = "checkout.html"
}

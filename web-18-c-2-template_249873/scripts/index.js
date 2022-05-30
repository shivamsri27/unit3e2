// Add the coffee to local storage with key "coffee"
function buck(){
    window.location = "bucket.html"
}

var arr = JSON.parse(localStorage.getItem("coffee")) || []

fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
.then(function(res){
    res.json().then(function(res){
        console.log(res.menu.data)
        append(res.menu.data)
    })
})
.catch(function(err){
    console.log("error")
})

function append(res){
    res.map(function(res){
        console.log(res)
        let box = document.getElementById("menu");
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = res.image;
        image.setAttribute("id", "img")
        let title = document.createElement("p");
        title.innerText = res.title;
        let price = document.createElement("p");
        price.innerText = res.price;

        let button = document.createElement("button")
        button.innerText = "Add to Bucket"
        button.setAttribute("id","add_to_bucket")
        div.append(image,title,price,button)
        box.append(div)
        button.addEventListener("click",function(){
            coffee(res)
            // localStorage.setItem("coffee",JSON.stringify(res))
        })


    })
}

function coffee(res)
{
    let myproduct = {
        img : res.image,
        title : res.title,
        price : res.price,

    }
    arr.push(myproduct);
    localStorage.setItem("coffee", JSON.stringify(arr))

}

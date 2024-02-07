
// sidenav

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closeicon = document.getElementById("closenav");
menuicon.addEventListener("click",function(){
    sidenav.style.right="0";
})

closeicon.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search functonality

var search = document.getElementById("search");
var productContainer = document.getElementById("product-container");
var productList = productContainer.querySelectorAll("div");
search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();
    for(let i=0;i<productList.length;i++){
        var productName = productList[i].querySelector("h1").textContent;
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[i].style.display="none";
        }
        else{
            productList[i].style.display="block";
        }
    }
})
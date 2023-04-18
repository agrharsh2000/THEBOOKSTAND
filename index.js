let cartIcon= document.querySelector('#cart-icon')
let cart= document.querySelector('.cart')
let closeCart= document.querySelector('#close-cart')


cartIcon.onclick=()=>{
    cart.classList.add("active");
};

closeCart.onclick=()=>{
    cart.classList.remove("active");
};



    if (document.readyState=='loading'){
        document.addEventListener('DOMContentLoaded',ready)
    }
    else{
        ready();
    }

    function ready(){
        var removeCartButtons=document.getElementsByClassName('cart-remove');
        for (var i=0;i< removeCartButtons.length;i++){
            var button=removeCartButtons[i];
            button.addEventListener('click',removeCartItem);
        }

        var quantityinputs=document.getElementsByClassName('cart-quantity');
        for (var i=0;i< quantityinputs.length;i++){
             var input=quantityinputs[i];
             input.addEventListener("change",quantitychanged);
    }
    var addcart = document.getElementsByClassName('add-cart')
    for (var i=0;i<addcart.length;i++)
    {
        var button=addcart[i];
        button.addEventListener("click",addcartclicked);

    }
    
    document.getElementsByClassName("btn-buy")[0].addEventListener("click",buybuttonclicked);
}

function buybuttonclicked(){
    alert('your order is placed');
    var cartcontent =document.getElementsByClassName('cart-content')[0]
    while(cartcontent.hasChildNodes()){
        cartcontent.removeChild(cartcontent.firstChild);
    }
    updatetotal();
    }
    

    function removeCartItem(event)
    {
        var buttonClicked=event.target;
        buttonClicked.parentElement.parentElement.remove();
        updatetotal();
    }

    function quantitychanged(event){
        var input=event.target;
        if (isNaN(input.value)||input.value<=0){
            input.value=1;
        }
        updatetotal();
    }

    function addcartclicked(event){
        let button =event.target;
        let shopproducts=button.parentElement.parentElement;
        let title=shopproducts.getElementsByClassName("product-title")[0].innerHTML;
        let price=shopproducts.getElementsByClassName("price")[0].innerHTML;
        let price1=price.replace("FROM","");
        let productimg = shopproducts.getElementsByClassName("product-img")[0].src;
       addproducttocart(title,price1, productimg);
       console.log("heel")
       updatetotal();
    
    }

    function addproducttocart(title,price1,productimg){
        var cartbookbox=document.createElement('div');
        cartbookbox.classList.add("cart-box");
        var cartitems = document.getElementsByClassName("cart-content")[0];

        // converted html code to javascript code
        var img = document.createElement("img");
        img.src = productimg;
        img.alt = "";
        img.classList.add("cart-img");
        cartbookbox.appendChild(img);

        var detailBox = document.createElement("div");
        detailBox.classList.add("detail-box");

        var titleEl = document.createElement("div");
        titleEl.classList.add("cart-product-title");
        titleEl.textContent = title;
        detailBox.appendChild(titleEl);

        var descEl = document.createElement("p");
        descEl.classList.add("cart-desc");
        descEl.textContent = "Here goes some description about this particular book. That defines why you should buy it.";
        detailBox.appendChild(descEl);

        var removeBtn = document.createElement("button");
        removeBtn.classList.add("cart-quantity", "cart-remove");
        removeBtn.textContent = "Will read later";
        detailBox.appendChild(removeBtn);

        cartbookbox.appendChild(detailBox);

        var priceEl = document.createElement("div");
        priceEl.classList.add("cart-price");
        priceEl.textContent = price1;
        cartbookbox.appendChild(priceEl);
        cartitems.append(cartbookbox);
        cartbookbox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click',removeCartItem);
        cartbookbox.
        getElementsByClassName('cart-quantity')[0]
        .addEventListener('change',quantitychanged);

    }

   




    function updatetotal(){
        var cartcontent=document.getElementsByClassName('cart-content')[0];
        var cartboxes=cartcontent.getElementsByClassName('cart-box');
        var total=0;
        
        for (var i=0;i< cartboxes.length;i++){
      
            var cartbox=cartboxes[i];
            var pricelement=cartbox.getElementsByClassName('cart-price')[0];
            var price=parseFloat(pricelement.innerHTML.replace("$",""));
            total=total+price;
            total=Math.round(total*100)/100;
        }
            document.getElementsByClassName('total-price')[0].innerHTML="$"+total;
    
    }
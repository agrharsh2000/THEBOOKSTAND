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
        var removeCartButtons=document.getElementsByClassName('cart-remove')
        console.log(removeCartButtons);
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
        var button =event.target;
        var shopproducts=button.parentElement;
        var title=shopproducts.getElementsByClassName("product-title")[0].innerHTML;
        var price=shopproducts.getElementsByClassName("price")[0].innerHTML;
        var price1=price.replace("FROM","");
        var productimg = shopproducts.getElementsByClassName("product-img")[0].src;
       addproducttocart(title,price1, productimg);
       updatetotal();
    
    }

    function addproducttocart(title,price1,productimg){
        var cartbookbox=document.createElement('div');
        cartbookbox.classList.add("cart-box");
        var cartitems = document.getElementsByClassName("cart-content")[0];
        var cartitemnames= cartitems.getElementsByClassName("cart-product-title");
      
    


    var cartboxcontent=`
                        <img src="${productimg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <p class="cart-desc">Here goes some description about this particular book. That defines why you should buy it.</p>
                            <button class="cart-quantity cart-remove">Will read later</button>
                        </div>
                        <div class="cart-price">${price1}</div>`;

    cartbookbox.innerHTML = cartboxcontent;
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
        }
            document.getElementsByClassName('total-price')[0].innerHTML="$"+total;
    
    }
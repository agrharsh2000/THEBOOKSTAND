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
    }

    // updatetotal();

    function removeCartItem(event)
    {
        var buttonClicked=event.target;
        buttonClicked.parentElement.parentElement.remove();
        updatetotal();
    }

    // function addcartclicked(event){
    //     var button =event.target;
    //     var shopproducts=button.parentElement;
    //     var title=shopproducts.getElementsByClassName("product-title")[0].innerHTML;
    //     console.log("fdfvf")
    //     var price=shopproducts.getElementsByClassName("price")[0].innerHTML;
    //     var productimg = shopproducts.getElementsByClassName("product-img")[0].src;
    //     addproducttocart(title,price, productimg);
    //     updatetotal();
    // }

    // function addproducttocart(title,price,productimg){
    //     var cartbookbox=document.createElement('div');
    //     cartbookbox.classList.add("cart-box");
    //     var cartitems = document.getElementsByClassName("cart-content")[0];
    //     var cartitemnames= cartitems.getElementsByClassName("cart-product-title");



    // var cartboxcontent=`<img src="img/book1.jpg" alt="" class="cart-img">
    // <div class="detail-box">
    //     <div class="cart-product-title">Book1</div>
    //     <p class="cart-desc">Here goes some description about this particular book. That defines why you should buy it.</p>
    //     <button class="cart-quantity cart-remove">Will read later</button>
    // </div>
    // <div class="cart-price">$25</div>`;

    // cartbookbox.innerHTML = cartboxcontent
    // cartitems.append(cartbookbox)
    // cartbookbox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem);

    // }

    // function updatetotal(){
    //     var cartcontent=document.getElementsByClassName('cart-content')[0];
    //     var cartboxes=cartcontent.getElementsByClassName('cart-box');
    //     var total=0;
    //     console.log("fvf");
    //     for (var i=0;i< cartboxes.length;i++){
    //         console.log("hruhtr");
    //         var cartbox=cartboxes[i];
    //         var pricelement=cartbox.getElementsByClassName('cart-price')[0];
    //         var price=parseFloat(pricelement.innerText.replace("$",""));
    //         total=total+price;
    //         document.getElementsByClassName('total-price')[0].innerHTML="$"+total;
    // }
    // }
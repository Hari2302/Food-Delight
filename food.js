const btnCartIcon=document.querySelector('#cartimage');
const cart=document.querySelector('.cart');
const btnClose= document.querySelector('#cancel');

//     BUTTON ACTIVE  

btnCartIcon.addEventListener('click',()=>{
    cart.classList.add('cart-active');
})

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
})


document.addEventListener('DOMContentLoaded' ,loadfood);

function loadfood(){
     loadcontent();
}

function loadcontent(){
    //   REMOVE   CART  ITEM

     let btntrash=document.querySelectorAll('#trash');

     btntrash.forEach((btn)=>{
        btn.addEventListener('click',removebox)
     })

     //      PRODUCT ITEM QUANTITY ADd
      
     let qtyadd=document.querySelectorAll('.cart-quantity');

     qtyadd.forEach((input)=>{
        input.addEventListener('change',changeqty)
     })

     // CART ADD

     let cartBtns=document.querySelectorAll('#foodcartimage');
         cartBtns.forEach((btn)=>{
            btn.addEventListener('click',addCart);
            
         })


}

// .......................................................................................



//        REMOVE ITEM
function removebox(){
    if(confirm('Are you sure to Remove'))
      this.parentElement.remove();

}

//      PRODUCT INCRESE

function changeqty(){    
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
}

//  check prodrct
    let itemList=[];

// CART ADDING  PROCESS

function addCart(){
 
 let food= this.parentElement;
  let title=food.querySelector('.foo-title').innerHTML;
  let price=food.querySelector('.food-price').innerHTML;
  let foodimg=food.querySelector('.food-image').src;

    // FINDING THE ALREADY PRESENT PRODUCT IN CART
            let newItem=(title,price,foodimg);

            if(itemList.find((el)=>el.title==newItem.title)){
                alert("Item Present in Cart");
                return;
            }else{
                itemList.push(newItem);
            }


            


  let newProduct=createCartProduct(title,price,foodimg);
    let element=document.createElement('div');
    element.innerHTML=newProduct;
  let cartbasket=document.querySelector('.cart-content');
  cartbasket.append(element);
  loadcontent();

}

function createCartProduct(title,price,foodimg){

    return `   <div class="cart-box">
                        <img src="${foodimg}" alt="" class="cart-image">
                        <div class="detail-box">
                            <div class="card-food-title">${title}</div>
                            <div class="price-box">
                                <div class="cart-price">${price}</div> &nbsp; &nbsp; &nbsp; &nbsp;
                                <div class="cart-amt">${price}</div>
                            </div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                      
                        <img src="/assest/bin.png" alt="" id="trash">
                    </div> `;
};



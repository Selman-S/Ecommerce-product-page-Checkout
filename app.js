
const productImg = document.querySelector('.product-img-div');
productImg.addEventListener('click', (e) => {
    if (e.target.classList.contains('img-1')) {
        e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.setAttribute('src', './images/image-product-1.jpg')
    } else if (e.target.classList.contains('img-2')) {
        e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.setAttribute('src', './images/image-product-2.jpg')
    } else if (e.target.classList.contains('img-3')) {
        e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.setAttribute('src', './images/image-product-3.jpg')
    } else if (e.target.classList.contains('img-4')) {
        e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.setAttribute('src', './images/image-product-4.jpg')
    }
    
})

const cartDiv = document.querySelector('.cart-div');
cartDiv.addEventListener('click', (b) => {
    if(b.target.nextElementSibling.style.visibility == 'visible'){
        b.target.nextElementSibling.style.visibility = 'hidden'
    }else{
        b.target.nextElementSibling.style.visibility = 'visible'
    }
   
    
})
const container = document.querySelector('.main');
container.addEventListener('click', ()=>{
    if(document.querySelector('.basket').style.visibility =='visible'){
        document.querySelector('.basket').style.visibility ='hidden'
    }

    // document.querySelector(".mostten").style.visibility ='hidden';
    
})


const product = document.querySelector('.product');
product.addEventListener('click', (event) => {
  
    if(event.target.classList.contains('minus-img')){
        event.target.nextElementSibling.innerText--;
        document.querySelector(".mostten").style.display = 'none';
        if(event.target.nextElementSibling.innerText<0){
            event.target.nextElementSibling.innerText = 0
        }
    }
    

  
    if (event.target.classList.contains('plus-img')){
        event.target.previousElementSibling.innerText++
    
        if(event.target.previousElementSibling.innerText >9){
        
               document.querySelector(".mostten").style.display='block';
               event.target.previousElementSibling.innerText =9
    
           }
    }
    
    if(event.target.classList.contains('add-cart')){

      
        if(event.target.parentElement.querySelector('.quantity').innerText>0){
            //aded artınca sepetin içini görünür yap
            document.querySelector('.box-content').style.display='block';
            // ürün fiyatını sepitin içindeki ürün fiyatına eşile
            document.querySelector('.price-product').innerText = document.querySelector('.cost-price').innerText;

            document.querySelector('.quantity-product').innerText = document.querySelector('.quantity').innerText;

            document.querySelector('.total-product').innerText = document.querySelector('.quantity-product').innerText * document.querySelector('.price-product').innerText


        }
       
    }


})



















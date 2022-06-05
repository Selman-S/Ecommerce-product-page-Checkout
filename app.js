
const productImg = document.querySelector('.product-img-div');
// ürün resmi kısmını thumbnaillere tıklandığında ilgili kısma göre fotoğraf değiştir
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
    
});


const cartDiv = document.querySelector('.cart-div');
// sepet simgesine tıkladığında .alışır
cartDiv.addEventListener('click', (b) => {
    // sepet görünürse gizle gizliyse göster
    if(document.querySelector('.basket').style.visibility == 'visible'){
        document.querySelector('.basket').style.visibility = 'hidden'
    }else{
        document.querySelector('.basket').style.visibility = 'visible'
    }
   
    
})
const container = document.querySelector('.main');
// container alanına tıkladığında çalıştır
container.addEventListener('click', ()=>{
    // sepet görünürse gizle
    if(document.querySelector('.basket').style.visibility =='visible'){
        document.querySelector('.basket').style.visibility ='hidden'
    }

 ;
    
})


const product = document.querySelector('.product');
product.addEventListener('click', (event) => {
    // eksiye basınca çalıştır
    if(event.target.classList.contains('minus-img')){
        // ürün adedini bir azalt
        event.target.nextElementSibling.innerText--;
        // 9 dan büyük uyarısını gizle
        document.querySelector(".mostten").style.display = 'none';
        // 0 dan küçük girilirse 0 a eşitle
        if(event.target.nextElementSibling.innerText<0){
            event.target.nextElementSibling.innerText = 0
        }
    }
    

  // artıya basınca çalıştır
    if (event.target.classList.contains('plus-img')){
        // adedi artır
        event.target.previousElementSibling.innerText++
        //ürün adedi 9 u geçmesin
        if(event.target.previousElementSibling.innerText >9){
            //9 dan büyük ürün adedi girilirse uyarı titlesi açılsın
        
               document.querySelector(".mostten").style.display='block';
               //ürün adedi 9 da sabit kalsın
               event.target.previousElementSibling.innerText =9
    
           }
    }
    // cart ekleye tıklayınca çalıştır
    if(event.target.classList.contains('add-cart')){

      // ürün adedi 0 dan büyükse
        if(event.target.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText>0){
            //aded artınca sepetin içini görünür yap
            document.querySelector('.box-content').style.display='block';
            document.querySelector('.empty').style.display ='none';
            document.querySelector('.top-quantity').style.display ='block'
            // ürün fiyatını sepitin içindeki ürün fiyatına eşile
            document.querySelector('.price-product').innerText = document.querySelector('.cost-price').innerText;
            //seçilen ürün adedini sepetteki adede eşitle
            document.querySelector('.quantity-product').innerText = document.querySelector('.quantity').innerText;
            //sepetteki fiyat totali hesapla
            


        }
        document.querySelector('.total-product').innerText = event.target.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText * 125;
        document.querySelector('.top-quantity').innerText = event.target.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText;
        if(event.target.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText==0){
            document.querySelector('.box-content').style.display='none';
            document.querySelector('.empty').style.display ='block';
            document.querySelector('.top-quantity').style.display='none';
        }
        
    }


});




















// Phần xử lí option price trên mobile

var priceOptionMobileLink = document.querySelector('.header-sort-bar__link.price-option');

priceOptionMobileLink.addEventListener('click', function(event) {
    priceOptionMobileLink.classList.remove('default');
    var isDown = false;

    for(var i = 0; i < priceOptionMobileLink.classList.length; i++) {
        if (priceOptionMobileLink.classList[i] === 'down') {
            isDown = true;
            break;
        }
    }

    if (isDown) {
        priceOptionMobileLink.classList.remove('down')
        priceOptionMobileLink.classList.add('up')
    } else {
        priceOptionMobileLink.classList.remove('up')
        priceOptionMobileLink.classList.add('down')
    }
    
})


// Phần làm Slider

let sliderIndex = 0 ;

//showSlider()
function showSlider() {
    let i;
    var sliderItems = document.querySelectorAll('.slider__item')

    for (i = 0; i < sliderItems.length ; i++) {
        sliderItems[i].style.display = 'none';
    }

    sliderIndex ++;

    if(sliderIndex>sliderItems.length) {sliderIndex = 1}

    sliderItems[sliderIndex - 1].style.display = 'block';
    setTimeout(showSlider, 5000)

}


var cartItemApi = 'http://localhost:3000/cartItem';

function handleShowCartItems() {
    fetch(cartItemApi)
        .then(function(response) {
            return response.json()
        })

        .then(function(cartItems) {
            var cartContainerItems = document.querySelector('.header__cart-list');

            var htmls = cartItems.map(function(item) {
                return `<li class="header__cart-item">
                <a class="header__cart-item-link" href="">
                    <div class="header__cart-item-img-wrap">

                        <img src="${item.img}" alt="" class="header__cart-item-img">
                        
                    </div>
                    <div class="header__cart-item-text">
                        <p class="header__cart-item-name">
                            ${item.name}
                        </p>
                        <span class="header__cart-item-category">Phân loại: ${item.category}</span>
                    </div>
                    <div class="header__cart-item-right">
                        <span class="header__cart-item-price">
                            ${item.price}đ
                        </span>
                        <i class="fa-solid fa-xmark"></i>
                        <span class="header__cart-item-quantity">
                            ${item.quantity}
                        </span>
                        <button class="header__cart-item-close">Xóa</button>
                    </div>
                </a>
            </li>`

            })

            cartContainerItems.innerHTML = htmls.join('');
        })
}

handleShowCartItems()





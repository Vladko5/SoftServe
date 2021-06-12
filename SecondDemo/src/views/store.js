import { html, render } from 'https://unpkg.com/lit-html?module';

const shopItemTemplate = (name, img, price, num) => html`
<div class="shop-item">
    <span class="shop-item-title">${name}</span>
    <img class="shop-item-image" src=${img}>
    <div class="shop-item-details">
        <span class="shop-item-price">${price} BGN${num}</span>
        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
    </div>
</div>
`;

const cosmeticsTemplate = () => html`
    ${shopItemTemplate('Day Cream', './images/day-cream-3,40lev.jpg', 3.40)}
    ${shopItemTemplate('Parfum', './images/parfum-25ml-5,65lev.jpg', 5.65, ' - 25ml')}
    ${shopItemTemplate('Soap', './images/soap-1,79lev.jpg', 1.79)}
`;

const foodsTemplate = () => html`
    ${shopItemTemplate('Rakia', './images/rakiq-200ml-9lev.jpg', 9, ' - 200ml')}
    ${shopItemTemplate('Candies', './images/bonboni-100gr-4lev.jpg', 4, ' - 100gr')}
    ${shopItemTemplate('Honey', './images/honey-230gr-10lev.jpg', 10, ' - 230gr')}
`;

const maleClothesTemplate = () => html`
    ${shopItemTemplate('Macedon Costume', './images/male-egeiska-makedonska-310lev.jpg', 310)}
    ${shopItemTemplate('Shopski Costume', './images/male-shopska-300lev.jpg', 300)}
    ${shopItemTemplate('Rhodope Costume', './images/male-rodopska-265lev.jpg', 265)}
`;

const femaleClothesTemplate = () => html`
    ${shopItemTemplate('Pirin Costume', './images/female-pirin-costume-480lev.jpg', 480)}
    ${shopItemTemplate('Shopska Costume', './images/female-shopska-costume-260lev.jpg', 260)}
    ${shopItemTemplate('Tracian Costume', './images/female-tracian-costume-390lev.jpg', 390)}
`;

const souvenirsTemplate = () => html`
    ${shopItemTemplate('Wooden Boy', './images/wooden-doll1.jpg', 7.22)}
    ${shopItemTemplate('Wooden Boy 2', './images/wooden-doll2.jpg', 12.32)}
    ${shopItemTemplate('Wooden Girl', './images/wooden-doll3.jpg', 12.32)}
`;

const storeTemplate = () => html`
<section class="top-side"></section>
<section class="store">
    <section class="sidebar">
        <a id="myBtn" class="fas fa-shopping-basket"></a>
        <span class='cart-counter'>1</span>
        <ul>
            <li class="active">
                <a href="#" class="rose-btn">Rose Products
                    <span class="fas fa-caret-down first"></span>
                </a>
                <ul class="rose-show">
                    <li id="cosmetics"><a href="#">Cosmetics</a></li>
                    <li id="foods"><a href="#">Foods and Drinks</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="clothes-btn">Clothes
                    <span class="fas fa-caret-down second"></span>
                </a>
                <ul class="clothes-show">
                    <li id="male"><a href="#">Male</a></li>
                    <li id="female"><a href="#">Female</a></li>
                </ul>
            </li>
            <li id="souvenirs">
                <a href="#">Souvenirs</a>
            </li>
        </ul>
    </section>

    <section class="products">
        <img class="shop-img" src="./images/shop-online.png">
    </section>

    <section>
        <section id="myModal" class="modal">
            <section class="modal-content">
                <section class="modal-header">
                    <span class="close">&times;</span>
                </section>

                <section class="modal-body">
                    <section class="container content-section">
                        <h2 class="section-header">CART</h2>
                        <section class="cart-row">
                            <span class="cart-item cart-header cart-column">ITEM</span>
                            <span class="cart-price cart-header cart-column">PRICE</span>
                            <span class="cart-quantity cart-header cart-column">QUANTITY</span>
                        </section>

                        <section class="cart-items"></section>

                        <section class="cart-total">
                            <strong class="cart-total-title">Total</strong>
                            <span class="cart-total-price">0 BGN</span>
                        </section>
                        <button id="btn-purchase" class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
                    </section>
                </section>

                <section class="modal-footer"></section>
            </section>
        </section>
    </section>
</section>
`;

export async function storePage(ctx) {
    ctx.render(storeTemplate());

    // Functions for the dropdown menu on the sidebar 
    $('.rose-btn').click(function () {
        $('.rose-show').toggleClass("show");
        $('.first').toggleClass("rotate");
    });
    $('.clothes-btn').click(function () {
        $('.clothes-show').toggleClass("show1");
        $('.second').toggleClass("rotate");
    });

    // Functions for filtering(rendering) the products;
    const productsSection = document.getElementsByClassName('products')[0];
    $('#cosmetics').click(function () {
        render(cosmeticsTemplate(), productsSection);
    });

    $('#foods').click(function () {
        render(foodsTemplate(), productsSection);
    });

    $('#male').click(function () {
        render(maleClothesTemplate(), productsSection);
    });

    $('#female').click(function () {
        render(femaleClothesTemplate(), productsSection);
    });

    $('#souvenirs').click(function () {
        render(souvenirsTemplate(), productsSection);
    });

    // Cart functions;
    $('.btn-danger').click(function (e) {
        removeCartItem(e);
    });

    $('.cart-quantity-input').change(function (e) {
        quantityChanged(e);
    });

    $('.shop-item-button').click(function (e) {
        addToCartClicked(e);
    });

    $('#btn-purchase').click(function () {
        purchaseClicked();
    });

    function purchaseClicked() {
        const cartItems = document.getElementsByClassName('cart-items')[0];
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild);
        }
        updateCartTotal();
    }

    function removeCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    }

    function quantityChanged(event) {
        const input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        };
        updateCartTotal();
    }

    function addToCartClicked(event) {
        const button = event.target;
        const shopItem = button.parentElement.parentElement;
        const title = shopItem.getElementsByClassName('shop-item-title')[0].textContent;
        const price = shopItem.getElementsByClassName('shop-item-price')[0].textContent;
        const imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
        addItemToCart(title, price, imageSrc);
        updateCartTotal();
    }

    let cartItems = document.getElementsByClassName('cart-items')[0];
    function addItemToCart(title, price, imageSrc) {
        const cartItemNames = cartItems.getElementsByClassName('cart-item-title');
        for (let i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].textContent == title) {
                return;
            };
        };
        
        let cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        const cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                    <span class="cart-item-title">${title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>`;
        cartRow.innerHTML = cartRowContents;
        cartItems.append(cartRow);
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    }

    function updateCartTotal() {
        const cartItemContainer = document.getElementsByClassName('cart-items')[0];
        const cartRows = cartItemContainer.getElementsByClassName('cart-row');
        let total = 0;
        for (let i = 0; i < cartRows.length; i++) {
            const cartRow = cartRows[i];
            const priceElement = cartRow.getElementsByClassName('cart-price')[0];
            const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
            const price = parseFloat(priceElement.innerText.replace('BGN', ''));
            const quantity = quantityElement.value;
            total = total + (price * quantity);
        }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('cart-total-price')[0].innerText = total + ' BGN';
    }

    // Modal functions
    $('#myBtn').click(function () {
        $('#myModal').show();
    });

    $('.close').click(function () {
        $('#myModal').hide();
    });

    let counts = 0;
    $('.shop-item-button, .btn-danger, #btn-purchase').click(function () {
        counts = cartItems.childElementCount;
        if (counts > 0) {
            $(".cart-counter").animate({
                opacity: 1
            }, 0, function () {
                $(this).text(counts);
            });
        } else {
            $(".cart-counter").animate({
                opacity: 0
            });
        }
    });
}

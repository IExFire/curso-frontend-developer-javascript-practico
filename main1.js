const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const IsAsideClosed = aside.classList.contains('inactive');

    if (!IsAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive') //Con el toggle se pone o se quita la clase inactive

}

function toggleMobileMenu(){
    const IsAsideClosed = aside.classList.contains('inactive');

    if (!IsAsideClosed){
        aside.classList.add('inactive');
    }

    mobilMenu.classList.toggle('inactive'); //Con el toggle se pone o se quita la clase inactive
}

function toggleCarritoAside(){
    const IsMobileMenuClosed = mobilMenu.classList.contains('inactive');

    if (!IsMobileMenuClosed){
        mobilMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive') //Con el toggle se pone o se quita la clase inactive
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: "Computadora",
    price: 620,
    image: 'https://images.pexels.com/photos/5554697/pexels-photo-5554697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: "Automovil",
    price: 3840,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: "Guitarra",
    price: 440,
    image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: "Motocicleta",
    price: 2100,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div>
*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMovilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive') //Con el toggle se pone o se quita la clase inactive
}

function toggleMovilMenu(){
    mobilMenu.classList.toggle('inactive') //Con el toggle se pone o se quita la clase inactive
}

function toggleCarritoAside(){
    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!IsMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive') //Con el toggle se pone o se quita la clase inactive
}
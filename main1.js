const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

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
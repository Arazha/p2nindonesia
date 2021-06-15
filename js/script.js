// sidebar menu

const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.backdrop');
const close = document.getElementById('close');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  sidebar.classList.add('active');
  backdrop.classList.add('show');
});

close.addEventListener('click', () => {
  sidebar.classList.remove('active');
  backdrop.classList.remove('show');
});

// change navbar color when scroll

const nav = document.getElementById('navbar');

window.onscroll = () => {
  if (window.scrollY > 90) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

// smart navbar when scroll

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let currentScrolledPosition = window.scrollY || window.pageYOffset;
  let scrollingDown;

  if (currentScrolledPosition > previousScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;
};

const navbar = document.getElementById('navbar');

const handleNavScroll = () => {
  if (isScrollingDown()) {
    navbar.classList.add('scroll-down');
    navbar.classList.remove('scroll-up');
  } else {
    navbar.classList.add('scroll-up');
    navbar.classList.remove('scroll-down');
  }
}






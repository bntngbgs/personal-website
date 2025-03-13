import './style.css';

const navBar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.navlink');
const mobileBtn = document.querySelector('.mobile-btn');
let isMenuOpen = false;

navLink.forEach((item) => {
  if (item.pathname == '/index.html' && location.pathname == '/') {
    item.classList.add('active');
  } else if (item.href == location.href) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }

  console.log(item);
  console.log(location.pathname);
});

mobileBtn.addEventListener('click', () => {
  if (!isMenuOpen) {
    mobileBtn.classList.add('active-mobile');
    navBar.classList.add('open');

    setTimeout(() => {
      navBar.classList.add('slide-in');
    }, 100);

    isMenuOpen = true;
  } else {
    mobileBtn.classList.remove('active-mobile');
    navBar.classList.remove('slide-in');

    setTimeout(() => {
      navBar.classList.remove('open');
    }, 300);

    isMenuOpen = false;
  }
});

const closeMobileNav = () => {
  if (isMenuOpen) {
    mobileBtn.classList.remove('active-mobile');
    navBar.classList.remove('slide-in');

    setTimeout(() => {
      navBar.classList.remove('open');
    }, 300);
    isMenuOpen = false;
  }
};

window.addEventListener('resize', closeMobileNav);

window.addEventListener('scroll', closeMobileNav);

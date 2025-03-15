import './style.css';

const navBar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.navlink');
const mobileBtn = document.querySelector('.mobile-btn');
// const heroSection = document.getElementById('hero');
const pageSection = document.querySelectorAll('section');
let isMenuOpen = false;

// navLink.forEach((item) => {
//   if (item.pathname == '/index.html' && location.pathname == '/') {
//     item.classList.add('active');
//   } else if (item.href == location.href) {
//     item.classList.add('active');
//   } else {
//     item.classList.remove('active');
//   }

//   console.log(item);
//   console.log(location.pathname);
// });

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

const animateOnScroll = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'hero') {
        entry.target.children[0].classList.add('animate-hero');
      }

      if (entry.target.id === 'tech-stack') {
        entry.target.children[0].classList.add('animate-tech');
      }

      if (entry.target.id === 'project') {
        entry.target.children[0].classList.add('animate-project');
      }

      if (entry.target.id === 'cta') {
        entry.target.children[0].classList.add('animate-cta');
      }
    }
  });
};

const options = {
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(animateOnScroll, options);

pageSection.forEach((section) => observer.observe(section));

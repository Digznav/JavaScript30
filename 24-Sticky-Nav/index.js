var topnav = document.querySelector('#main');

var navTopPos = topnav.offsetTop;
var { height: navHeight } = topnav.getBoundingClientRect();

document.addEventListener('scroll', () => {
  if (window.scrollY >= navTopPos) {
    document.body.classList.add('fixed-nav');
    document.body.style.paddingTop = `${navHeight}px`;
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
});

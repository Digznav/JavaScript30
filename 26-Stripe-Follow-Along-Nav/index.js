var allNavItems = document.querySelectorAll('.navitem');
var dropdownBackground = document.querySelector('.dropdownBackground');
var currentNav = null;

function resetAll() {
  allNavItems.forEach(itm => {
    itm.classList.remove('trigger-enter', 'trigger-enter-active');
  });

  dropdownBackground.classList.remove('open');
}

// dropdownBackground.addEventListener('transitionend', event => {
// });

document.addEventListener('mouseover', function showDropdown(event) {
  if (event.target && event.target.classList.contains('navitem')) {
    var navitem = event.target;

    resetAll();

    dropdownBackground.classList.add('open');
    navitem.classList.add('trigger-enter');

    var dropdown = navitem.querySelector('.dropdown');
    var { width, height, x, y } = dropdown.getBoundingClientRect();

    dropdownBackground.style.width = `${width}px`;
    dropdownBackground.style.height = `${height}px`;
    dropdownBackground.style.transform = `translate(${x}px, 80px)`;
  }
});

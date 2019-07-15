const bullet = document.querySelector('.highlight');


document.addEventListener('mouseover', function highlightLink(event) {
  if (event.target && event.target.tagName == 'A') {
    var { width, height, left, top } = event.target.getBoundingClientRect();

    if (bullet.style.transform) {
      bullet.style.transition = 'all 0.05s';
    }

    bullet.style.width = `${width}px`;
    bullet.style.height = `${height}px`;
    bullet.style.transform = `translate(${left + window.scrollX}px, ${top + window.scrollY}px)`;
  }
});

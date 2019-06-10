function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event) {
  sliderImages.forEach(image => {
    // Halfway to the image.
    var slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    console.log(slideInAt);
    
    // Bottom of the image.
    var imageBottom = image.offsetTop + image.height;
    var isHalfShown = slideInAt > image.offsetTop;
    var isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
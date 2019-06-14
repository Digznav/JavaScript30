const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function checkArticles(string) {
  if (string.startsWith('The ') || string.startsWith('A ') || string.startsWith('An ')) {
    return string.replace(/^(The |A |An )/, '');
  }

  return string;
}

var sorted = bands.sort((a, b) => {
  var a1 = checkArticles(a);
  var b1 = checkArticles(b);

  // `a` is first.
  if (a1 < b1) {
    return -1;
  }

  // `b` is first.
  if (a1 > b1) {
    return 1;
  }

  // Both are the same.
  return 0;
});

document.getElementById('bands').innerHTML = sorted.reduce((html, band) => {
  return `
    ${html}
    <li>${band}</li>
  `;
}, '');

// const PregnantWife = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve(['Mini WesBos']);
//   }, 9000);
// });

// async function hospital() {
//   const labor = await PregnantWife;
//   const miniWesBos = labor.pop();

//   console.log(miniWesBos);
// }

// hospital();

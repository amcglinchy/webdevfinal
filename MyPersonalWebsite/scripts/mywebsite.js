
const btt1 = document.getElementById('btt');

btt1.addEventListener('mouseover', function handleMouseOver() {
  btt1.style.backgroundColor = 'rgb(241, 247, 86)';
  btt2.style.backgroundColor = 'rgb(255, 129, 198)';
  btt3.style.backgroundColor = 'rgb(255, 172, 64)';
});

btt1.addEventListener('mouseout', function handleMouseOut() {
  btt1.style.backgroundColor = 'rgb(255, 129, 198)';
  btt2.style.backgroundColor = 'rgb(255, 172, 64)';
  btt3.style.backgroundColor = 'rgb(241, 247, 86)';
});

const btt2 = document.getElementById('btt2');

btt2.addEventListener('mouseover', function handleMouseOver() {
  btt2.style.backgroundColor = 'rgb(255, 129, 198)';
  btt1.style.backgroundColor = 'rgb(241, 247, 86)';
  btt3.style.backgroundColor = 'rgb(255, 172, 64)';
});

btt2.addEventListener('mouseout', function handleMouseOut() {
  btt2.style.backgroundColor = 'rgb(255, 172, 64)';
  btt1.style.backgroundColor = 'rgb(255, 129, 198)';
  btt3.style.backgroundColor = 'rgb(241, 247, 86)';
});

const btt3 = document.getElementById('btt3');

btt3.addEventListener('mouseover', function handleMouseOver() {
  btt3.style.backgroundColor = 'rgb(255, 172, 64)';
  btt2.style.backgroundColor = 'rgb(255, 129, 198)';
  btt1.style.backgroundColor = 'rgb(241, 247, 86)';
});

btt3.addEventListener('mouseout', function handleMouseOut() {
  btt3.style.backgroundColor = 'rgb(241, 247, 86)';
  btt2.style.backgroundColor = 'rgb(255, 172, 64)';
  btt1.style.backgroundColor = 'rgb(255, 129, 198)';
});

ScrollReveal().reveal('.container', { delay: 75 })

//const myEnd = document.getElementById('end');

//window.onscroll = function(ev) {
//  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//      myEnd.style.color = 'black'
// }
//};


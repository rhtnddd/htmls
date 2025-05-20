const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const nextBtn= document.getElementById('nextBtn');
let currentIndex = 0;
let money=0;
let audio = new Audio('coin8-103286.mp3');
let myHeading = document.getElementById("myHeading");
myHeading.textContent = "돈:"+money;
function moveSlide() {
  track.style.transform = `translateX(-${150 * currentIndex}px)`;
}
document.addEventListener('keydown', (e) => {
  myHeading.textContent = "돈:"+money;
  if (e.key === 'ArrowRight') {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    else{
      audio.play();
      money++;
    }
    moveSlide();
  }
  if (e.key === 'ArrowLeft') {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    else{
      audio.play();
      money++;
    }
    moveSlide();
  }
  if (e.key === 'ArrowUp') {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    else{
      audio.play();
      money++;
    }
    moveSlide();
  }
  if (e.key === 'ArrowDown') {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    else{
      audio.play();
      money++;
    }
    moveSlide();
  }
});
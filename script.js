const track = document.querySelector('.track');
const track1 = document.querySelector('.track1');
const slides = document.querySelectorAll('.slide');
const slides1 = document.querySelectorAll('.slide1');
const button = document.querySelectorAll('.button')
const button1 = document.querySelectorAll('.button1')
const for1 = document.getElementById('for1');
const for2 = document.getElementById('for2');
const audio = document.getElementById('audio');
const nootnoot = document.getElementById('nootnoot');
const happy=document.getElementById('happy');
const carousel=document.querySelectorAll('.carousel');
const carousel1=document.querySelectorAll('.carousel1');
const nextbtn=document.getElementById('nextbtn');
const lastbtn=document.getElementById('lastbtn');
const nextbtn1=document.getElementById('nextbtn1');
const lastbtn1=document.getElementById('lastbtn1');

let currentIndex = 0;
let currentIndex1 = 0;
let count = 0;
let count1 = 0;
function moveSlide() {
    if(currentIndex==slides.length)
    {
        currentIndex=0;
    }
    if(currentIndex<0)
    {
        currentIndex=slides.length-1;
    }
  track.style.transform = `translateX(-${150 * currentIndex}px)`;
}
function moveSlide1() {
    if(currentIndex1==slides1.length)
    {
        currentIndex1=0;
    }
    if(currentIndex1<0)
    {
        currentIndex1=slides1.length-1;
    }
  track1.style.transform = `translateX(-${300 * currentIndex1}px)`;
}
nootnoot.addEventListener('click',()=>{
  carousel1.forEach(c1 => c1.style.display = 'block');
  carousel.forEach(c => c.style.display = 'none');
  button1.forEach(b1 => b1.style.display = 'block');
  button.forEach(b => b.style.display = 'none');

})
happy.addEventListener('click',()=>{
  carousel.forEach(c => c.style.display = 'block');
  carousel1.forEach(c1 => c1.style.display = 'none');
  button.forEach(b => b.style.display = 'block');
  button1.forEach(b1 => b1.style.display = 'none');
})
for1.addEventListener('click',()=>{
let intervalId = setInterval(() => {
  currentIndex++;
  moveSlide();
  count++;

  if (count >= 70) {
    clearInterval(intervalId);
  }
}, 100);
var audio = new Audio('01 My Happy Song.mp3');
audio.play();
setTimeout(() => {
   currentIndex++;
   count=0;
   moveSlide();
 }, 7001);
});
for2.addEventListener('click',()=>{
let intervalId1 = setInterval(() => {
  currentIndex1++;
  moveSlide1();
  count1++;
  if (count1 >= 4) {
    clearInterval(intervalId1);
  }
}, 1000);
  var audio = new Audio('noot-noot-made-with-Voicemod.mp3');
  audio.play();
   setTimeout(() => {
    currentIndex1++;
    count1=0;
    moveSlide1();
  }, 9000);
});
nextbtn.addEventListener('click',()=>{
  currentIndex++;
  moveSlide();
})
lastbtn.addEventListener('click',()=>{
  currentIndex--;
  moveSlide();
})
nextbtn1.addEventListener('click',()=>{
  currentIndex1++;
  moveSlide1();
})
lastbtn1.addEventListener('click',()=>{
  currentIndex1--;
  moveSlide1();
})
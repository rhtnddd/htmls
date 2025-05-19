const track = document.querySelector('.track');
const track1 = document.querySelector('.track1');
const track2 = document.querySelector('.track2');
const slides = document.querySelectorAll('.slide');
const slides1 = document.querySelectorAll('.slide1');
const slides2 = document.querySelectorAll('.slide2');
const button = document.querySelectorAll('.button');
const button1 = document.querySelectorAll('.button1');
const button2 = document.querySelectorAll('.button2');
const for1 = document.getElementById('for1');
const for2 = document.getElementById('for2');
const for3 = document.getElementById('for3');
const nootnoot = document.getElementById('nootnoot');
const happy=document.getElementById('happy');
const oio=document.getElementById('oio');
const carousel=document.querySelectorAll('.carousel');
const carousel1=document.querySelectorAll('.carousel1');
const carousel2=document.querySelectorAll('.carousel2');

let currentIndex = 0;
let currentIndex1 = 0;
let currentIndex2 = 0;
let count = 0;
let count1 = 0;
let counta = 0;
let countb = 0;
let countc = 0;
let angry = 0;
let angry1 = 0;
let angry2= 0;
let audio = new Audio('01 My Happy Song.mp3');
let audio1 = new Audio('noot-noot-made-with-Voicemod.mp3');
let audio2 = new Audio('oiia-oiia-spinning-cat-made-with-Voicemod.mp3');
function stopAllAudio() {
  [audio, audio1, audio2].forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
function moveSlide() {
    if(currentIndex==slides.length)
    {
        currentIndex=0;
    }
  track.style.transform = `translateX(-${150 * currentIndex}px)`;
}
function moveSlide1() {
    if(currentIndex1==slides1.length)
    {
        currentIndex1=0;
    }
  track1.style.transform = `translateX(-${300 * currentIndex1}px)`;
}
function moveSlide2() {
    if(currentIndex2==slides2.length)
    {
        currentIndex2=1;
    }
  track2.style.transform = `translateX(-${300 * currentIndex2}px)`;
}
nootnoot.addEventListener('click',()=>{
  stopAllAudio();
  carousel1.forEach(c1 => c1.style.display = 'block');
  carousel.forEach(c => c.style.display = 'none');
  carousel2.forEach(c2 => c2.style.display = 'none');
  button1.forEach(b1 => b1.style.display = 'flex');
  button.forEach(b => b.style.display = 'none');
  button2.forEach(b2 => b2.style.display = 'none');

})
happy.addEventListener('click',()=>{
  stopAllAudio();
  carousel.forEach(c => c.style.display = 'block');
  carousel1.forEach(c1 => c1.style.display = 'none');
  carousel2.forEach(c2 => c2.style.display = 'none');
  button.forEach(b => b.style.display = 'flex');
  button1.forEach(b1 => b1.style.display = 'none');
  button2.forEach(b2 => b2.style.display = 'none');
})
oio.addEventListener('click',()=>{
  stopAllAudio();
  carousel2.forEach(c2 => c2.style.display = 'block');
  carousel1.forEach(c1 => c1.style.display = 'none');
  carousel.forEach(c => c.style.display = 'none');
  button2.forEach(b2 => b2.style.display = 'flex');
  button1.forEach(b1 => b1.style.display = 'none');
  button.forEach(b => b.style.display = 'none');
})
for1.addEventListener('click',()=>{
  angry++;
   if(angry==2)
   {
    alert("미야이옹");
   }
   if(angry==4)
   {
    alert("미야이옹이오이오!(경고)");
   }
   if(angry>=5)
    {
      alert("미야앾야꺙꺄!");
      carousel.forEach(c => c.style.display = 'none');
      button.forEach(b => b.style.display = 'none');
      stopAllAudio();
    }
  let intervalId = setInterval(() => {
    currentIndex++;
    moveSlide();
    count++;
    if (count >= 70) {
      clearInterval(intervalId);
    }
  }, 100);
    audio.play();
    setTimeout(() => {
    currentIndex=0;
    count=0;
    moveSlide();
    if(angry<5)
    {
      angry=0;
    }
 }, 7001);
});
for2.addEventListener('click',()=>{
  angry1++;
  if(angry1==2)
   {
    alert("꿱꿲");
   }
   if(angry1==4)
   {
    alert("꾸에엒!(경고)");
   }
    if(angry1>=5)
    {
      alert("......");
      carousel1.forEach(c1 => c1.style.display = 'none');
      button1.forEach(b1 => b1.style.display = 'none');
      stopAllAudio();
    }
let intervalId1 = setInterval(() => {
  currentIndex1++;
  moveSlide1();
  count1++;
  if (count1 >= 4) {
    clearInterval(intervalId1);
  }
}, 1000);
  audio1.play();
   setTimeout(() => {
    currentIndex1=0;
    count1=0;
    moveSlide1();
     if(angry1<5)
    {
      angry1=0;
    }
  }, 9000);
});
for3.addEventListener('click',()=>{
  angry2++;
  if(angry2==2)
   {
    alert("oioioioi");
   }
   if(angry2==4)
   {
    alert("oioii(경고)");
   }
  if(angry2>=5)
    {
      alert("oioiooooiiioioioio!!!!oioi!!");
      carousel2.forEach(c2 => c2.style.display = 'none');
      button2.forEach(b2 => b2.style.display = 'none');/*ek aksemfdjTek.*/
      stopAllAudio();
    }
  function runAnimation(count, interval, callback) {
    let step = 0;
    let intervalId = setInterval(() => {
      currentIndex2++;
      moveSlide2();
      step++;
      if (step >= count) {
        clearInterval(intervalId);
        currentIndex2 = 0;
        moveSlide2();
        if (callback) {
          setTimeout(callback, 1000);
        }
      }
    }, interval);
  }
    runAnimation(16, 100, () => { 
      runAnimation(8, 300, () => {
        runAnimation(480, 50, () => {
          runAnimation(600, 20);
      });
    });
  })
  audio2.play();
   setTimeout(() => {
    currentIndex2=0;
    counta=0;
    countb=0;
    countc=0;
    if(angry2<5)
    {
      angry2=0;
    }
    moveSlide2();
  }, 44000);
});
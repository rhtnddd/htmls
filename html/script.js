const track = document.querySelectorAll('.track, .track1, .track2');
const slides = document.querySelectorAll('.slide');
const slides1 = document.querySelectorAll('.slide1');
const slides2 = document.querySelectorAll('.slide2');
const button = document.querySelectorAll('.button, .button1, .button2');
const for1 = document.getElementById('for1');
const for2 = document.getElementById('for2');
const for3 = document.getElementById('for3');
const nootnoot = document.getElementById('nootnoot');
const happy=document.getElementById('happy');
const oio=document.getElementById('oio');
const carousel=document.querySelectorAll('.carousel, .carousel1, .carousel2');

let currentIndex = [0,0,0];
let count = [0,0,0,0,0];
let angry = [0,0,0];
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
    if(currentIndex[0] >= slides.length) {
        currentIndex[0] = 0;
    }
    track[0].style.transform = `translateX(-${150 * currentIndex[0]}px)`;
}
function moveSlide1() {
    if(currentIndex[1] >= slides1.length) {
        currentIndex[1] = 0;
    }
    track[1].style.transform = `translateX(-${300 * currentIndex[1]}px)`;
}
function moveSlide2() {
    if(currentIndex[2] >= slides2.length) {
        currentIndex[2] = 1;
    }
    track[2].style.transform = `translateX(-${300 * currentIndex[2]}px)`;
}
nootnoot.addEventListener('click',()=>{
  stopAllAudio();
  carousel[1].style.display = 'block';
  carousel[0].style.display = 'none';
  carousel[2].style.display = 'none';
  button[1].style.display = 'flex';
  button[0].style.display = 'none';
  button[2].style.display = 'none';

})
happy.addEventListener('click',()=>{
  stopAllAudio();
  carousel[0].style.display = 'block';
  carousel[1].style.display = 'none';
  carousel[2].style.display = 'none';
  button[0].style.display = 'flex';
  button[1].style.display = 'none';
  button[2].style.display = 'none';
})
oio.addEventListener('click',()=>{
  stopAllAudio();
  carousel[2].style.display = 'block';
  carousel[1].style.display = 'none';
  carousel[0].style.display = 'none';
  button[2].style.display = 'flex';
  button[1].style.display = 'none';
  button[0].style.display = 'none';
})
for1.addEventListener('click',()=>{
  angry[0]++;
   if(angry[0]==2)
   {
    alert("미야이옹");
   }
   if(angry[0]==4)
   {
    alert("미야이옹이오이오!(경고)");
   }
   if(angry[0]>=5)
    {
      alert("미야앾야꺙꺄!");
      carousel[0].style.display = 'none';
      button[0].style.display = 'none';
      stopAllAudio();
    }
  let intervalId = setInterval(() => {
    currentIndex[0]++;
    moveSlide();
    count[0]++;
    if (count[0] >= 70) {
      clearInterval(intervalId);
    }
  }, 100);
    audio.play();
    setTimeout(() => {
    currentIndex[0]=0;
    count[0]=0;
    moveSlide();
    if(angry[0]<5)
    {
      angry[0]=0;
    }
 }, 7001);
});
for2.addEventListener('click',()=>{
  angry[1]++;
  if(angry[1]==2)
   {
    alert("꿱꿲");
   }
   if(angry[1]==4)
   {
    alert("꾸에엒!(경고)");
   }
    if(angry[1]>=5)
    {
      alert("......");
      carousel[1].style.display = 'none';
      button[1].style.display = 'none';
      stopAllAudio();
    }
let intervalId1 = setInterval(() => {
  currentIndex[1]++;
  moveSlide1();
  count[1]++;
  if (count[1] >= 4) {
    clearInterval(intervalId1);
  }
}, 1000);
  audio1.play();
   setTimeout(() => {
    currentIndex[1]=0;
    count[1]=0;
    moveSlide1();
     if(angry[1]<5)
    {
      angry[1]=0;
    }
  }, 9000);
});
for3.addEventListener('click',()=>{
  angry[2]++;
  if(angry[2]==2)
   {
    alert("oioioioi");
   }
   if(angry[2]==4)
   {
    alert("oioii(경고)");
   }
  if(angry[2]>=5)
    {
      alert("oioiooooiiioioioio!!!!oioi!!");
      carousel[2].style.display = 'none';
      button[2].style.display = 'none';
      stopAllAudio();
    }
  function runAnimation(count, interval, callback) {
    let step = 0;
    let intervalId = setInterval(() => {
      currentIndex[2]++;
      moveSlide2();
      step++;
      if (step >= count) {
        clearInterval(intervalId);
        currentIndex[2] = 0;
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
    currentIndex[2]=0;
    count[2]=0;
    count[3]=0;
    count[4]=0;
    if(angry[2]<5)
    {
      angry[2]=0;
    }
    moveSlide2();
  }, 44000);
});
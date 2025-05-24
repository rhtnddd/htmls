const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const nextBtn= document.getElementById('nextBtn');
const up = document.getElementById('up');
const bgm = document.getElementById('bgm');
let currentIndex = 0;
let money=100000000;
let moneyup=1;
let okclick=0;
let upgrade=500;
let audio = new Audio('coin8-103286.mp3');
let audio1 = new Audio('exploration-chiptune-rpg-adventure-theme-336428.mp3');
audio.volume = 0.3;
let myHeading = document.getElementById("myHeading"); //bgm만듬
let upmoney = document.getElementById("upmoney");
upmoney.textContent = " 테무산 도끼:"+upgrade+"원";
myHeading.textContent = "머니머니머니:"+money;
function moveSlide() {
  track.style.transform = `translateX(-${150 * currentIndex}px)`;
}
bgm.onclick=()=>{
  bgm.style.display = 'none';
  audio1.loop=true;
  audio1.play();
}
up.onclick=()=>{
  if(money>=upgrade)
  {
    if(okclick==0)
    {
      money-=upgrade;
      okclick=1;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "다이소 도끼:"+upgrade+"원";
      moneyup+=1;
    }
    else if(okclick==1)
    {
      money-=upgrade;
      okclick=2;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "고물점에서 산 도끼:"+upgrade+"원";
      moneyup+=1;
    }
    else if(okclick==2)
    {
      money-=upgrade;
      okclick=3;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "쿠팡에서 시킨 도끼:"+upgrade+"원";
      moneyup+=2;
    }
     else if(okclick==3)
    {
      money-=upgrade;
      okclick=4;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "일반 도끼:"+upgrade+"원";
      moneyup+=5;
    }
  }
}
document.addEventListener('keydown', () => {
  myHeading.textContent = "머니머니머니:"+money;
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    else{
      audio.play();
      money+=moneyup;
    }
    moveSlide();
});

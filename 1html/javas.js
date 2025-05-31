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
let myHeading = document.getElementById("myHeading"); //도끼 완벽
let upmoney = document.getElementById("upmoney");
upmoney.textContent = " 다이소 도끼:"+upgrade+"골드";
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
    if(okclick===0)
    {
      currentIndex=2;
      money-=upgrade;
      okclick=1;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "고물점에서 산 도끼:"+upgrade+"골드";
      moneyup+=1;
    }
    else if(okclick===1)
    {
      currentIndex=4;
      money-=upgrade;
      okclick=2;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "쿠팡에서 시킨 도끼:"+upgrade+"골드";
      moneyup+=1;
    }
    else if(okclick===2)
    {
      currentIndex=6;
      money-=upgrade;
      okclick=3;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "일반 도끼:"+upgrade+"골드";
      moneyup+=2;
    }
    else if(okclick===3)
    {
      currentIndex=8;
      money-=upgrade;
      okclick=4;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "은도끼:"+upgrade+"골드";
      moneyup+=5;
    }
    else if(okclick===4)
    {
      currentIndex=10;
      money-=upgrade;
      okclick=5;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "금도끼:"+upgrade+"골드";
      moneyup+=10;
    }
    else if(okclick===5)
    {
      currentIndex=12;
      money-=upgrade;
      okclick=6;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "비브라늄 도끼:"+upgrade+"골드";
      moneyup+=20;
    }
    else if(okclick===6)
    {
      currentIndex=14;
      money-=upgrade;
      okclick=7;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "네더라이트 도끼:"+upgrade+"골드";
      moneyup+=50;
    }
    else if(okclick===7)
    {
      currentIndex=16;
      money-=upgrade;
      okclick=8;
      upgrade*=3;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "묠니르:"+upgrade+"골드";
      moneyup+=100;
    }
    else if(okclick===8)
    {
      okclick=9;
      moneyup+=500;
      currentIndex=18;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "도끼 강화 완료";
    }
  }
}
document.addEventListener('keydown', () => {
  myHeading.textContent = "머니머니머니:"+money;
  if(okclick==0)
  {
    currentIndex++;
    if(currentIndex===2)
    {
      currentIndex=0;
    }
  }
  else if(okclick==1)
  {
    currentIndex++;
    if(currentIndex===4)
    {
      currentIndex=2;
    }
  }
  else if(okclick===2)
  {
        currentIndex++;
    if(currentIndex===6)
    {
      currentIndex=4;
    }
  }
  else if(okclick===3)
  {
    currentIndex++;
    if(currentIndex===8)
    {
      currentIndex=6;
    }
  }
  else if(okclick===4)
  {
    currentIndex++;
    if(currentIndex===10)
    {
      currentIndex=8;
    }
  }
  else if(okclick===5)
  {
    currentIndex++;
    if(currentIndex===12)
    {
      currentIndex=10;
    }
  }
  else if(okclick===6)
  {
    currentIndex++;
    if(currentIndex===14)
    {
      currentIndex=12;
    }
  }
  else if(okclick===7)
  {
    currentIndex++;
    if(currentIndex===16)
    {
      currentIndex=14;
    }
  }
  else if(okclick===8)
  {
    currentIndex++;
    if(currentIndex===18)
    {
      currentIndex=16;
    }
  }
    else if(okclick===9)
  {
    currentIndex++;
    if(currentIndex===20)
    {
      currentIndex=18;
    }
  }
  audio.play();
  money+=moneyup;
  moveSlide();
});

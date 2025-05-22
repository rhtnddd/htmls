const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const nextBtn= document.getElementById('nextBtn');
const up = document.getElementById('up');
let currentIndex = 0;
let money=100000000;
let moneyup=1;
let okclick=0;
let upgrade=500;
let audio = new Audio('coin8-103286.mp3');
let myHeading = document.getElementById("myHeading"); //도끼만듬
let upmoney = document.getElementById("upmoney");
upmoney.textContent = "강화:"+upgrade+"원";
myHeading.textContent = "머니머니머니:"+money;
function moveSlide() {
  track.style.transform = `translateX(-${150 * currentIndex}px)`;
}
up.onclick=()=>{
  if(money>=upgrade)
  {
    if(okclick==0)
    {
      money-=upgrade;
      okclick=1;
      upgrade*=3;
      upmoney.textContent = "강화:"+upgrade+"원";
      moneyup+=1;
    }
    else if(okclick==1)
    {
      money-=upgrade;
      okclick=2;
      upgrade*=3;
      upmoney.textContent = "강화:"+upgrade+"원";
      moneyup+=1;
    }
    else if(okclick==2)
    {
      money-=upgrade;
      okclick=3;
      upgrade*=3;
      upmoney.textContent = "강화:"+upgrade+"원";
      moneyup+=2;
    }
     else if(okclick==3)
    {
      money-=upgrade;
      okclick=4;
      upgrade*=3;
      upmoney.textContent = "강화:"+upgrade+"원";
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

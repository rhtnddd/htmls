const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const petimg = document.querySelectorAll('.petimg , .petimg1 , .petimg2 , .petimg3 , .petimg4');
const nextBtn= document.getElementById('nextBtn');
const up = document.getElementById('up');
const bgm = document.getElementById('bgm');
const petspone = document.getElementById('petspone');
const casinomoney = document.getElementById('casinomoney');
const casinoclick = document.getElementById('casinoclick');
const backback = document.getElementById('backback');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spinBth = document.getElementById("spin");
const cave = document.getElementById("cave");
const cavespot=document.getElementById("body");
const mineral = document.getElementById("mineral");
const dia = document.getElementById("dia");
canvas.width = 500;
canvas.height = 500;
const testData = [
    { id: 0, text: "0배", background: "#ab6c66" },
    { id: 1, text: "2배", background: "#86bc85" },
    { id: 2, text: "3배", background: "#a5adce" },
];


let diam = 1;
let spinning = false;
let selectedSegment = null;
let rotationCount = 20;
let totalRotation = 0;
let startTimestamp = null;
let duration = 5000;
let segments = [...testData];
let currentIndex = 0;
let money=0;
let moneyup=1;
let okclick=0;
let casino=0;
let petclick=0;
let upgrade=500;
let petupgrade=2000;
let audio = new Audio('coin8-103286.mp3');
let audio1 = new Audio('exploration-chiptune-rpg-adventure-theme-336428.mp3');
audio.volume = 0.2;
audio1.volume= 0.7;



let myHeading = document.getElementById("myHeading");
let upmoney = document.getElementById("upmoney");
let petname = document.getElementById("petname");
upmoney.textContent = "다이소 도끼:"+upgrade+"골드";
myHeading.textContent = "머니머니머니:"+money;
petname.textContent = "강아지(초당골드:25):"+petupgrade+"골드";


document.addEventListener('mousemove', (e) => {
    dia.style.left = e.pageX + 'px';
    dia.style.top = e.pageY + 'px';
});
function drawCircle() {
    ctx.beginPath();
    ctx.arc(250, 250, 240, 0, Math.PI * 2);
    ctx.closePath();
    
    ctx.fillStyle = "#63FF84";
    ctx.fill();
    ctx.stroke();
}
drawCircle()
function drawPointer() {
    ctx.beginPath();
    ctx.moveTo(250, 20);
    ctx.lineTo(243, 6);
    ctx.lineTo(257, 6);
    ctx.closePath();

    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();
}
drawPointer()
function drawSegments(angle) {
    const addAngle = (Math.PI * 2) / segments.length;
    ctx.clearRect(0, 0, 500, 500);

    segments.forEach((segment, index) => {
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 240 - 1, angle, angle + addAngle);
        ctx.closePath();

        ctx.fillStyle = segment.background;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.save();

        ctx.translate(250, 250);
        ctx.rotate(angle + addAngle / 2);

        ctx.textAlign = "center";
        ctx.font = "bold 28px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(segment.text, 240 / 2, 0);

        ctx.restore();
        angle += addAngle;
    });

    drawPointer();
}
drawSegments(0);
function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}
function animate(timestamp) {
    if (!spinning) {
        spinning = true;
        startTimestamp = timestamp;
    }

    let elapsed = timestamp - startTimestamp;
    let progress = easeInOutQuad(Math.min(elapsed / duration, 1));
    let angle = totalRotation * progress;

    drawSegments(angle);
    myHeading.textContent = "머니머니머니:" + money;
    if (progress < 1) {
        requestAnimationFrame(animate);
    } else {
        if (selectedSegment === 0) {
          money *= 0;
          myHeading.textContent = "머니머니머니:"+money;
        } else if (selectedSegment === 1) {
          money *= 2;
          myHeading.textContent = "머니머니머니:"+money;
        } else if (selectedSegment === 2) {
          money *= 3;
          myHeading.textContent = "머니머니머니:"+money;
        }
        spinning = false;
    }
}



function moveSlide() {
  track.style.transform = `translateX(-${150 * currentIndex}px)`;
}



spinBth.onclick=()=>{
  if (spinning){
    return;
  }
  selectedSegment = Math.floor(Math.random() * segments.length);
  const angle = (Math.PI * 2) / segments.length;
  const randomAngle = Math.random() * -angle;
  const correctionAngle = Math.PI * 1.5 - angle * selectedSegment;
  totalRotation = Math.PI * 2 * rotationCount + correctionAngle + randomAngle;
  requestAnimationFrame(animate);
}



casinomoney.onclick=()=>{
  casino=1;
  casinoclick.style.display = 'none';
  backback.style.display = 'flex';
  canvas.style.display="block";
  spinBth.style.display="flex";
}
backback.onclick=()=>{
  casino=0;
  casinoclick.style.display = 'block';
  backback.style.display = 'none';
  canvas.style.display="none";
  dia.style.display="none";
  myHeading.style.color="black";
  cavespot.style.backgroundImage = "url('png/sky.png')";
  mineral.style.display = "none";
  spinBth.style.display="none";
}
cave.onclick=()=>{
  casino=1;
  casinoclick.style.display = 'none';
  mineral.style.display="block";
  cavespot.style.backgroundImage = "url('png/cavespot.png')";
  myHeading.style.color="white";
  dia.style.display="block";
  backback.style.display = 'flex';
}
bgm.onclick=()=>{
  bgm.style.visibility = 'hidden';
  audio1.loop=true;
  audio1.play();
}
dia.onclick=()=>{
  if(money<3000)
  {
    alert('3000원 벌고 오세욤');
  }
  if(10000>money>=3000)
  {
    let mineral1=Math.floor(Math.random() * 30);
    money+=mineral1;
    myHeading.textContent = "머니머니머니:" + money;
  }
  if(money>=10000)
  {
    let mineral1=Math.floor(Math.random() * 100);
    money+=mineral1;
    myHeading.textContent = "머니머니머니:" + money;
  }
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
      money-=upgrade;
      moneyup+=500;
      currentIndex=18;
      myHeading.textContent = "머니머니머니:"+money;
      upmoney.textContent = "도끼 강화 완료";
    }
  }
}
petspone.onclick=()=>{
  if(money>=petupgrade)
  {
    if(petclick===0)
    {
      let intervalId = setInterval(() => {
        money+=25;
        myHeading.textContent = "머니머니머니:"+money;
      }, 1000);
      money-=petupgrade;
      petclick=1;
      petupgrade*=5;
      myHeading.textContent = "머니머니머니:"+money;
      petname.textContent = "고양이(초당골드100):"+petupgrade+"골드";
      petimg[0].style.display='block';
    }
    else if(petclick===1)
    {
      let intervalId = setInterval(() => {
        money+=100;
        myHeading.textContent = "머니머니머니:"+money;
      }, 1000);
      money-=petupgrade;
      petclick=2;
      petupgrade*=5;
      myHeading.textContent = "머니머니머니:"+money;
      petname.textContent = "곰(초당골드400):"+petupgrade+"골드";
      petimg[1].style.display='block';
    }
    else if(petclick===2)
    {
      let intervalId = setInterval(() => {
        money+=400;
        myHeading.textContent = "머니머니머니:"+money;
      }, 1000);
      money-=petupgrade;
      petclick=3;
      petupgrade*=5;
      myHeading.textContent = "머니머니머니:"+money;
      petname.textContent = "딱따구리(초당골드1000):"+petupgrade+"골드";
      petimg[2].style.display='block';
    }
    else if(petclick===3)
    {
      let intervalId = setInterval(() => {
        money+=1000;
        myHeading.textContent = "머니머니머니:"+money;
      }, 1000);
      money-=petupgrade;
      petclick=4;
      petupgrade*=5;
      myHeading.textContent = "머니머니머니:"+money;
      petname.textContent = "용(초당골드2000):"+petupgrade+"골드";
      petimg[3].style.display='block';
    }
        else if(petclick===4)
    {
      let intervalId = setInterval(() => {
        money+=2000;
        myHeading.textContent = "머니머니머니:"+money;
      }, 1000);
      money-=petupgrade;
      petclick=5;
      myHeading.textContent = "머니머니머니:"+money;
      petname.textContent = "펫 설치 완료";
      petimg[4].style.display='block';
    }
  }
}
  document.addEventListener('keydown', () => {
    myHeading.textContent = "머니머니머니:"+money;
    if(casino===0)
    {
      if(okclick===0)
      {
        currentIndex++;
        if(currentIndex===2)
        {
          currentIndex=0;
        }
      }
      else if(okclick===1)
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
    }
  });
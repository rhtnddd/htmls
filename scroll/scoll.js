const progressBar = document.getElementById('progressBar');
const ship = document.getElementById("ship");
const gameArea = document.getElementById("gameArea");
const bossbullet = document.createElement("div");
const redcolor = document.getElementById("redcolor");
let audio = new Audio('video-game-boss-fight-music-287355.mp3');
audio.play();
let heart = 10;
let currentWidth = parseFloat(progressBar.style.width) || 100;
let hp = document.getElementById("hp");
let pusent= document.getElementById("pusent");
pusent.textContent = "보스 hp"+currentWidth;
hp.textContent = "hp:"+heart;//다만들었다 하
document.addEventListener('mousemove', (e) => {
    ship.style.left = e.pageX + 'px';
    ship.style.top = e.pageY + 'px';
});
document.addEventListener("keydown", (e) => {
    if (e.key === "x" || e.key === "X") {
    shootBullet();
  }
});
function shootBullet() {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    
    const shipRect = ship.getBoundingClientRect();
    const gameRect = gameArea.getBoundingClientRect();
    
    bullet.style.left = `${shipRect.left + shipRect.width / 2 - 2 - gameRect.left}px`;
    bullet.style.top = `${shipRect.top - gameRect.top}px`;
    
    gameArea.appendChild(bullet);
    
    const interval = setInterval(() => {
        const currentTop = parseInt(bullet.style.top) || 0;
        const currentleft = parseInt(bullet.style.left) || 0;
        if(currentTop<=290 && currentleft<1020 && currentleft>710)
            {
                clearInterval(interval);
                bullet.remove();
                currentWidth -= 0.2;
                pusent.textContent = "보스 hp:"+currentWidth.toFixed(1);
                if(currentWidth<=0)
                {
                    gameArea.style.display = 'none';
                    if(heart==10)
                    {
                      document.querySelector('.perpectwin').style.display = 'block';
                    }
                    else{
                      document.querySelector('.win').style.display = 'block';
                    }
                }
                progressBar.style.width = currentWidth + '%';
            }
            else if (currentTop <= 0) {
                clearInterval(interval);
                bullet.remove();
                currentWidth += 1;
                progressBar.style.width = currentWidth + '%';
            } else {
                bullet.style.top = `${currentTop - 10}px`;
            }
    }, 30);
}
let intervalId = setInterval(() => {
  const randx = Math.floor(Math.random() * 1500);
  const bossbullet = document.createElement("div");
  bossbullet.classList.add("bossbullet"); 
    bossbullet.style.left = `${randx}px`;
    bossbullet.style.top = `0px`;
    gameArea.appendChild(bossbullet);
    const interval1 = setInterval(() => {
    const currentTop1 = parseInt(bossbullet.style.top) || 0;
    const bulletRect = bossbullet.getBoundingClientRect();
    const shipRect = ship.getBoundingClientRect();
    if (currentTop1 >= window.innerHeight) {
        clearInterval(interval1);
      bossbullet.remove();
    }
    else if (bulletRect.left < shipRect.right &&bulletRect.right > shipRect.left &&bulletRect.top < shipRect.bottom &&bulletRect.bottom > shipRect.top)
    {
        heart-=1;
        redcolor.style.filter="sepia(100%) saturate(700%) hue-rotate(-30deg) brightness(1.1)";
        setTimeout(()=>{
            redcolor.style.filter = "none";
        },1000);
        if(heart==0)
        {
            gameArea.style.display = 'none';
            document.querySelector('.gameov').style.display = 'block';
        }
        hp.textContent = " hp:"+heart;
        clearInterval(interval1);
        bossbullet.remove();
    }
    else {
        bossbullet.style.top = `${currentTop1 + 10}px`;
    }
  }, 10);
}, 200);
let isSpecialAttackRunning = false;

setInterval(() => {
  if (currentWidth <= 50 && currentWidth >= 46 && !isSpecialAttackRunning || currentWidth <= 80 && currentWidth >= 76 ) {
    isSpecialAttackRunning = true;

    let intervalId1 = setInterval(() => {
      const randx = Math.floor(Math.random() * 400) + 700;
      const bossbullet = document.createElement("div");
      bossbullet.classList.add("bossbullet");

      bossbullet.style.left = `${randx}px`;
      bossbullet.style.top = `0px`;
      gameArea.appendChild(bossbullet);

      const dropInterval = setInterval(() => {
        const currentTop = parseInt(bossbullet.style.top) || 0;
        const bulletRect = bossbullet.getBoundingClientRect();
        const shipRect = ship.getBoundingClientRect();

        if (currentTop >= window.innerHeight) {
          clearInterval(dropInterval);
          bossbullet.remove();
        } else if (
          bulletRect.left < shipRect.right &&
          bulletRect.right > shipRect.left &&
          bulletRect.top < shipRect.bottom &&
          bulletRect.bottom > shipRect.top
        ) {
          heart -= 1;
        redcolor.style.filter="sepia(100%) saturate(700%) hue-rotate(-30deg) brightness(1.1)";
        setTimeout(()=>{
            redcolor.style.filter = "none";
        },1000);
          if (heart <= 0) {
            gameArea.style.display = 'none';
            document.querySelector('.gameov').style.display = 'block';
          }
          hp.textContent = " hp:" + heart;
          clearInterval(dropInterval);
          bossbullet.remove();
        } else {
          bossbullet.style.top = `${currentTop + 10}px`;
        }
      }, 5);
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId1);
      if(currentWidth<=50)
      {
        currentWidth=45;
      }
      else
      {
          currentWidth=75;
      }
      isSpecialAttackRunning = false;
    }, 5000);
  }
}, 200);

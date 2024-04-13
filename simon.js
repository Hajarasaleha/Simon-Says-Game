let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"]
let scores=[]
let started=false;
let level=0;

let h2=document.querySelector("h2")
let h3=document.querySelector("h3")
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    randIdx=Math.floor(Math.random()*3);
    randColor=btns[randIdx];
    randBtn=document.querySelector(`.${randColor}`)

    gameFlash(randBtn);
    gameSeq.push(randColor)
    console.log(gameSeq)
}

function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000)
            
        }
    }else{
        h2.innerHTML=`Game over! Your score was <b> ${level-1}</b>.</br> press any key to start`;
       console.log("level is:",level)
       scores.push(level)
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        
      function getHighestScore(scores){
        return Math.max(...scores);
      }
      const highestScore= getHighestScore(scores);
      h3.innerText=`Highest Score: ${highestScore}`;
        reset();
    }
}


function btnPress(){
    
     let btn=this;
     userFlash(btn);
     let userclr=btn.getAttribute("id");
     userSeq.push(userclr);
     console.log(userSeq);
     checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}
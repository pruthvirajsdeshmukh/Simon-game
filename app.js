let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let level = 0;
let started = false;

let btns = ["red", "purple", "green", "yellow"];

document.addEventListener("keydown", function() {
    if (started==false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});
function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;

    h2.innerText =`Level ${level}`;
    let randomColor = btns[Math.floor(Math.random()*btns.length)];
    gameSeq.push(randomColor);
    console.log(gameSeq);
    let btn = document.querySelector(`.${randomColor}`);
    buttonFlash(btn);
}
function checkAns(ind) {
   
    if (userSeq[ind] === gameSeq[ind]) {
        console.log("success");
        if (userSeq.length === gameSeq.length) {
           setTimeout(() => {
               levelUp();
           }, 1000);
        }
    } else {
        h2.innerHTML = `Game Over, your score was <b>${level}</b>. <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        started = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
    }
}
function btnpressed() {
    let btn =this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor); 

    checkAns(userSeq.length-1);
}
let AllBtns  = document.querySelectorAll(".btn");
for(btnl of AllBtns){
    btnl.addEventListener("click", btnpressed);
}
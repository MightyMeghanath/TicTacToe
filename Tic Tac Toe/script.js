console.log("Welcome to Tic Tac Toe");
//Intializing
let turnAudio = new Audio('./turnAudio.mp3');
let winAudio = new Audio('./winAudio.mp3')
let turn = "X";
let boxitem = Array.from(document.getElementsByClassName("boxitem"));
let gameinfo = document.getElementsByClassName("gameInfo");
let reset = document.getElementById("Reset");
let boxtexts = document.getElementsByClassName("boxtexts")
let wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [6,4,2]
]

//Changing the turn
const turnChange =()=>{
   return turn === "X"? "0" : "X" ;
}
//win condition
const win = ()=>{
 wins.forEach((e)=>{
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText != "")){
        document.getElementsByClassName("info")[0].innerText = boxtexts[e[0]].innerText + " is the winner ";
       let isgameOvergame =true;
       winAudio.play();
    }
 })
}
//Game Logic
function makeMove(){
boxitem.forEach((element)=>{
    let boxtext = element.querySelector('.boxtexts');
    element.addEventListener("click",()=>{
        if (boxtext.innerText === ""){
            boxtext.innerText = turn;
           turn =  turnChange();
            turnAudio.play()
            win();
            if (isgameOver == false){
            document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
        }}
    })
})}
function stopMove(){
    if (isgameOver == true){
        boxitem.forEach((element)=>{
        let boxtext = element.querySelectorAll;('.boxtexts');
            element.innerText = " "
})}}
makeMove();
stopMove();
reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll('.boxtexts');
         Array.from(boxtext).forEach((element)=>{
            element.innerText = ""
            turn = "X"
            isgameOver = false;
            document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
         })
  })

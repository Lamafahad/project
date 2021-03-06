
let box = document.querySelectorAll('.gameboard');

let playerTurn = true;
let count = 0;

let playerX=0;
let playerO=0;
let tie = 0;


const scoreO = document.querySelector('#playerO');
const scoreX = document.querySelector('#playerX');

let audio = new Audio('audios/tada.wav');
let audioTie = new Audio('audios/tie.wav');
let audioScore = new Audio('audios/score.mp3');


const borderText = document.querySelector('#border');


// function that add X or O to the boxes 
//and write who's turn is next

const startPlay = function(){

if(playerTurn === true){
    this.innerText= 'X';
    playerTurn= false;
    borderText.innerText= ' O Turn ';
}  
else{
    this.innerText = 'O';
    playerTurn = true;
    borderText.innerText=' X Turn ';
}

count++;
console.count(count);

checkWinner();

// To prevent the player to click on the box again.

this.removeEventListener('click' , startPlay);

}

 for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click' , startPlay)
}


const checkWinner = function(){

let boxes = document.getElementsByClassName('gameboard');

    if(boxes[0].textContent == 'X' && boxes[1].textContent == 'X' && boxes[2].textContent == 'X') {
        box[0].style.textDecoration='line-through';  
        box[1].style.textDecoration='line-through';  
        box[2].style.textDecoration='line-through';  
        box[0].style.background='yellow';  
        box[1].style.background='yellow'; 
        box[2].style.background='yellow'; 
        playerX++;
        stopGame("X");
    }
    else 
    if(boxes[0].textContent == 'O' && boxes[1].textContent == 'O' && boxes[2].textContent == 'O'){
        box[0].style.textDecoration='line-through';  
        box[1].style.textDecoration='line-through';  
        box[2].style.textDecoration='line-through';  
        box[0].style.background='yellow';  
        box[1].style.background='yellow'; 
        box[2].style.background='yellow'; 
        playerO++;
        scoreO.innerText='playerO';
        stopGame("O");
    
    }
    
    else 
    if(boxes[3].textContent == 'X' && boxes[4].textContent == 'X' && boxes[5].textContent == 'X'){
        box[3].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[5].style.textDecoration='line-through';  
        box[3].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[5].style.background='yellow'; 
        playerX++;
     stopGame('X');}

    else 
    if(boxes[3].textContent == 'O' && boxes[4].textContent == 'O' && boxes[5].textContent == 'O'){
        box[3].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[5].style.textDecoration='line-through';  
        box[3].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[5].style.background='yellow'; 
        playerO++;
    stopGame('O');}

    else 
    if(boxes[6].textContent == 'X' && boxes[7].textContent == 'X' && boxes[8].textContent == 'X'){
        box[6].style.textDecoration='line-through';  
        box[7].style.textDecoration='line-through';  
        box[8].style.textDecoration='line-through';  
        box[6].style.background='yellow';  
        box[7].style.background='yellow'; 
        box[8].style.background='yellow'; 
        playerX++;
    stopGame('X');}

    else 
    if(boxes[6].textContent == 'O' && boxes[7].textContent == 'O' && boxes[8].textContent == 'O'){
        box[6].style.textDecoration='line-through';  
        box[7].style.textDecoration='line-through';  
        box[8].style.textDecoration='line-through';  
        box[6].style.background='yellow';  
        box[7].style.background='yellow'; 
        box[8].style.background='yellow'; 
        playerO++;
    stopGame('O');}

    else 
    if(boxes[0].textContent == 'X' && boxes[3].textContent == 'X' && boxes[6].textContent == 'X'){
        box[0].style.textDecoration='line-through';  
        box[3].style.textDecoration='line-through';  
        box[6].style.textDecoration='line-through';  
        box[0].style.background='yellow';  
        box[3].style.background='yellow'; 
        box[6].style.background='yellow'; 
        playerX++;
    stopGame('X');}
    else 
    if(boxes[0].textContent == 'O' && boxes[3].textContent == 'O' && boxes[6].textContent == 'O'){
        box[0].style.textDecoration='line-through';  
        box[3].style.textDecoration='line-through';  
        box[6].style.textDecoration='line-through';
        box[0].style.background='yellow';  
        box[3].style.background='yellow'; 
        box[6].style.background='yellow'; 
        playerO++;
    stopGame('O');}

    else 
    if(boxes[1].textContent == 'X' && boxes[4].textContent == 'X' && boxes[7].textContent == 'X'){
        box[1].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[7].style.textDecoration='line-through';
        box[1].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[7].style.background='yellow'; 
        playerX++;
    stopGame('X');}

    else 
    if(boxes[1].textContent == 'O' && boxes[4].textContent == 'O' && boxes[7].textContent == 'O'){
        box[1].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[7].style.textDecoration='line-through';
        box[1].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[7].style.background='yellow'; 
        playerO++;
    stopGame('O');}

    else 
    if(boxes[2].textContent == 'X' && boxes[5].textContent == 'X' && boxes[8].textContent == 'X'){
        box[2].style.textDecoration='line-through';  
        box[5].style.textDecoration='line-through';  
        box[8].style.textDecoration='line-through';
        box[2].style.background='yellow';  
        box[5].style.background='yellow'; 
        box[8].style.background='yellow'; 
        playerX++;
    stopGame('X');}

    else 
    if(boxes[2].textContent == 'O' && boxes[5].textContent == 'O' && boxes[8].textContent == 'O'){
        box[2].style.textDecoration='line-through';  
        box[5].style.textDecoration='line-through';  
        box[8].style.textDecoration='line-through';
        box[2].style.background='yellow';  
        box[5].style.background='yellow'; 
        box[8].style.background='yellow'; 
        playerO++;
    stopGame('O');}

    else 
    if(boxes[0].textContent == 'X' && boxes[4].textContent == 'X' && boxes[8].textContent == 'X'){
        box[0].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[8].style.textDecoration='line-through';
        box[0].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[8].style.background='yellow'; 
        playerX++;
    stopGame('X');}

    else 
    if(boxes[0].textContent == 'O' && boxes[4].textContent == 'O' && boxes[8].textContent == 'O'){
        box[0].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[8].style.textDecoration='line-through';
        box[0].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[8].style.background='yellow'; 
        playerO++;
    stopGame('O');}

    else 
    if(boxes[2].textContent == 'X' && boxes[4].textContent == 'X' && boxes[6].textContent == 'X'){
        box[2].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[6].style.textDecoration='line-through';
        box[2].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[6].style.background='yellow'; 
        playerX++;
    stopGame('X');}

    else 
    if(boxes[2].textContent == 'O' && boxes[4].textContent == 'O' && boxes[6].textContent == 'O'){
        box[2].style.textDecoration='line-through';  
        box[4].style.textDecoration='line-through';  
        box[6].style.textDecoration='line-through';
        box[2].style.background='yellow';  
        box[4].style.background='yellow'; 
        box[6].style.background='yellow'; 
        playerO++;
    stopGame('O');}

    else 
    if(count == 9){
        alert('Tie');
        audioTie.play();
        tie++;
    }

    console.log('player X is ' + playerX);
    console.log('player O is ' + playerO);

    dot1.innerText=playerX;
    dot2.innerText=playerO;
    dot3.innerText=tie;


}

const stopGame = function(x){    
    alert(x + ' Won!');
    audio.play();
    for (let i = 0; i < box.length; i++) {
    box[i].removeEventListener('click', startPlay);
    }
}

const playAgain = function(){
    for (let i = 0; i < box.length; i++) {
      box[i].innerText= ""; 
      box[i].style.background=("white");
      box[i].addEventListener('click' , startPlay);
      count=0;
      box[i].style.textDecoration='none';
}


}
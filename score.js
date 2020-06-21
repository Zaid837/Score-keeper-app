var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById("reset");
var p1display= document.getElementById('p1-display');
var p2display= document.getElementById('p2-display');
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector(".goal");
var winnerText = document.querySelector('#score').textContent;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1display.classList.add("winner");
            alert("Player 1 Wins" + " "+ p1Score+ " " + "to"+" "+ p2Score + " ! ");
            gameOver = true;
            
        }
        p1display.textContent = p1Score;
        
    }
    
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2display.classList.add("winner");
            alert("Player 2 Wins" + " "+ p1Score+ " " + "to"+" "+ p2Score + " ! ");
            gameOver = true;
        }
        p2display.textContent = p2Score; 
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0; 
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent =this.value;
    winningScore = Number(numInput.value);
    reset();
});
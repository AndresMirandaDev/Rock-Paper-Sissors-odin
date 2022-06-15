let answers=["rock", "paper" ,"scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let index=Math.floor(Math.random()*3);

    return answers[index];
}

function PlayRound(playerSelection, ComputerSelection){
    let player= playerSelection.toLowerCase();
    let computer= ComputerSelection.toLowerCase();
     
    if(player === computer){
        return "It's a Draw!";
    } else if (player === "rock" && computer ==="paper"){
        return "You Lose! Paper beats rock";
    } else if (player === "rock" && computer === "scissors"){
        return "You Win! Rock beats scissors";
    } else if (player ==="paper" && computer ==="rock"){
        return "You Win! Paper beats rock";
    } else if (player ==="paper" && computer === "scissors"){
        return "You Lose! Scissors beats paper";
    } else if (player === "scissors" && computer === "rock"){
        return "You Lose! Rock beats scissors";
    } else if (player === "scissors" && computer === "paper"){
        return "You Win! Scissors beats paper";
    }
};
const container =  document.querySelector("#container");
const result = document.createElement("h1");
const scoreBox= document.createElement("h2")

result.setAttribute("style", "background: grey; border:solid 3px red; min-height: 5px" );

const btn = document.querySelectorAll(".btn");
btn.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        result.textContent = (PlayRound(e.target.innerText, computerPlay()));
        CheckScore(result.textContent);
        checkWinner(scoreBox.textContent);
        
    })
});

container.appendChild(result);



function CheckScore(str){
    if(str.includes("Win")){
        playerScore++;
    }else if(str.includes("Lose")){
        computerScore++;
    }
   scoreBox.textContent = "Playerscore: " + " "+ playerScore +" " + "Computerscore :" +" " + computerScore
   return scoreBox.textContent
};

function Reset () {
    playerScore=0;
    computerScore=0;
}

function checkWinner (str) {
    if(playerScore===5){
        Reset();
        return result.textContent = "Congratulations, You Won The Game!!"
    }else if(computerScore===5){
        Reset();
        return result.textContent = "You Lost The Game, Try Again!"
    }
}

container.appendChild(scoreBox)







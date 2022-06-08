let answers=["rock", "paper" ,"scissors"];

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
}

let playerSelection=prompt("introduce rock,paper or scissors");

function game(){
    let playerScore=0;
    let computerScore=0;
    let results=[];
    
    for(let i = 0; i < 5 ; i++){
       results.push(PlayRound(playerSelection, computerPlay()))
        
    }
    results.map((round)=>{
        if (round.includes("Win")){
            playerScore =+ 1;
        
        } else if (round.includes("Lose")){
            computerScore =+1;
        }
    })
        console.log(results.join("\n"));
        console.log("PlayerScore: " + playerScore,"ComputerScore: " + computerScore); 
   
    if(playerScore === computerScore){
            console.log("It's a Draw!");
    }else if(playerScore > computerScore){
            console.log("You won the game!");
    }else{
            console.log("You Lost the game!");
    };
}
    


game();
let answers=["rock", "paper" ,"sissors"];

function computerPlay(){
    let index=Math.floor(Math.random()*3);

    return answers[index];
}

function PlayRound(playerSelection, ComputerSelection){
    let player= playerSelection.toLowerCase();
    let computer= ComputerSelection.toLowerCase();
     
    if(player === computer){
        return "It's a Draw!"
    }else if(player === "rock" && computer ==="paper"){
        return "You Lose! Paper beats rock"
    }else if(player === "rock" && computer === "sissors"){
        return "You Win! Rock beats sissors"
    }else if(player ==="paper" && computer ==="rock"){
        return "You Win! Paper beats rock"
    }else if(player ==="paper" && computer === "sissors"){
        return "You Lose! Sissors beats paper"
    }else if(player === "sissors" && computer === "rock"){
        return "You Lose! Rock beats sissors"
    }else if(player === "sissors" && computer === "paper"){
        return "You Win! Sissors beats paper"
    }
}

let playerSelection=prompt("introduce rock,paper or sissors")

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
            }else if(round.includes("Lose")){
                computerScore =+1;
            }
        })
        console.log(results.join("\n"));
        console.log("PlayerScore: " + playerScore,"ComputerScore: " + computerScore); 
        if(playerScore === computerScore){
            console.log("It's a Draw!")
        }else if(playerScore > computerScore){
            console.log("You won the game!")
        }else{
            console.log("You Lost the game!")
        }
    }
    


game();
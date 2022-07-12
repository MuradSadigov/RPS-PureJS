//Variables
const combinations = ["Rock", "Paper", "Scissors"];
let count_of_rounds = Number(prompt("How many rounds do you want to play?: "));
let score = count_of_rounds;
let comp_score = count_of_rounds;

//FUNCTIONS#########################
function computer_Play(comb)//+
{
    return comb[Math.round(Math.random() * 2)];
}
function game_Brain(comb, computerSelection, playerSelection)
{
    if(computerChoice == combinations[0] && playerChoice == combinations[1])
    {
        return 1;//Comp Wins
    }
    else if(computerChoice == combinations[0] && playerChoice == combinations[2])
    {
        return 0;//Comp Wins
    }
    else if(computerChoice == combinations[1] && playerChoice == combinations[0])
    {
        return 0;//Comp Wins
    }
    else if(computerChoice == combinations[1] && playerChoice == combinations[2])
    {
        return 1;//Player Wins
    }
    else if(computerChoice == combinations[2] && playerChoice == combinations[1])
    {
        return 0;//Comp Wins
    }
    else if(computerChoice == combinations[2] && playerChoice == combinations[0])
    {
        return 1;//Player Wins
    }
    else if(playerChoice == computerChoice)
    {
        return "Draw!";
    }
}
function Handling_Inputs(playerSelection)//+
{
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}
//####################---MAIN--#######################
function main()
{
    while(score != 0 && comp_score != 0)
    {
        const computerSelection = computer_Play(combinations);
        const playerSelection = Handling_Inputs(prompt('Choose\n "ROCK",\n "PAPER",\n "SCISSORS":'));
        console.log("Player selection:", playerSelection);
        console.log("Computer selection:", computerSelection);

        if(game_Brain(combinations, computerSelection, playerSelection) == true)
        {
            alert("Player Wins: " + playerSelection + " beats " + computerSelection + " !");
            score--;
        }
        else if(game_Brain(combinations, computerSelection, playerSelection) == false)
        {
            alert("Computer Wins: " + computerSelection + " beats " + playerSelection + " !");
            comp_score--;
        }
        else if(game_Brain(combinations, computerSelection, playerSelection) == "Draw!")
        {
            alert("Draw!");
        }
        console.log("COMPOUTER SCORE:", comp_score);
        console.log("PLAYER SCORE:", score);

    }
    if(score == 0)
    {
        alert("Congratulations, You won!");
    }
    else if(comp_score == 0)
    {
        alert("Unfortunately, Computer won!");
    }
}
main();

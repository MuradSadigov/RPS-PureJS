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
    if(computerSelection == comb[0] && playerSelection == comb[1])
    {
        return 1;
    }
    else if(computerSelection == comb[0] && playerSelection == comb[2])
    {
        return 0;
    }
    else if(computerSelection == comb[1] && playerSelection == comb[0])
    {
        return 0;
    }
    else if(computerSelection == comb[2] && playerSelection == comb[0])
    {
        return 1;
    }
    else if(playerSelection == computerSelection)
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
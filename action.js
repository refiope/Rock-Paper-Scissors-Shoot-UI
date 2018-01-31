let round = 0;
let playerScore = 0;
let computerScore = 0;
let player = '';
let scoreString = '';

let announce = document.querySelector('.announce');
let scoreKeeper = document.querySelector('.score');
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
      if (round <= 4)
      {
        playerChoice(e);
        playGame(player, computerChoice());
        score();
      }
      else
      {
        return;
      }
  });

});

function playerChoice (e)
{
  if (e.target.id === 'rock')
  {
    player = 'rock';
  }
  else if (e.target.id === 'paper')
  {
    player = 'paper';
  }
  else if (e.target.id === 'scissors')
  {
    player = 'scissors';
  }
}

function score ()
{
  if (round === 5)
  {
    if (playerScore > computerScore)
    {
      scoreKeeper.textContent = "Player Wins!" + " Player Score: " + playerScore +
                                " Computer Score: " + computerScore;
    }
    else if (playerScore < computerScore)
    {
      scoreKeeper.textContent = "Computer Wins!"  + " Player Score: " + playerScore +
                                " Computer Score: " + computerScore;
    }
    else
    {
      scoreKeeper.textContent = "Tie Score!"  + " Player Score: " + playerScore +
                                " Computer Score: " + computerScore;
    }
  }
  else {
    scoreString = "Round: " + round + "\n" +
                  "Player: " + playerScore + "\n" +
                  "Computer: " + computerScore;
    scoreKeeper.textContent = scoreString;
  }

}

function computerChoice ()
{
	let choice = ['rock', 'paper', 'scissors'];
	let number = Math.floor(Math.random()* 3);
	return choice[number]; //Random choice when called
}

function  playGame (playerSelect, computerSelect)
{
	switch (playerSelect)
	{
		case 'rock':
			if (computerSelect === 'rock')
			{
				announce.textContent = 'You have tied!';
        round++;
				break;
			}
			else if (computerSelect === 'paper')
			{
				announce.textContent = 'You lost! Rock loses against paper.';
        computerScore++;
        round++;
				break;
			}
			else if (computerSelect === 'scissors')
			{
				announce.textContent = 'You win! Rock wins against scissors.';
        playerScore++;
        round++;
				break;
			}
		case 'paper':
			if (computerSelect === 'rock')
			{
				announce.textContent = 'You win! Paper beats rock.';
        playerScore++;
        round++;
				break;
			}
			else if (computerSelect === 'paper')
			{
				announce.textContent = 'You tied!';
        round++;
				break;
			}
			else if (computerSelect === 'scissors')
			{
				announce.textContent = 'You lost! Paper loses against scissors.';
        computerScore++;
        round++;
				break;
			}
		case 'scissors':
			if (computerSelect === 'rock')
			{
				announce.textContent = 'You lost! Scissors loses against rock.';
        computerScore++;
        round++;
				break;
			}
			else if (computerSelect === 'paper')
			{
				announce.textContent = 'You win! Scissors beat paper.';
        playerScore++;
        round++;
				break;
			}
			else if (computerSelect === 'scissors')
			{
				announce.textContent = 'You tied!';
        round++;
				break;
			}
		default:
			announce.textContent = 'ERROR';
			break;
	}
}
//----------------------------end of functions----------------------------------

const gameObj = {
    gameContent: {
        roundCapHTML: document.querySelector('.gameContainer_Content_roundCap'),
        roundStartHTML: document.querySelector('.gameContainer_Content_roundStart'),
        playerScoreHTML: document.querySelector('.gameContainer_Content_PlayerScore'),
        computerScoreHTML: document.querySelector('.gameContainer_Content_ComputerScore')
    },
    rounds: {
        roundStart: 0,
        roundCap: 5,
    },
    computerPlayer: {
        computerPoints: 0,
    },
    youPlayer: {
        youPoints: 0,
    },
    clearStats(){
        this.rounds.roundStart = 0
        this.computerPlayer.computerPoints = 0
        this.youPlayer.youPoints = 0
    }
}


const gameContent = {
    buttons: {
        rock: document.querySelector('.rock'),
        paper: document.querySelector('.paper'),
        scissors: document.querySelector('.scissors'),
        restart: document.querySelector('.restart'),
        start: document.querySelector('.start')
    },
    gameLogic: {
        choices: {
            rockChoice: 'Rock',
            paperChoice: 'Paper',
            scissorsChoice: 'Scissors'
        }
    }
}

function startGame(){
    gameObj.gameContent.roundCapHTML.innerHTML = gameObj.rounds.roundCap
}


gameContent.buttons.start.addEventListener('click', startGame)


function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) + 1
    if(randomNum === 1){
        return gameContent.gameLogic.choices.rockChoice
    } else if (randomNum === 2){
        return gameContent.gameLogic.choices.paperChoice
    } else if (randomNum === 3){
        return gameContent.gameLogic.choices.scissorsChoice
    } else {
        return 'ERROR'
    }
}

function playerChoice(){
    
}
// This object contains the games HTML that will display what is happening in the game and contains the player/computer stats and some methods that will run in the game.

const gameObj = {
    gameContent: {
        roundCapHTML: document.querySelector('.gameContainer_Content_roundCap'),
        roundStartHTML: document.querySelector('.gameContainer_Content_roundStart'),
        playerScoreHTML: document.querySelector('.gameContainer_Content_PlayerScore'),
        computerScoreHTML: document.querySelector('.gameContainer_Content_ComputerScore'),
        winnerBannerHTML: document.querySelector('.gameContainer_Content_WinnerBanner'),
        gameBackground: $('body')
    },
    rounds: {
        roundStart: 0,
        roundCap: 5,
    },
    pointStats: {
        computerPoints: 0,
        youPoints: 0
    },
    toggles: {
        winnerBanner: false,
        restartButton: false,
        startButton: false
    },
    clearStats(){
        this.rounds.roundStart = 0
        this.computerPlayer.computerPoints = 0
        this.youPlayer.youPoints = 0
    },
    showWinnerBanner(){
        this.gameContent.winnerBannerHTML.style.visibility = 'visible';
    }
}
gameObj.gameContent.gameBackground.css({'background-color': `rgb(${192},${169},${169})`})

// This object contains the buttons and the games choices and some functionality
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
    },
    defaultStyle(){
        this.buttons.restart.style.visibility = 'hidden'
    },
    showRestartButton(){
        if(gameObj.toggles.restartButton === true){
            this.buttons.restart.style.visibility = 'visible'
        } else {
            this.buttons.restart.style.visibility = 'hidden'
        }
    }
}


// This will start the game
function startGame(){
    gameObj.gameContent.roundCapHTML.innerHTML = gameObj.rounds.roundCap
}


gameContent.buttons.start.addEventListener('click', startGame)

// This will get the computers choice in the game
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

// This will get your choice in the game
function playerChoice(){
    
}


// This will decide the winner
function decideWinner(){
    if(gameObj.pointStats.computerPoints === 5 && gameObj.pointStats.youPoints < 5){
        gameObj.toggles.winnerBanner = true
        gameObj.toggles.restartButton = true
        gameObj.showWinnerBanner()
    } else if (gameObj.pointStats.youPoints === 5 && gameObj.pointStats.computerPoints < 5){
        gameObj.toggles.winnerBanner = true
        gameObj.toggles.restartButton = true
        gameObj.showWinnerBanner()
    } else {
        return 'ERROR at [decideWinner] Function'
    }
}


// This function will restart the game
function restartGame(){

}


// Once the page loads the default style in the game will run
window.addEventListener('load', gameContent.defaultStyle())
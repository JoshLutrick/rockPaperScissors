const gameObj = {
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
        rock: $(".rock"),
        paper: $(".paper"),
        scissors: $('.scissors')
    },
}



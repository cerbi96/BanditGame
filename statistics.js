class Statistics {
    constructor() {
        this.gameResults = [{win:true,bid:2},{win:false,bid:10}];
    }
    checkGameStatistic(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }
    showGameStatistics() {
        let numberOfGames = this.gameResults.length;
        let numberOfWins = this.gameResults.filter(result => result.win).length;
        let numberOfLosses = this.gameResults.filter(result => !result.win).length;
        console.log(numberOfGames,numberOfWins,numberOfLosses);
    }
}

const stats = new Statistics();
class Game {
    constructor(start) {

        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.panels = [...document.querySelectorAll('div.color')];
        this.inputBid = document.getElementById("bid");
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');
        this.render();
    }

    // wartosci domyslne
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.panels.forEach((panel, index) => {
            panel.style.backgroundColor = colors[index]
        })


        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        if (result) {
            result = `Wygrałeś ${wonMoney} $`;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid} $`;
        }
        this.spanResult.textContent = result;


    }
    startGame() {

        if (this.inputBid.value < 1) return alert ('Kwota,ktorą chcesz gra jest za mała');
        const bid = Math.floor(this.inputBid.value);
        if(!this.wallet.checkEnoughMoney(bid)){
            return alert ("masz za mało środkow lub podana została nieprawidłowa wartośc")
        }
        this.wallet.changeWalletBalanse(bid,"-");
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
       const win = Result.gameStatus(colors);
        const wonMoney = Result.moneyWon(win,bid);
        this.wallet.changeWalletBalanse(wonMoney);
        this.stats.checkGameStatistic(win, bid);

        this.render(colors ,this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid , wonMoney) 
    }
}
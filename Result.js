class Result{
    
    static moneyWon(result,bid){
        if(result) return 5*bid;
        else return 0;
    }
static gameStatus(draw){
    if(draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0])
    {
        return true;
    }else{
         return false;
    }
}
}
